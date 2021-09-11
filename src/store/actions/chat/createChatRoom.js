import { promise } from '../../../helpers';

export default function createChatRoom(courseId, courseRef, isIndividual, isForum) {
    if (courseId && courseRef) {
        return (dispatch, getState, getFirebase) => {
            return getFirebase()
                .firestore()
                .collection('chatRooms')
                .where('courseId', '==', courseId)
                .where('ref', '==', courseRef)
                .where('isIndividualChat', '==', !!isIndividual)
                .where('isForumChat', '==', !!isForum)
                .get()
                .then(querySnapshot => {
                    const result = { found: false };
                    querySnapshot.forEach(() => {
                        result.found = true;
                    });

                    if (!result.found) {
                        const newChatRoom = {
                            courseId,
                            ref: courseRef,
                            conversation: [],
                            isIndividualChat: !!isIndividual,
                            isForumChat: !!isForum,
                        };

                        return getFirebase()
                            .firestore()
                            .collection('chatRooms')
                            .add(newChatRoom);
                    }

                    return promise();
                });
        };
    }

    return promise();
}
