import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ConfirmationModal, Dropdown, ListItem, RenderIf } from '../../../components';
import { EditIcon, DeleteIcon } from '../../../components/icons';
import { dateHasPassed } from './helpers';
import { isRole } from '../../../helpers';
import theme from '../../../theme';

const ForumItem = ({ courseId, forum, auth, onEditClick, onDeleteClick }) => {
    const [requestDeleteConfirmation, setRequestDeleteConfirmation] = useState();

    const isEnabled = dateHasPassed(forum.initialDate);
    const listItemClass = !isEnabled ? 'p-3 p-md-4' : '';

    const handleOnEditClick = e => {
        e.preventDefault();
        onEditClick(forum);
    };

    const handleOnDeleteClick = e => {
        e.preventDefault();
        setRequestDeleteConfirmation(true);
    };

    const onDeleteConfirmationAccept = () => {
        setRequestDeleteConfirmation(false);
        onDeleteClick(forum);
    };

    const renderItem = () => {
        return (
            <ListItem>
                <div className={listItemClass}>
                    <div className="d-flex align-items-center justify-content-between">
                        {/* enabled: description */}
                        <RenderIf isTrue={isEnabled}>
                            <div>
                                <div className="app-font-16 font-weight-bold mb-3">Descripción</div>
                                <div>{forum.description}</div>
                            </div>
                        </RenderIf>

                        {/* disabled: title */}
                        <RenderIf isTrue={!isEnabled}>
                            <h2 className="app-font-19">{forum.title}</h2>
                        </RenderIf>

                        <div className="d-flex align-items-start justify-content-between">
                            {/* enabled: go to forum chat */}
                            <RenderIf isTrue={isEnabled}>
                                <Link to={`/curso/${courseId}/chat/foro/${forum.id}`}>
                                    <Button label="Unirse" size="xs" />
                                </Link>
                            </RenderIf>

                            {/* disabled: not available */}
                            <RenderIf isTrue={!isEnabled}>
                                <div className="font-weight-bold">No disponible</div>
                            </RenderIf>

                            {/* faciliatos: edit and delete */}
                            <RenderIf isTrue={isRole('facilitator', auth && auth.role)}>
                                <div className="pl-5 d-flex align-items-center">
                                    <a href="#/" className="d-block" onClick={handleOnEditClick}>
                                        <EditIcon size="xs" color={theme.bootstrap.appBlue4} />
                                    </a>

                                    <a href="#/" className="d-block ml-3" onClick={handleOnDeleteClick}>
                                        <DeleteIcon size="xs" color={theme.bootstrap.appBlue4} />
                                    </a>
                                </div>
                            </RenderIf>
                        </div>
                    </div>
                </div>

                <ConfirmationModal
                    title={`¿Eliminar foro '${forum.title}'?`}
                    show={requestDeleteConfirmation}
                    onHide={() => setRequestDeleteConfirmation(false)}
                    onConfirm={onDeleteConfirmationAccept}
                />
            </ListItem>
        );
    };

    if (forum && isEnabled) {
        return (
            <Dropdown
                isOpenByDefault={false}
                className="mb-3"
                childrenClassName="p-4"
                title={forum.title}
                headerChildren={() => <div className="app-font-16">Disponible</div>}
            >
                {renderItem()}
            </Dropdown>
        );
    }

    if (forum && !isEnabled) {
        return <div className="mb-3">{renderItem()}</div>;
    }

    return undefined;
};

ForumItem.propTypes = {
    courseId: PropTypes.string,
    forum: PropTypes.any,
    auth: PropTypes.any,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

ForumItem.defaultProps = {
    courseId: undefined,
    forum: undefined,
    auth: undefined,
    onEditClick: () => {},
    onDeleteClick: () => {},
};

const mapStateToProps = state => ({
    auth: state.auth,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(ForumItem);
