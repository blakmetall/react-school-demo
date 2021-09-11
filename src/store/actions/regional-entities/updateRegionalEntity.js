import { promise } from '../../../helpers';
import { sendRegionalEntityManagersInvitations, updateRegionalEntityManagers, updateRegionalEntityRelations } from './index';
import { updateProfileManagementRelations } from '../general';
import { saveLicensesAvailability } from '../licenses';

const updateRegionalEntity = (item, docId, managers, prevManagers, coursesLicenses) => {
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
                .collection('regionalEntities')
                .doc(docId)
                .update(item)
                .then(() => {
                    const savedItem = { ...item, id: docId };

                    const updateRelatedRequest = dispatch(updateRegionalEntityRelations(item, docId));

                    const saveLicensesRequest = dispatch(
                        saveLicensesAvailability({ coursesLicenses, regionalEntityId: savedItem.id }),
                    );

                    return Promise.all([updateRelatedRequest, saveLicensesRequest]).then(() => {
                        const updateManagers = dispatch(updateRegionalEntityManagers(savedItem.id, managers));

                        return updateManagers.then(({ managersSaved }) => {
                            const afterInvite = dispatch(
                                sendRegionalEntityManagersInvitations(savedItem, managers, prevManagers),
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

export default updateRegionalEntity;
