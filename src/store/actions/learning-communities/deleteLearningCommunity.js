import { promise } from '../../../helpers';
import { afterDeleteLearningCommunity } from './index';

const deleteLearningCommunity = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('learningCommunities')
                .doc(itemId)
                .delete()
                .then(() => {
                    const afterDelete = dispatch(afterDeleteLearningCommunity(itemId));

                    return afterDelete.then(() => {
                        return promise();
                    });
                });
        }

        return promise();
    };
};

export default deleteLearningCommunity;
