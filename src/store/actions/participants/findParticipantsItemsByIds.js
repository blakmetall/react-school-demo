const { promise } = require('../../../helpers');

const findParticipantsItemsByIds = participantsIds => {
    return (dispatch, getState, getFirebase) => {
        if (participantsIds && participantsIds.length) {
            const searchGroupsItemsRequests = participantsIds.map(docId => {
                return getFirebase()
                    .firestore()
                    .collection('participants')
                    .doc(docId)
                    .get()
                    .then(docRef => {
                        return promise({
                            ...docRef.data(),
                            id: docRef.id,
                        });
                    });
            });

            return Promise.all(searchGroupsItemsRequests).then(groups => {
                return promise(groups);
            });
        }

        return promise([]);
    };
};

export default findParticipantsItemsByIds;
