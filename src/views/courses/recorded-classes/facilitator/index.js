import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SimpleModal, ConfirmationModal, PageContainer, PageHeading, Dropdown } from '../../../../components';
import { deleteRecordedClass } from '../../../../store/actions/recorded-classes';
import ClassesList from './classes-list';
import AddNewClassForm from './form';

const CourseRecordedClassesPageFacilitator = () => {
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
            dispatch(deleteRecordedClass(deletableItem.id)).then(() => {
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
            <PageHeading label="Clases grabadas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar clases grabadas" isOpenByDefault={false} icon="add" className="mb-4">
                    <AddNewClassForm />
                </Dropdown>
                <ClassesList onDelete={handleOnDeleteClick} onEdit={handleOnEditClick} />
            </PageContainer>

            {/* edit form */}
            <SimpleModal showIf={isFormOpen} onHide={() => setIsFormOpen(false)} variant="red" className="p-2">
                <AddNewClassForm editableItem={editableItem} submitLabel="Guardar" />
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

export default CourseRecordedClassesPageFacilitator;
