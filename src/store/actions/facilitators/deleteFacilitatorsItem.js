import { promise } from '../../../helpers';

const deleteFacilitatorsItem = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('facilitators')
                .doc(itemId)
                .delete();
        }

        return promise();
    };
};

export default deleteFacilitatorsItem;
