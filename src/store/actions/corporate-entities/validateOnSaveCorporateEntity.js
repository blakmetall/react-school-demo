import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveCorporateEntity = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: corporateEntityId, name, countryId, idSAP } = item;

        const corporateEntitiesRequest = dispatch(
            getCollectionWhere('corporateEntities', [
                ['name', '==', name],
                ['countryId', '==', countryId],
                ['idSAP', '==', idSAP],
            ]),
        );

        return corporateEntitiesRequest.then(corporateEntities => {
            if (corporateEntities.length) {
                const found = corporateEntities.filter(corporateEntity => {
                    if (corporateEntity.id === corporateEntityId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'La entidad corporativa, idSAP y país seleccionados ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveCorporateEntity;
