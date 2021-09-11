import { promise } from '../../../helpers';
import { getDocFromSnapshot } from '../../../helpers/firebase';
import { getLicenses } from './index';

const getLicense = ({ docId, where }) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('licenses')
                .doc(docId)
                .get()
                .then(doc => promise(getDocFromSnapshot(doc)));
        }

        if (where) {
            return dispatch(getLicenses({ where })).then(items => promise((items && items[0]) || undefined));
        }

        return promise(undefined);
    };
};

export default getLicense;
