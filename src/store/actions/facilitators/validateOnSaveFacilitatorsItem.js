import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveFacilitatorsItem = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: facilitatorId, corporateEntityId, regionalEntityId, learningCommunityId } = item;

        const facilitatorsRequest = dispatch(
            getCollectionWhere('facilitators', [
                ['corporateEntityId', '==', corporateEntityId],
                ['regionalEntityId', '==', regionalEntityId],
                ['learningCommunityId', '==', learningCommunityId],
            ]),
        );

        return facilitatorsRequest.then(facilitators => {
            if (facilitators.length) {
                const found = facilitators.filter(facilitator => {
                    if (facilitator.id === facilitatorId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg:
                            'La comunidad de aprendizaje, entidad regional y entidad corporativa enviados ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveFacilitatorsItem;
