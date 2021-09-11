import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveLearningCommunityGroup = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: learningCommunityGroupId, corporateEntityId, regionalEntityId, learningCommunityId } = item;

        const learningCommunityGroupsRequest = dispatch(
            getCollectionWhere('learningCommunityGroups', [
                ['corporateEntityId', '==', corporateEntityId],
                ['regionalEntityId', '==', regionalEntityId],
                ['learningCommunityId', '==', learningCommunityId],
            ]),
        );

        return learningCommunityGroupsRequest.then(learningCommunityGroups => {
            if (learningCommunityGroups.length) {
                const found = learningCommunityGroups.filter(learningCommunityGroup => {
                    if (learningCommunityGroup.id === learningCommunityGroupId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'Ya existe el listado de grupos para la comunidad de aprendizaje seleccionada.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveLearningCommunityGroup;
