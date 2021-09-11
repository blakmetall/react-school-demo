import { promise } from '../../../helpers';
import saveBookFiles from './saveBookFiles';

const addCorporateEntity = (item, uploadList) => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('books')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                if (uploadList && uploadList.length) {
                    return dispatch(saveBookFiles(savedItem, uploadList));
                }

                return promise(savedItem);
            });
    };
};

export default addCorporateEntity;
