import { promise } from '../../../helpers';
import updateLearningCommunityGroupList from './updateLearningCommunityGroupList';
import updateLearningCommunityGroupRelations from './updateLearningCommunityGroupRelations';

const updateLearningCommunityGroup = (item, docId, groups, prevGroups) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('learningCommunityGroups')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    const updateGroups = dispatch(updateLearningCommunityGroupList(savedItem.id, groups, prevGroups));

                    return updateGroups.then(({ groupsIds, groupsAdded }) => {
                        const updatedRelated = dispatch(updateLearningCommunityGroupRelations(item, docId, groupsIds));

                        return updatedRelated.then(() => {
                            return promise({ savedItem, groupsIds, groupsAdded });
                        });
                    });
                });
        }

        return promise({ savedItem: undefined, groupsIds: [], groupsAdded: [] });
    };
};

export default updateLearningCommunityGroup;
