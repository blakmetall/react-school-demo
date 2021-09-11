import { promise } from '../../../helpers';

const addCategory = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('categories')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };
                return promise(savedItem);
            });
    };
};

export default addCategory;
