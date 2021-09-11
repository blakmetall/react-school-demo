import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveLearningCommunity = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: learningCommunityId, name, corporateEntityId, regionalEntityId } = item;

        const learningCommunitiesRequest = dispatch(
            getCollectionWhere('learningCommunities', [
                ['name', '==', name],
                ['corporateEntityId', '==', corporateEntityId],
                ['regionalEntityId', '==', regionalEntityId],
            ]),
        );

        return learningCommunitiesRequest.then(learningCommunities => {
            if (learningCommunities.length) {
                const found = learningCommunities.filter(learningCommunity => {
                    if (learningCommunity.id === learningCommunityId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'La comunidad de aprendizaje y entidad regional enviados ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveLearningCommunity;
