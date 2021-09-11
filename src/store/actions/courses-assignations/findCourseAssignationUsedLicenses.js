const { promise } = require('../../../helpers');
const { getItemsFoundFromSnapshot } = require('../../../helpers/firebase');

const findCourseAssignationUsedLicenses = corporateEntityId => {
    return (dispatch, getState, getFirebase) => {
        if (corporateEntityId) {
            return getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .where('corporateEntityId', '==', corporateEntityId)
                .get()
                .then(snapshot => {
                    const foundItems = getItemsFoundFromSnapshot(snapshot);
                    return promise(foundItems);
                });
        }

        return promise(0);
    };
};

export default findCourseAssignationUsedLicenses;
