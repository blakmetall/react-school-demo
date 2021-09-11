import { promise } from '../../../helpers';

const deleteLearningCommunityGroup = itemId => {
    return (dispatch, getState, getFirebase) => {
        if (itemId) {
            return getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .doc(itemId)
                .delete();
        }

        return promise();
    };
};

export default deleteLearningCommunityGroup;
