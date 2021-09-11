import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LiveClassesForm from './form';
import { Dropdown, PageContainer, PageHeading, SimpleModal, ConfirmationModal } from '../../../../components';
import LiveClassesList from './classes-list';
import { VideoAccessItem } from './header';
import { deleteLiveClass } from '../../../../store/actions/live-classes';

const LiveClassesFacilitator = () => {
    const [isFormOpen, setIsFormOpen] = useState();
    const [editableItem, setEditableItem] = useState();

    const [deletableItem, setDeletableItem] = useState();
    const [requestDeleteConfirmation, setRequestDeleteConfirmation] = useState();
    const [deleteSuccessConfirmation, setDeleteSuccessConfirmation] = useState();

    const dispatch = useDispatch();

    const handleOnEditClick = (e, recordedClass) => {
        e.preventDefault();
        setEditableItem(recordedClass);
        setIsFormOpen(true);
    };

    const handleOnDeleteClick = (e, recordedClass) => {
        e.preventDefault();
        setDeletableItem(recordedClass);
        setRequestDeleteConfirmation(true);
    };

    const onDeleteConfirmationAccept = () => {
        if (deletableItem && deletableItem.id) {
            setRequestDeleteConfirmation(false);
            dispatch(deleteLiveClass(deletableItem.id)).then(() => {
                setDeleteSuccessConfirmation(true);
            });
        }
    };

    const onDeleteConfirmationCancel = () => {
        setDeletableItem();
        setRequestDeleteConfirmation(false);
    };

    return (
        <div className="flex-grow-1">
            <PageHeading label="Clases Presenciales">
                <VideoAccessItem />
            </PageHeading>

            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar clase" icon="add" className="mb-5" isOpenByDefault={false}>
                    <LiveClassesForm />
                </Dropdown>
                <LiveClassesList onDelete={handleOnDeleteClick} onEdit={handleOnEditClick} />
            </PageContainer>

            {/* edit form */}
            <SimpleModal showIf={isFormOpen} onHide={() => setIsFormOpen(false)} variant="red" className="p-2">
                <LiveClassesForm editableItem={editableItem} submitLabel="Guardar" />
            </SimpleModal>

            {/* confirmation modal: delete request */}
            <ConfirmationModal
                icon="danger"
                title="¿Eliminar clase grabada?"
                show={requestDeleteConfirmation}
                onCancel={onDeleteConfirmationCancel}
                onConfirm={onDeleteConfirmationAccept}
            />

            {/* confirmation modal: delete success */}
            <ConfirmationModal
                icon="success"
                title="Registro eliminada correctamente"
                show={deleteSuccessConfirmation}
                cancelLabel=""
                onHide={() => setDeleteSuccessConfirmation()}
                onConfirm={() => setDeleteSuccessConfirmation()}
            />
        </div>
    );
};

export default LiveClassesFacilitator;
