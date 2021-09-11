const { promise } = require('../../../helpers');

const findManagersByIds = managersIds => {
    return (dispatch, getState, getFirebase) => {
        if (managersIds && managersIds.length) {
            const searchManagersRequests = managersIds.map(docId => {
                return getFirebase()
                    .firestore()
                    .collection('managers')
                    .doc(docId)
                    .get()
                    .then(docRef => {
                        return promise({
                            ...docRef.data(),
                            id: docRef.id,
                        });
                    });
            });

            return Promise.all(searchManagersRequests).then(managers => {
                return promise(managers);
            });
        }

        return promise([]);
    };
};

export default findManagersByIds;
