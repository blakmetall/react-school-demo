import { promise } from '../../../helpers';
import { getItemsFromSnapshot } from '../../../helpers/firebase';

// eslint-disable-next-line
const afterDeleteCategory = (docId) => {
    return (dispatch, getState, getFirebase) => {
        if (docId) {
            const asyncRequests = [];

            const updateInCourses = getFirebase()
                .firestore()
                .collection('courses')
                .where('categoryId', '==', docId)
                .get()
                .then(querySnapshot => {
                    const courses = getItemsFromSnapshot(querySnapshot);

                    if (courses.length) {
                        const updateRequests = courses.map(course => {
                            return getFirebase()
                                .firestore()
                                .collection('courses')
                                .doc(course.id)
                                .update({ categoryId: '', categoryName: '--' });
                        });

                        return Promise.all(updateRequests).then(() => {
                            return promise();
                        });
                    }

                    return promise();
                });

            asyncRequests.push(updateInCourses);

            return Promise.all(asyncRequests).then(() => {
                return promise();
            });
        }

        return promise();
    };
};

export default afterDeleteCategory;
