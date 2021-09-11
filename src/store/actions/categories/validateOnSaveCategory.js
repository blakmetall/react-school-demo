import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveCategory = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: categoryId, name, iconSlug } = item;

        const categoriesRequest = dispatch(
            getCollectionWhere('categories', [
                ['name', '==', name],
                ['iconSlug', '==', iconSlug],
            ]),
        );

        return categoriesRequest.then(categories => {
            if (categories.length) {
                const found = categories.filter(category => {
                    if (category.id === categoryId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'La categoría e icono ingresados ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveCategory;
