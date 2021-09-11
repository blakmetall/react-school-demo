import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

// eslint-disable-next-line
const afterDeleteCountry = (docId, country) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = [];

            const updateInCorporateEntities = getFirebase()
                .firestore()
                .collection('corporateEntities')
                .where('countryId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const corporateEntities = getItemsFromSnapshot(querySnapshot);

                    if (corporateEntities.length) {
                        const updateRequests = corporateEntities.map(corporateEntity => {
                            return getFirebase()
                                .firestore()
                                .collection('corporateEntities')
                                .doc(corporateEntity.id)
                                .update({ countryId: '', countryName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            asyncRequests.push(updateInCorporateEntities);

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        }

        return promise();
    };
};

export default afterDeleteCountry;
