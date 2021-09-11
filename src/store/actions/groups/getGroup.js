import { promise } from '../../../helpers';
import { getDocFromSnapshot } from '../../../helpers/firebase';
import { getGroups } from './index';

const getFacilitator = ({ docId, where }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('groups')
                .doc(docId)
                .get()
                .then(doc => promise(getDocFromSnapshot(doc)));
        }

        if (where) {
            return dispatch(getGroups({ where })).then(items => promise((items && items[0]) || undefined));
        }

        return promise(undefined);
    };
};

export default getFacilitator;
