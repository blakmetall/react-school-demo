import { promise } from '../../../helpers';
import { sendFacilitatorsItemManagersInvitations, updateFacilitatorsItemManagers } from './index';
import { updateProfileManagementRelations } from '../general';

const updateFacilitatorsItem = (item, docId, managers, prevManagers) => {
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
                .collection('facilitators')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    const updateManagers = dispatch(updateFacilitatorsItemManagers(savedItem.id, managers));

                    return updateManagers.then(({ managersSaved }) => {
                        const afterInvite = dispatch(sendFacilitatorsItemManagersInvitations(savedItem, managers, prevManagers));

                        const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                        return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                            return promise({ savedItem, managersSaved });
                        });
                    });
                });
        }

        return promise({ savedItem: undefined, managersSaved: [] });
    };
};

export default updateFacilitatorsItem;
