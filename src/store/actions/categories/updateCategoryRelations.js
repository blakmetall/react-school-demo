import { promise } from '../../../helpers';

const updateCategoryRelations = (item, docId) => {
    return (dispatch, getState, getFirebase) => {
        if (item && docId) {
            const batch = getFirebase()
                .firestore()
                .batch();

            const updatePromises = [];

            const updateInCourses = getFirebase()
                .firestore()
                .collection('courses')
                .where('categoryId', '==', docId)
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const docRef = getFirebase()
                            .firestore()
                            .collection('courses')
                            .doc(doc.id);

                        const data = {
                            categoryName: item.name || '',
                        };

                        batch.update(docRef, data);
                    });

                    return promise();
                });

            updatePromises.push(updateInCourses);

            return Promise.all(updatePromises).then(() => {
                batch.commit().then(() => {
                    return promise();
                });
            });
        }

        return promise();
    };
};

export default updateCategoryRelations;
