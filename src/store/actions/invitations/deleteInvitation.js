import { promise } from '../../../helpers';
import { getInvitation } from './index';

const deleteInvitation = ({ docId, where }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('invitations')
                .doc(docId)
                .delete();
        }

        if (where) {
            return dispatch(getInvitation({ where })).then(item => {
                if (item) {
                    const { id } = item;

                    return getFirebase()
                        .firestore()
                        .collection('invitations')
                        .docId(id)
                        .delete();
                }

                return promise();
            });
        }

        return promise();
    };
};

export default deleteInvitation;
