import { promise } from '../../../helpers';

const addCourseAssignation = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('coursesAssignations')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };
                return promise(savedItem);
            });
    };
};

export default addCourseAssignation;
