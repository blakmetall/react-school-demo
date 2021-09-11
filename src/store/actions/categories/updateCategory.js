import { promise } from '../../../helpers';
import { updateCategoryRelations } from './index';

const updateCategory = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('categories')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    const updatedRelated = dispatch(updateCategoryRelations(item, docId));

                    return updatedRelated.then(() => {
                        return promise(savedItem);
                    });
                });
        }

        return promise();
    };
};

export default updateCategory;
