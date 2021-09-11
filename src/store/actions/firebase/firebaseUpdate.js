import { awaitRequests, promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

const firebaseUpdate = ({ collection, docId, where, data }) => {
    return (dispatch, getState, getFirebase) => {
        // -- single update
        if (collection && docId && data) {
            return getFirebase()
                .firestore()
                .collection(collection)
                .doc(docId)
                .update(data)
                .then(() => promise({ ...data, id: docId }));
        }

        // -- plural update
        if (collection && where && data) {
            // eslint-disable-next-line
            let query = getFirebase()
                .firestore()
                .collection(collection);

            if (where && where.length) {
                for (let i = 0; i < where.length; i += 1) {
                    query = query.where(where[i][0], where[i][1], where[i][2]);
                }
            }

            return query.get().then(snapshot => {
                const items = getItemsFromSnapshot(snapshot);

                return awaitRequests(
                    items.map(item =>
                        getFirebase()
                            .firestore()
                            .collection(collection)
                            .doc(item.id)
                            .update(data)
                            .then(() => promise({ ...item, ...data, id: item.id })),
                    ),
                );
            });
        }

        return promise();
    };
};

export default firebaseUpdate;
