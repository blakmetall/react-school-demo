import { promise, objectKeysToArray } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const saveLicensesAvailability = ({ coursesLicenses, regionalEntityId }) => {
    return (dispatch, getState, getFirebase) => {
        if (coursesLicenses) {
            // update regional entities licenses
            if (regionalEntityId) {
                const saveRequests = objectKeysToArray(coursesLicenses).map(courseAssigned => {
                    const { courseAssignationId, corporateEntityId, courseId } = courseAssigned;

                    const foundOld = getFirebase()
                        .firestore()
                        .collection('licenses')
                        .where('courseAssignationId', '==', courseAssignationId)
                        .where('corporateEntityId', '==', corporateEntityId)
                        .where('courseId', '==', courseId)
                        .where('regionalEntityId', '==', regionalEntityId)
                        .where('type', '==', 'regional-entity')
                        .get();

                    return foundOld.then(snapshot => {
                        const found = getItemsFromSnapshot(snapshot);

                        const license = {
                            ...courseAssigned,
                            regionalEntityId,
                            type: 'regional-entity',
                        };

                        delete license.id;

                        if (found && found.length) {
                            const { id: licenseId } = found[0];

                            return getFirebase()
                                .firestore()
                                .collection('licenses')
                                .doc(licenseId)
                                .update(license);
                        }

                        return getFirebase()
                            .firestore()
                            .collection('licenses')
                            .add(license);
                    });
                });

                return Promise.all(saveRequests).then(() => {
                    return promise();
                });
            }
        }

        return promise();
    };
};

export default saveLicensesAvailability;
