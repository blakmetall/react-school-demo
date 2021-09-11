import { promise } from '../../../helpers';

const updateLiveClass = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('liveClasses')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    return promise(savedItem);
                });
        }

        return promise();
    };
};

export default updateLiveClass;
