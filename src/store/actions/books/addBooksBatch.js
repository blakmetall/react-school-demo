import { promise } from '../../../helpers';
import { validateBook } from '../../../views/admin/books/form/helpers';
import addBook from './addBook';

const addBooksBatch = (batchData, categoryId) => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const asyncRequests = [];
        const invalidItems = [];

        batchData.forEach(data => {
            const {
                Título: name,
                'ID (SAP)': idSAP,
                Descripción: description,
                'Libros exclusivos para facilitadores': isFacilitatorExclusive,
                'Validación de regionalidad válida': isEnabledRegionalValidity,
            } = data;

            const item = {
                name,
                idSAP: idSAP || '',
                description,
                isFacilitatorExclusive: isFacilitatorExclusive || false,
                isEnabledRegionalValidity: isEnabledRegionalValidity || false,
                categoryId,
            };

            if (validateBook(item, { isBatch: true })) {
                asyncRequests.push(
                    dispatch(addBook(item))
                        .then(() => {
                            return promise({
                                success: true,
                                item,
                            });
                        })
                        .catch(() => {
                            return promise({
                                success: false,
                                item,
                            });
                        }),
                );
            } else {
                invalidItems.push(item);
            }
        });

        return Promise.all(asyncRequests).then(responses => {
            const completed = responses.filter(res => res.success).length;
            const failed = responses.filter(res => !res.success).length;
            const invalid = invalidItems.length;

            return promise({
                completed,
                failed,
                invalid,
            });
        });
    };
};

export default addBooksBatch;
