import React from 'react';
import PropTypes from 'prop-types';
import CourseRow from './courseRow';

const CourseRows = ({ courses }) => {
    if (courses.length) {
        return courses.map((course, index) => {
            const key = `course-${index}`;

            return <CourseRow key={key} course={course} index={index} />;
        });
    }

    return <></>;
};

CourseRows.propTypes = {
    courses: PropTypes.array,
};

CourseRows.defaultProps = {
    courses: undefined,
};

export default CourseRows;
