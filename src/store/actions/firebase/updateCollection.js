import { promise } from '../../../helpers';

const updateCollection = (collection, data, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection(collection)
                .doc(docId)
                .update(data);
        }

        return promise();
    };
};

export default updateCollection;
