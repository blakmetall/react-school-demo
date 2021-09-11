import { promise } from '../../../helpers';

const addRecordedClass = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('recordedClasses')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                return promise(savedItem);
            });
    };
};

export default addRecordedClass;
