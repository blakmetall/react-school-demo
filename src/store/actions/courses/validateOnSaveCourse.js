import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveCourse = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: courseId, name, categoryId } = item;

        const coursesRequest = dispatch(
            getCollectionWhere('courses', [
                ['name', '==', name],
                ['categoryId', '==', categoryId],
            ]),
        );

        return coursesRequest.then(courses => {
            if (courses.length) {
                const found = courses.filter(course => {
                    if (course.id === courseId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'La nombre del curso y categoría seleccionados ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveCourse;
