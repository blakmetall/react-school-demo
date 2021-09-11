import { promise } from '../../../helpers';

const addFacilitatorsGroupsItem = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('facilitatorsGroups')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };
                return promise(savedItem);
            });
    };
};

export default addFacilitatorsGroupsItem;
