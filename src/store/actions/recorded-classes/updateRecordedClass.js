import { promise } from '../../../helpers';

const updateRecordedClass = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('recordedClasses')
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

export default updateRecordedClass;
