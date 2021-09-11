const { promise } = require('../../../helpers');
const { getFirstItemFromSnapshot } = require('../../../helpers/firebase');

const findCourseAssignationLicenses = (corporateEntityId, courseId) => {
    return (dispatch, getState, getFirebase) => {
        if (corporateEntityId && courseId) {
            return getFirebase()
                .firestore()
                .collection('coursesAssignations')
                .where('corporateEntityId', '==', corporateEntityId)
                .where('courseId', '==', courseId)
                .get()
                .then(snapshot => {
                    const foundItem = getFirstItemFromSnapshot(snapshot);

                    if (foundItem && foundItem.licenses) {
                        return promise(foundItem.licenses);
                    }

                    return promise(0);
                });
        }

        if (corporateEntityId) {
            return getFirebase()
                .firestore()
                .collection('coursesAssignations')
                .where('corporateEntityId', '==', corporateEntityId)
                .get()
                .then(snapshot => {
                    const foundItem = getFirstItemFromSnapshot(snapshot);

                    if (foundItem && foundItem.licenses) {
                        return promise(foundItem.licenses);
                    }

                    return promise(0);
                });
        }

        return promise(0);
    };
};

export default findCourseAssignationLicenses;
