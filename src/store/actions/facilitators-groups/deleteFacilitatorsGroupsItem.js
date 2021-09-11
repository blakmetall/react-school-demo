import { promise } from '../../../helpers';

const deleteFacilitatorsGroupsItem = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('facilitatorsGroups')
                .doc(itemId)
                .delete();
        }

        return promise();
    };
};

export default deleteFacilitatorsGroupsItem;
