const { promise } = require('../../../helpers');

const findGroupsItemsByIds = groupsIds => {
    return (dispatch, getState, getFirebase) => {
        if (groupsIds && groupsIds.length) {
            const searchGroupsItemsRequests = groupsIds.map(docId => {
                return getFirebase()
                    .firestore()
                    .collection('groups')
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

export default findGroupsItemsByIds;
