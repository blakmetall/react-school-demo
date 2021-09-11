import { promise } from '../../../helpers';

const deleteGroupsParticipantsItem = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('groupsParticipants')
                .doc(itemId)
                .delete();
        }

        return promise();
    };
};

export default deleteGroupsParticipantsItem;
