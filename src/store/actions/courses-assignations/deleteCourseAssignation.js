import { promise } from '../../../helpers';

const deleteCourseAssignation = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('coursesAssignations')
                .doc(itemId)
                .delete();
        }

        return promise();
    };
};

export default deleteCourseAssignation;
