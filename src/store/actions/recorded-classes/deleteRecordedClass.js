import { promise } from '../../../helpers';

const deleteRecordedClass = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('recordedClasses')
                .doc(itemId)
                .delete()
                .then(() => {
                    return promise(true);
                });
        }

        return promise();
    };
};

export default deleteRecordedClass;
