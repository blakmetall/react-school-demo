import { promise } from '../../../helpers';
import { sendLearningCommunityManagersInvitations, updateLearningCommunityManagers } from './index';
import { updateProfileManagementRelations } from '../general';

const addLearningCommunity = (item, managers) => {
    return (dispatch, getState, getFirebase) => {
        const updateMultipleProfilesRelations = () => {
            if (managers && managers.length) {
                const updateProfileManagementRequests = managers.map(manager => {
                    const { email } = manager;

                    return dispatch(
                        updateProfileManagementRelations({
                            email,
                        }),
                    );
                });

                return Promise.all(updateProfileManagementRequests).then(() => {
                    return promise();
                });
            }

            return promise();
        };

        return getFirebase()
            .firestore()
            .collection('learningCommunities')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                const updateManagers = dispatch(updateLearningCommunityManagers(savedItem.id, managers));

                return updateManagers.then(() => {
                    const afterInvite = dispatch(sendLearningCommunityManagersInvitations(savedItem, managers));

                    const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                    return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                        return promise(savedItem);
                    });
                });
            });
    };
};

export default addLearningCommunity;
