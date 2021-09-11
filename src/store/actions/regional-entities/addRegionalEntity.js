import { promise } from '../../../helpers';
import { saveLicensesAvailability } from '../licenses';
import { sendRegionalEntityManagersInvitations, updateRegionalEntityManagers } from './index';
import { updateProfileManagementRelations } from '../general';

const addRegionalEntity = (item, managers, coursesLicenses) => {
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
            .collection('regionalEntities')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                const updateManagers = dispatch(updateRegionalEntityManagers(savedItem.id, managers));

                const saveLicensesRequest = dispatch(
                    saveLicensesAvailability({ coursesLicenses, regionalEntityId: savedItem.id }),
                );

                return Promise.all([updateManagers, saveLicensesRequest]).then(() => {
                    const afterInvite = dispatch(sendRegionalEntityManagersInvitations(savedItem, managers));

                    const afterUpdateProfileManagements = updateMultipleProfilesRelations();

                    return Promise.all([afterInvite, afterUpdateProfileManagements]).then(() => {
                        return promise(savedItem);
                    });
                });
            });
    };
};

export default addRegionalEntity;
