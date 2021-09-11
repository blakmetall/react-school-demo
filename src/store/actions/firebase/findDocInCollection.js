import { promise } from '../../../helpers';

const findDocInCollection = (collection, docId) => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection(collection)
            .doc(docId)
            .get()
            .then(doc => {
                if (!doc.isEmpty) {
                    return promise({
                        ...doc.data(),
                        id: doc.id,
                    });
                }

                return promise();
            });
    };
};

export default findDocInCollection;
