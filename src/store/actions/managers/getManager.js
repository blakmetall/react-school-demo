import { promise } from '../../../helpers';
import { getDocFromSnapshot } from '../../../helpers/firebase';
import { getManagers } from './index';

const getManager = ({ docId, where }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('managers')
                .doc(docId)
                .get()
                .then(doc => promise(getDocFromSnapshot(doc)));
        }

        if (where) {
            return dispatch(getManagers({ where })).then(items => promise((items && items[0]) || undefined));
        }

        return promise(undefined);
    };
};

export default getManager;
