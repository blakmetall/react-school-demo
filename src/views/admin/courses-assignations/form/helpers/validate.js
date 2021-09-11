import validator from 'validator';

const validateCourseAssignation = item => {
    const { corporateEntityId, courseId, licenses, dueDate } = item;

    if (!corporateEntityId || validator.isEmpty(corporateEntityId, { ignore_whitespace: true })) {
        return false;
    }

    if (!courseId || validator.isEmpty(courseId, { ignore_whitespace: true })) {
        return false;
    }

    if (!licenses) {
        return false;
    }

    if (!dueDate) {
        return false;
    }

    return true;
};

export default validateCourseAssignation;
