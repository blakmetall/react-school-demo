import { promise } from '../../../helpers';

const addProfile = ({ data }) => {
    return (dispatch, getState, getFirebase) => {
        if (data) {
            return getFirebase()
                .firestore()
                .collection('profiles')
                .add(data)
                .then(docRef => promise({ ...data, id: docRef.id }));
        }

        return promise(undefined);
    };
};

export default addProfile;
