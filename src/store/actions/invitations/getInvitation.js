import { promise } from '../../../helpers';
import { getDocFromSnapshot } from '../../../helpers/firebase';
import { getInvitations } from './index';

const getInvitation = ({ docId, where }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('invitations')
                .doc(docId)
                .get()
                .then(doc => promise(getDocFromSnapshot(doc)));
        }

        if (where) {
            return dispatch(getInvitations({ where })).then(items => promise((items && items[0]) || undefined));
        }

        return promise(undefined);
    };
};

export default getInvitation;
