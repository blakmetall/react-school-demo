import { promise } from '../../../helpers';

// eslint-disable-next-line
const addLearningCommunityGroupsBatch = batchData => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        return promise({
            completed: 0,
            failed: 0,
            invalid: 0,
        });
    };
};

export default addLearningCommunityGroupsBatch;
