import React from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon, EditIcon, ViewIcon } from '../icons';
import { RenderIf } from '..';

const BookCardEvents = ({ hasView, hasEdit, hasDelete, onViewClick, onEditClick, onDeleteClick }) => {
    const hasActions = hasView || hasEdit || hasDelete;

    const handleOnView = e => {
        e.preventDefault();
        onViewClick();
    };

    const handleOnEdit = e => {
        e.preventDefault();
        onEditClick();
    };

    const handleOnDelete = e => {
        e.preventDefault();
        onDeleteClick();
    };

    if (hasActions) {
        return (
            <div className="d-flex justify-content-end align-items-center text-white mb-3 mb-md-2 pt-2">
                <RenderIf isTrue={hasView}>
                    <a href="#/" onClick={handleOnView}>
                        <ViewIcon color="white" size="xs-2" />
                    </a>
                </RenderIf>

                <RenderIf isTrue={hasEdit}>
                    <a href="#/" onClick={handleOnEdit} className="ml-3">
                        <EditIcon color="white" size="xs-2" />
                    </a>
                </RenderIf>

                <RenderIf isTrue={hasDelete}>
                    <a href="#/" onClick={handleOnDelete} className="ml-3">
                        <DeleteIcon color="white" size="xs-2" />
                    </a>
                </RenderIf>
            </div>
        );
    }

    return null;
};

BookCardEvents.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    portraitUrl: PropTypes.string,
    onViewClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

BookCardEvents.defaultProps = {
    title: '',
    description: '',
    portraitUrl: '',
    onViewClick: undefined,
    onEditClick: undefined,
    onDeleteClick: undefined,
};

export default BookCardEvents;
