import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveCourseAssignation = item => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        const { id: courseAssignationId, corporateEntityId, courseId, dueDate } = item;

        const courseAssignationsRequest = dispatch(
            getCollectionWhere('coursesAssignations', [
                ['corporateEntityId', '==', corporateEntityId],
                ['courseId', '==', courseId],
                ['dueDate', '==', dueDate],
            ]),
        );

        return courseAssignationsRequest.then(coursesAssignations => {
            if (coursesAssignations.length) {
                const found = coursesAssignations.filter(courseAssignation => {
                    if (courseAssignation.id === courseAssignationId) {
                        return false;
                    }

                    return true;
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'La entidad corporativa, curso y fecha de vencimiento enviados ya se encuentran registrados.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveCourseAssignation;
