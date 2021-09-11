const { promise } = require('../../../helpers');

const addForum = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('forums')
            .add(item)
            .then(doc => {
                return promise({
                    ...item,
                    id: doc.id,
                });
            });
    };
};

export default addForum;
