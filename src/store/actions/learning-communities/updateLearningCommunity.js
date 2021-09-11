import { promise } from '../../../helpers';
import { updateProfileManagementRelations } from '../general';
import {
    updateLearningCommunityManagers,
    sendLearningCommunityManagersInvitations,
    updateLearningCommunityRelations,
} from './index';

const updateLearningCommunity = (item, docId, managers, prevManagers) => {
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

        if (item && docId) {
            return getFirebase()
                .firestore()
                .collection('learningCommunities')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    const updatedRelated = dispatch(updateLearningCommunityRelations(item, docId));

                    return updatedRelated.then(() => {
                        const updateManagers = dispatch(updateLearningCommunityManagers(savedItem.id, managers));

                        return updateManagers.then(({ managersSaved }) => {
                            const afterInvite = dispatch(
                                sendLearningCommunityManagersInvitations(savedItem, managers, prevManagers),
                            );

                            const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                            return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                                return promise({ savedItem, managersSaved });
                            });
                        });
                    });
                });
        }

        return promise({ savedItem: undefined, managersSaved: [] });
    };
};

export default updateLearningCommunity;
