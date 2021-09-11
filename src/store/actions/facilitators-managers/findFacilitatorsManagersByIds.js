const { promise } = require('../../../helpers');

const findFacilitatorsManagersByIds = facilitatorsManagersIds => {
    return (dispatch, getState, getFirebase) => {
        if (facilitatorsManagersIds && facilitatorsManagersIds.length) {
            const searchFacilitatorsManagersRequests = facilitatorsManagersIds.map(docId => {
                return getFirebase()
                    .firestore()
                    .collection('facilitatorsManagers')
                    .doc(docId)
                    .get()
                    .then(docRef => {
                        return promise({
                            ...docRef.data(),
                            id: docRef.id,
                        });
                    });
            });

            return Promise.all(searchFacilitatorsManagersRequests).then(facilitatorsManagers => {
                return promise(facilitatorsManagers);
            });
        }

        return promise([]);
    };
};

export default findFacilitatorsManagersByIds;
