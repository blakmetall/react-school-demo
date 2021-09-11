import { promise } from '../../../helpers';
import { deleteFile } from '../firebase';

const afterDeleteBook = (docId, book) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = [];

            const deleteBookFiles = () => {
                const bookData = (book && book.originalData) || book;

                if (bookData) {
                    const { document, photo } = bookData;

                    const deleteRequests = [];

                    if (document.storagePath) {
                        deleteRequests.push(dispatch(deleteFile(document.storagePath)));
                    }

                    if (photo.storagePath) {
                        deleteRequests.push(dispatch(deleteFile(photo.storagePath)));
                    }

                    return Promise.all(deleteRequests).then(() => {
                        return promise();
                    });
                }

                return promise();
            };

            asyncRequests.push(deleteBookFiles());

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        }

        return promise();
    };
};

export default afterDeleteBook;
