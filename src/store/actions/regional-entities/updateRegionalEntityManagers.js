import { promise } from '../../../helpers';
import { updateManagersRelations } from '../general';

const updateRegionalEntityManagers = (docId, managers) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = managers.map(manager => {
                const { name, email } = manager;

                return getFirebase()
                    .firestore()
                    .collection('managers')
                    .where('email', '==', email)
                    .get()
                    .then(searchSnapshot => {
                        const managerFound = !searchSnapshot.empty;

                        if (managerFound) {
                            const managerDocId = searchSnapshot.docs[0].id;

                            return getFirebase()
                                .firestore()
                                .collection('managers')
                                .doc(managerDocId)
                                .update({ name })
                                .then(() => {
                                    return dispatch(updateManagersRelations(name, email)).then(() => {
                                        return promise({
                                            ...searchSnapshot.docs[0].data(),
                                            name,
                                            id: managerDocId,
                                        });
                                    });
                                });
                        }

                        const newManager = {
                            name,
                            email,
                        };

                        return getFirebase()
                            .firestore()
                            .collection('managers')
                            .add(newManager)
                            .then(docRef => {
                                return dispatch(updateManagersRelations(name, email)).then(() => {
                                    return promise({
                                        ...newManager,
                                        id: docRef.id,
                                    });
                                });
                            });
                    });
            });

            return Promise.all(asyncRequests).then(responses => {
                const managersIds = responses.map(manager => manager.id);
                const managersSaved = responses.filter(manager => manager.id);

                return getFirebase()
                    .firestore()
                    .collection('regionalEntities')
                    .doc(docId)
                    .update({ managersIds })
                    .then(() => {
                        return promise({ success: true, managersSaved });
                    });
            });
        }

        return promise({ success: false, managersSaved: [] });
    };
};

export default updateRegionalEntityManagers;
