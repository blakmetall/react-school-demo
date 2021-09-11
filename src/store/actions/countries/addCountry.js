import { promise } from '../../../helpers';
import { sendCountryManagerInvitation, updateCountryRelations } from './index';
import { updateProfileManagementRelations } from '../general';

const addCountry = item => {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .firestore()
            .collection('countries')
            .add(item)
            .then(snapshot => {
                const savedItem = { ...item, id: snapshot.id };

                const updateRelated = dispatch(updateCountryRelations(item, savedItem.id));

                return updateRelated.then(() => {
                    const afterInvite = dispatch(sendCountryManagerInvitation(savedItem));

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

export default addCountry;
