import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { Container } from 'react-bootstrap';
import { BookCard, ConfirmationModal, PageContainer, PageHeading, SimpleModal } from '../../../../components';
import { deleteBook } from '../../../../store/actions/books';
import BookForm from '../form';

const AdminBookPreviewPage = ({ book }) => {
    const bookData = (book && book[0]) || {};

    const { id, name, description, photo } = bookData;
    const portraitUrl = (photo && photo.storageUrl) || '';

    const [isEditFormEnabled, setIsEditFormEnabled] = useState(false);
    const [editableItem, setEditableItem] = useState();
    const [requestDeleteConfirmation, setRequestDeleteConfirmation] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnViewClick = () => {
        if (id) {
            const viewPdfUrl = `/admin/libro/${id}/visualizar/pdf`;
            history.push(viewPdfUrl);
        }
    };

    const handleOnEditClick = () => {
        setEditableItem(bookData);
        setIsEditFormEnabled(true);
    };

    const handleOnDeleteConfirm = () => {
        if (id) {
            dispatch(deleteBook(id, bookData)).then(() => {
                if (history.length) {
                    history.goBack();
                } else {
                    history.push('/');
                }
            });
        }
    };

    const renderConfirmationModal = () => {
        if (requestDeleteConfirmation) {
            return (
                <ConfirmationModal
                    show
                    icon="danger"
                    title="¿Eliminar libro?"
                    subtitle={bookData && bookData.name}
                    onCancel={() => setRequestDeleteConfirmation(false)}
                    onConfirm={handleOnDeleteConfirm}
                />
            );
        }

        return undefined;
    };

    const renderEditForm = () => {
        if (isEditFormEnabled && editableItem) {
            return (
                <SimpleModal title="Editar" showIf={isEditFormEnabled} onHide={() => setIsEditFormEnabled(false)}>
                    <div>
                        <BookForm editableItem={editableItem} submitLabel="Guardar" />
                    </div>
                </SimpleModal>
            );
        }

        return undefined;
    };

    return (
        <div className="flex-grow-1 h-100">
            <PageHeading label="Vista previa" />
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                <Container className="mb-5 d-flex justify-content-center">
                    <BookCard
                        title={name}
                        description={description}
                        portraitUrl={portraitUrl}
                        hasView
                        hasEdit
                        hasDelete
                        onViewClick={handleOnViewClick}
                        onEditClick={handleOnEditClick}
                        onDeleteClick={() => setRequestDeleteConfirmation(true)}
                    />
                </Container>
            </PageContainer>

            {/* edit form modal */}
            {renderEditForm()}

            {/* confirmation modal: delete request */}
            {renderConfirmationModal()}
        </div>
    );
};

AdminBookPreviewPage.propTypes = {
    book: PropTypes.array,
};

AdminBookPreviewPage.defaultProps = {
    book: {},
};

const mapStateToProps = ({ firestore }, { match }) => ({
    book: firestore.ordered && firestore.ordered[`book-preview-${match.params.bookId}`],
});

const firestoreQuery = (state, { match }) => {
    return [{ collection: 'books', doc: match.params.bookId, storeAs: `book-preview-${match.params.bookId}` }];
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(AdminBookPreviewPage);
