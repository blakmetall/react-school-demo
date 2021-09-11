import { promise } from '../../../helpers';

const updateChatRoomConversation = (chatRoomId, conversation) => {
    if (chatRoomId && conversation) {
        return (dispatch, getState, getFirebase) => {
            getFirebase()
                .firestore()
                .collection('chatRooms')
                .doc(chatRoomId)
                .update({ conversation });
        };
    }

    return promise();
};

export default updateChatRoomConversation;
