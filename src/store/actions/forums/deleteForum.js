import { promise } from '../../../helpers';

const deleteForum = forumId => {
    return (dispatch, getState, getFirebase) => {
        if (forumId) {
            return getFirebase()
                .firestore()
                .collection('forums')
                .doc(forumId)
                .delete();
        }

        return promise();
    };
};

export default deleteForum;
