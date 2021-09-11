import { promise } from '../../../helpers';
import { validateCorporateEntity } from '../../../views/admin/corporate-entities/form/helpers';
import addCorporateEntity from './addCorporateEntity';

const addCorporateEntitiesBatch = batchData => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const asyncRequests = [];
        const invalidItems = [];

        batchData.forEach(data => {
            const {
                'Entidad Corporativa': name,
                Encargado: managerName,
                'Correo Electronico': managerEmail,
                'Código postal': postalCode,
                'ID (SAP)': idSAP,
            } = data;

            const item = {
                name,
                idSAP: idSAP || '',
                managerName,
                managerEmail,
                postalCode,
            };

            if (validateCorporateEntity(item, { isBatch: true })) {
                asyncRequests.push(
                    dispatch(addCorporateEntity(item))
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

export default addCorporateEntitiesBatch;
