import { promise } from '../../../helpers';

const updateCourse = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('courses')
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

export default updateCourse;
