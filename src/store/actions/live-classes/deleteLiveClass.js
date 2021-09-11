import { promise } from '../../../helpers';

const deleteLiveClass = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('liveClasses')
                .doc(itemId)
                .delete()
                .then(() => {
                    return promise(true);
                });
        }

        return promise();
    };
};

export default deleteLiveClass;
