import { promise } from '../../../helpers';
import { validateCountry } from '../../../views/admin/countries/form/helpers';
import addCountry from './addCountry';

const addCountriesBatch = batchData => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const asyncRequests = [];
        const invalidItems = [];

        batchData.forEach(data => {
            const { País: name, Encargado: managerName, 'Correo electrónico': managerEmail } = data;

            const item = {
                name,
                managerName,
                managerEmail,
            };

            if (validateCountry(item)) {
                asyncRequests.push(
                    dispatch(addCountry(item))
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

export default addCountriesBatch;
