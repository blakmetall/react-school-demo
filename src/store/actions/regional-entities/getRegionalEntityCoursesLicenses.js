import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const getRegionalEntityCoursesLicenses = ({ corporateEntityId, regionalEntityId }) => {
    return (dispatch, getState, getFirebase) => {
        if (corporateEntityId && regionalEntityId) {
            const findRequest = getFirebase()
                .firestore()
                .collection('licenses')
                .where('corporateEntityId', '==', corporateEntityId)
                .where('regionalEntityId', '==', regionalEntityId)
                .where('type', '==', 'regional-entity')
                .get();

            return findRequest.then(snapshot => {
                const found = getItemsFromSnapshot(snapshot);

                if (found && found.length) {
                    return promise(found);
                }

                return promise([]);
            });
        }

        return promise([]);
    };
};

export default getRegionalEntityCoursesLicenses;
