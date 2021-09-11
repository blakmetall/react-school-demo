import { promise } from '../../../helpers';

const addCourse = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('courses')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };
                return promise(savedItem);
            });
    };
};

export default addCourse;
