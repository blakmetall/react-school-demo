import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';

import AdminTableBody from './body';
import AdminTableHead from './head';
import { ConfirmationModal, SimpleModal } from '..';
import { StyledContainer, StyledTable } from './styled';

function AdminTable({ columnsSettings, requestsSettings, withColoredCircles, isMenuOpen }) {
    const [EditForm, setEditForm] = useState();
    const [editableItem, setEditableItem] = useState();
    const [isEditFormEnabled, setIsEditFormEnable] = useState();

    const [deletableItem, setDeletableItem] = useState();
    const [deletableItemLabel, setDeletableItemLabel] = useState();
    const [deletableItemSettings, setDeletableItemSettings] = useState();

    const [requestDeleteConfirmation, setRequestDeleteConfirmation] = useState();
    const [deleteSuccessConfirmation, setDeleteSuccessConfirmation] = useState();

    const shouldRenderTable = requestsSettings;

    const dispatch = useDispatch();

    const handleOnClickViewRow = (item, rowSettings) => {
        const { onViewRowClick } = rowSettings;

        if (onViewRowClick instanceof Function) {
            onViewRowClick(item.originalData);
        }
    };

    const handleOnClickEditRow = (item, rowSettings) => {
        if (rowSettings.formComponent) {
            setIsEditFormEnable(true);
            setEditableItem(item.originalData);
            setEditForm(rowSettings.formComponent);
        }
    };

    const handleOnClickDeleteRow = (item, rowSettings) => {
        if (item && item.id && rowSettings && rowSettings.deleteAction) {
            const {
                originalData: { name, title },
            } = item;

            if (name) {
                setDeletableItemLabel(name);
            } else if (title) {
                setDeletableItemLabel(title);
            }

            setDeletableItem(item);
            setDeletableItemSettings(rowSettings);
            setRequestDeleteConfirmation(true);
        }
    };

    const onDeleteConfirmationAccept = () => {
        if (deletableItem && deletableItem.id && deletableItemSettings) {
            const { deleteAction } = deletableItemSettings;
            if (deleteAction && typeof deleteAction === 'function') {
                setRequestDeleteConfirmation(false);
                dispatch(deleteAction(deletableItem.id, deletableItem)).then(() => {
                    setDeleteSuccessConfirmation(true);
                });
            }
        }
    };

    const onDeleteConfirmationCancel = () => {
        setDeletableItem();
        setDeletableItemLabel();
        setDeletableItemSettings();
        setRequestDeleteConfirmation(false);
    };

    const renderEditForm = () => {
        if (isEditFormEnabled && editableItem && EditForm) {
            return (
                <SimpleModal title="Editar" showIf={isEditFormEnabled} onHide={() => setIsEditFormEnable(false)}>
                    <div>
                        <EditForm editableItem={editableItem} submitLabel="Guardar" />
                    </div>
                </SimpleModal>
            );
        }

        return undefined;
    };

    if (shouldRenderTable) {
        return (
            <StyledContainer isMenuOpen={isMenuOpen}>
                <div className="table-responsive">
                    <StyledTable className="table table-hover">
                        {/* heading */}
                        <AdminTableHead columnsSettings={columnsSettings} withColoredCircles={withColoredCircles} />

                        {/* body */}
                        <AdminTableBody
                            withColoredCircles={withColoredCircles}
                            onClickViewRow={handleOnClickViewRow}
                            onClickEditRow={handleOnClickEditRow}
                            onClickDeleteRow={handleOnClickDeleteRow}
                            columnsSettings={columnsSettings}
                            requestsSettings={requestsSettings}
                        />
                    </StyledTable>
                </div>

                {/* confirmation modal: delete request */}
                <ConfirmationModal
                    icon="danger"
                    title="¿Eliminar?"
                    subtitle={deletableItemLabel}
                    show={requestDeleteConfirmation}
                    onCancel={onDeleteConfirmationCancel}
                    onConfirm={onDeleteConfirmationAccept}
                />

                {/* confirmation modal: delete success */}
                <ConfirmationModal
                    icon="success"
                    title="Registro eliminado correctamente:"
                    subtitle={deletableItemLabel}
                    show={deleteSuccessConfirmation}
                    cancelLabel=""
                    onHide={() => setDeleteSuccessConfirmation()}
                    onConfirm={() => setDeleteSuccessConfirmation()}
                />

                {/* edit form modal */}
                {renderEditForm()}
            </StyledContainer>
        );
    }

    return <></>;
}

AdminTable.propTypes = {
    columnsSettings: PropTypes.any,
    requestsSettings: PropTypes.any,
    withColoredCircles: PropTypes.bool,
    isMenuOpen: PropTypes.bool,
};

AdminTable.defaultProps = {
    columnsSettings: undefined,
    requestsSettings: undefined,
    withColoredCircles: false,
    isMenuOpen: true,
};

const mapStateToProps = state => ({
    isMenuOpen: state.ui.isMenuOpen,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(AdminTable);
