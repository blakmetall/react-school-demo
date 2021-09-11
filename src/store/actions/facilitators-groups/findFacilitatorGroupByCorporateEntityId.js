const { promise } = require('../../../helpers');
const { getFirstItemFromSnapshot } = require('../../../helpers/firebase');

const findFacilitatorGroupByCorporateEntityId = corporateEntityId => {
    return (dispatch, getState, getFirebase) => {
        if (corporateEntityId) {
            return getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .where('corporateEntityId', '==', corporateEntityId)
                .get()
                .then(snapshot => {
                    const foundItem = getFirstItemFromSnapshot(snapshot);
                    return promise(foundItem);
                });
        }

        return promise(0);
    };
};

export default findFacilitatorGroupByCorporateEntityId;
