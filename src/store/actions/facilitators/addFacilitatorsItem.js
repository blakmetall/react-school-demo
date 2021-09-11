import { promise } from '../../../helpers';
import { sendFacilitatorsItemManagersInvitations, updateFacilitatorsItemManagers } from './index';
import { updateProfileManagementRelations } from '../general';

const addFacilitatorsItem = (item, managers) => {
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
            .collection('facilitators')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                const updateManagers = dispatch(updateFacilitatorsItemManagers(savedItem.id, managers));

                return updateManagers.then(() => {
                    const afterInvite = dispatch(sendFacilitatorsItemManagersInvitations(savedItem, managers));

                    const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                    return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                        return promise(savedItem);
                    });
                });
            });
    };
};

export default addFacilitatorsItem;
