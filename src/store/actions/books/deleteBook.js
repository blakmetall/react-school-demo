import { promise } from '../../../helpers';
import { afterDeleteBook } from '.';

const deleteBook = (itemId, book) => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('books')
                .doc(itemId)
                .delete()
                .then(() => {
                    const afterDeleteProcess = dispatch(afterDeleteBook(itemId, book));

                    return afterDeleteProcess.then(() => {
                        return promise(true);
                    });
                });
        }

        return promise();
    };
};

export default deleteBook;
