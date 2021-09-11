import { promise } from '../../../helpers';

const deleteCourse = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('courses')
                .doc(itemId)
                .delete();
        }

        return promise();
    };
};

export default deleteCourse;
