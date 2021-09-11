import { promise } from '../../../helpers';
import { updateManagersRelations } from '../general';

const updateCountryRelations = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            const { managerName, managerEmail } = item;

            const batch = getFirebase()
                .firestore()
                .batch();

            const asyncRequests = [];

            const updateInCorporateEntities = getFirebase()
                .firestore()
                .collection('corporateEntities')
                .where('countryId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('corporateEntities')
                            .doc(doc.id);

                        const data = {
                            countryName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return batch.commit();
                });

            asyncRequests.push(dispatch(updateManagersRelations(managerName, managerEmail)));
            asyncRequests.push(updateInCorporateEntities);

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        }

        return promise();
    };
};

export default updateCountryRelations;
