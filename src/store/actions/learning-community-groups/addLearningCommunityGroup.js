import { promise } from '../../../helpers';
import updateLearningCommunityGroupList from './updateLearningCommunityGroupList';

const addLearningCommunityGroup = (item, groups) => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('learningCommunityGroups')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                const updateGroups = dispatch(updateLearningCommunityGroupList(savedItem.id, groups));

                return updateGroups.then(({ groupsIds }) => {
                    return promise({ savedItem, groupsIds });
                });
            });
    };
};

export default addLearningCommunityGroup;
