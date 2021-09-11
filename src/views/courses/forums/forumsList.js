import React from 'react';
import PropTypes from 'prop-types';
import { courseForumsSort } from '../../../helpers/sort';
import ForumItem from './forumItem';

const ForumsList = ({ course, forums, onEditClick, onDeleteClick }) => {
    if (forums && forums.length) {
        const tmp = [...forums];
        const sorted = tmp.sort(courseForumsSort);

        return sorted.map((forum, index) => {
            const key = `forum-${index}`;

            return (
                <ForumItem key={key} forum={forum} courseId={course.id} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
            );
        });
    }

    return undefined;
};

ForumsList.propTypes = {
    course: PropTypes.any,
    forums: PropTypes.any,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

ForumsList.defaultProps = {
    course: undefined,
    forums: undefined,
    onEditClick: () => {},
    onDeleteClick: () => {},
};

export default ForumsList;
