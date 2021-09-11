import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveBook = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: bookId, name, categoryId, idSAP } = item;

        const booksRequests = dispatch(
            getCollectionWhere('books', [
                ['categoryId', '==', categoryId],
                ['name', '==', name],
                ['idSAP', '==', idSAP],
            ]),
        );

        return booksRequests.then(books => {
            if (books.length) {
                const found = books.filter(book => {
                    if (book.id === bookId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'El nombre del libro, idSAP y categoría ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveBook;
