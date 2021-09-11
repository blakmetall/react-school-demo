import { authTypes } from '../../types';

const setLearningCommunitySession = learningCommunity => ({
    type: authTypes.SET_LEARNING_COMMUNITY_DATA,
    payload: learningCommunity,
});

export default setLearningCommunitySession;
