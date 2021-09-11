import { promise } from '../../../helpers';

const addLiveClass = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('liveClasses')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                return promise(savedItem);
            });
    };
};

export default addLiveClass;
