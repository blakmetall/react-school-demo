import { awaitRequests, isArray, promise } from '../../../helpers';
import { firebaseUpdate } from '../firebase';
import { updateProfileManagementRelations } from '../general';
import { getCountries, getCountry } from '../countries';
import { sendCountryManagerInvitation, updateCountryRelations } from '.';

const updateCountry = ({ docId, where, data, prevManagerEmail }) => {
    return (dispatch, getState, getFirebase) => {
        // -- update
        const update = () => {
            // -- update with docId
            if (docId && data) {
                return dispatch(getCountry({ docId })).then(item => {
                    if (item) {
                        return dispatch(firebaseUpdate({ collection: 'countries', docId: item.id, data }));
                    }

                    return promise();
                });
            }

            // update where
            if (where && data) {
                return dispatch(getCountries({ where })).then(items =>
                    awaitRequests(items.map(item => dispatch(firebaseUpdate({ collection: 'countries', docId: item.id, data })))),
                );
            }

            return promise();
        };

        // -- update relations
        const updateRelations = country => {
            if (country) {
                return dispatch(updateCountryRelations(country, country.id)).then(() => {
                    // -- send invitation manager when is created or updated
                    if (prevManagerEmail !== country.managerEmail) {
                        dispatch(sendCountryManagerInvitation(country));
                    }

                    return dispatch(
                        updateProfileManagementRelations({
                            email: country.managerEmail,
                        }),
                    ).then(() => {
                        return promise(country);
                    });
                });
            }

            return promise(country);
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

export default updateCountry;
