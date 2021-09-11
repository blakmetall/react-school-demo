import { promise } from '../../../helpers';
import saveBookFiles from './saveBookFiles';

const updateCorporateEntity = (item, docId, uploadList) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('books')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    if (uploadList && uploadList.length) {
                        return dispatch(saveBookFiles(savedItem, uploadList));
                    }

                    return promise(savedItem);
                });
        }

        return promise();
    };
};

export default updateCorporateEntity;
