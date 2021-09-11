import { awaitRequests, isArray, promise } from '../../../helpers';
import { firebaseUpdate } from '../firebase';
import { updateProfileManagementRelations } from '../general';
import { getCorporateEntities, getCorporateEntity } from '../corporate-entities';
import { saveCorporateEntityFiles, sendCorporateEntityManagerInvitation, updateCorporateEntityRelations } from '.';

const updateCorporateEntity = ({ docId, where, data, prevManagerEmail, uploadList }) => {
    return (dispatch, getState, getFirebase) => {
        // -- update
        const update = () => {
            // -- update with docId
            if (docId && data) {
                return dispatch(getCorporateEntity({ docId })).then(item => {
                    if (item) {
                        return dispatch(firebaseUpdate({ collection: 'corporateEntities', docId: item.id, data }));
                    }

                    return promise();
                });
            }

            // update where
            if (where && data) {
                return dispatch(getCorporateEntities({ where })).then(items =>
                    awaitRequests(
                        items.map(item => dispatch(firebaseUpdate({ collection: 'corporateEntities', docId: item.id, data }))),
                    ),
                );
            }

            return promise();
        };

        // -- update relations
        const updateRelations = corporateEntity => {
            if (corporateEntity) {
                const { id: corporateEntityId, managerEmail } = corporateEntity;

                return dispatch(updateCorporateEntityRelations(corporateEntity, corporateEntityId)).then(() => {
                    // -- send invitation manager when is created or updated
                    if (prevManagerEmail !== managerEmail) {
                        dispatch(sendCorporateEntityManagerInvitation(corporateEntity));
                    }

                    return awaitRequests(
                        // --
                        dispatch(saveCorporateEntityFiles(corporateEntity, uploadList)),
                        // --
                        dispatch(updateProfileManagementRelations({ email: managerEmail })),
                        // --
                    ).then(() => promise(corporateEntity));
                });
            }

            return promise(corporateEntity);
        };

        // -- after update
        const afterUpdate = updateResponse =>
            isArray(updateResponse)
                ? awaitRequests(updateResponse.map(item => updateRelations(item)))
                : updateRelations(updateResponse);

        // -- run
        return update().then(res => afterUpdate(res));
    };
};

export default updateCorporateEntity;
