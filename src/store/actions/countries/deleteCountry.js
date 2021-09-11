import { promise } from '../../../helpers';
import { afterDeleteCountry } from './index';

const deleteCountry = (docId, country) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('countries')
                .doc(docId)
                .delete()
                .then(() => {
                    const afterDeleteProcess = dispatch(afterDeleteCountry(docId, country));

                    return afterDeleteProcess.then(() => {
                        return promise(true);
                    });
                });
        }

        return promise(false);
    };
};

export default deleteCountry;
