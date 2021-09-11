import { promise } from '../../../helpers';
import { saveCorporateEntityFiles, sendCorporateEntityManagerInvitation, updateCorporateEntityRelations } from '.';
import { updateProfileManagementRelations } from '../general';

const addCorporateEntity = (item, uploadList) => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('corporateEntities')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                if (uploadList && uploadList.length) {
                    const afterUploadFiles = dispatch(saveCorporateEntityFiles(savedItem, uploadList));

                    return afterUploadFiles.then(uploadResponse => {
                        const afterInvite = dispatch(sendCorporateEntityManagerInvitation(savedItem));

                        const updateProfileManagementRequest = dispatch(
                            updateProfileManagementRelations({
                                email: savedItem.managerEmail,
                            }),
                        );

                        return Promise.all([afterInvite, updateProfileManagementRequest]).then(() => {
                            return promise(uploadResponse);
                        });
                    });
                }

                const updateRelated = dispatch(updateCorporateEntityRelations(item, savedItem.id));

                return updateRelated.then(() => {
                    const afterInvite = dispatch(sendCorporateEntityManagerInvitation(savedItem));

                    const updateProfileManagementRequest = dispatch(
                        updateProfileManagementRelations({
                            email: savedItem.managerEmail,
                        }),
                    );

                    return Promise.all([afterInvite, updateProfileManagementRequest]).then(() => {
                        return promise(savedItem);
                    });
                });
            });
    };
};

export default addCorporateEntity;
