import { promise } from '../../../helpers';
import { afterDeleteCategory } from './index';

const deleteCategory = docId => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            return getFirebase()
                .firestore()
                .collection('categories')
                .doc(docId)
                .delete()
                .then(() => {
                    const afterDeleteProcess = dispatch(afterDeleteCategory(docId));

                    return afterDeleteProcess.then(() => {
                        return promise(true);
                    });
                });
        }

        return promise();
    };
};

export default deleteCategory;
