const { promise } = require('../../../helpers');

const updateForum = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('forums')
                .doc(docId)
                .update(item);
        }

        return promise();
    };
};

export default updateForum;
