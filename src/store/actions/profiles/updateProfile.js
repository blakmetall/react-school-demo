import { promise } from '../../../helpers';
import { getProfile } from './index';

const updateProfile = ({ docId, where, data }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId && data) {
            return getFirebase()
                .firestore()
                .collection('profiles')
                .doc(docId)
                .update(data)
                .then(() => promise({ ...data, id: docId }));
        }

        if (where && data) {
            return dispatch(getProfile({ where })).then(item => {
                if (item) {
                    const { id } = item;

                    return getFirebase()
                        .firestore()
                        .collection('profiles')
                        .docId(id)
                        .update(data)
                        .then(() => promise({ ...data, id }));
                }

                return promise();
            });
        }

        return promise();
    };
};

export default updateProfile;
