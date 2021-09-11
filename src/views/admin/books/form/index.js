import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form, Row } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { hasValidMimeType } from '../../../../helpers';
import { Button, Checkbox, FileInput, Input, RenderIf, Textarea } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import { addBook, updateBook, validateOnSaveBook } from '../../../../store/actions/books';
import { validateBook } from './helpers';
import BooksBatchUploader from './batch';

const BookForm = ({ editableItem, category, submitLabel, isCreating, isEditing }) => {
    const [categoryId, setCategoryId] = useState('');
    const [name, setName] = useState('');
    const [idSAP, setIdSAP] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState();
    const [document, setDocument] = useState();
    const [isFacilitatorExclusive, setIsFacilitatorExclusive] = useState(false);
    const [isEnabledRegionalValidity, setIsEnabledRegionalValidity] = useState(false);

    const [isProcessingForm, setIsProcessingForm] = useState(false);
    const [photoErrorMsg, setPhotoErrorMsg] = useState();
    const [documentErrorMsg, setDocumentErrorMsg] = useState();

    const dispatch = useDispatch();

    const clearForm = () => {
        setCategoryId('');
        setName('');
        setIdSAP('');
        setDescription('');
        setPhoto();
        setDocument();
        setIsFacilitatorExclusive(false);
        setIsEnabledRegionalValidity(false);
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const item = {
            categoryId,
            name: name.trim(),
            idSAP: idSAP.trim(),
            description,
            isFacilitatorExclusive: isFacilitatorExclusive || false,
            isEnabledRegionalValidity: isEnabledRegionalValidity || false,
        };

        const uploadList = [];

        const validation = await dispatch(validateOnSaveBook({ ...item, id: (editableItem && editableItem.id) || '' }));

        if (validation.success) {
            if (isCreating && category) {
                uploadList.push({ file: photo, dbField: 'photo', baseFolder: 'books', fileFolder: 'photos' });
                uploadList.push({ file: document, dbField: 'document', baseFolder: 'books', fileFolder: 'documents' });

                setIsProcessingForm(true);
                dispatch(addBook(item, uploadList))
                    .then(() => {
                        clearForm();
                        dispatch(showSuccessNotification());
                    })
                    .catch(err => {
                        dispatch(showFailedNotification(err));
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }

            if (isEditing) {
                if (photo) {
                    uploadList.push({ file: photo, dbField: 'photo', baseFolder: 'books', fileFolder: 'photos' });
                }

                if (document) {
                    uploadList.push({ file: document, dbField: 'document', baseFolder: 'books', fileFolder: 'documents' });
                }

                setIsProcessingForm(true);
                dispatch(updateBook(item, editableItem.id, uploadList))
                    .then(() => {
                        dispatch(showSuccessNotification());
                    })
                    .catch(err => {
                        dispatch(showFailedNotification(err));
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }
        } else {
            dispatch(showFailedNotification(validation.errorMsg));
        }
    };

    const handleOnPhotoChange = files => {
        const file = files && files.length ? files[0] : undefined;

        if (!file && isCreating) {
            setPhotoErrorMsg('La portada es requerida.');
        }

        setPhoto(file);
    };

    const handleOnDocumentChange = files => {
        const file = files && files.length ? files[0] : undefined;

        if (!file && isCreating) {
            setDocumentErrorMsg('El documento es requerido.');
        }

        setDocument(file);
    };

    // form validation
    const formIsValid = () => {
        return validateBook(
            {
                name,
                description,
                photo,
                document,
            },
            { isEditing },
        );
    };

    useEffect(() => {
        if (category) {
            setCategoryId(category.id);
        }

        // eslint-disable-next-line
    }, []);

    // detect photo and set the proper validation message
    useEffect(() => {
        if (photo) {
            if (!hasValidMimeType(photo, ['image/jpeg', 'image/png'])) {
                setPhotoErrorMsg('Archivos permitidos: jpg, png');
            } else {
                setPhotoErrorMsg();
            }
        }

        // eslint-disable-next-line
    }, [photo]);

    // detect document and set the proper validation message
    useEffect(() => {
        if (document) {
            if (!hasValidMimeType(document, ['application/pdf'])) {
                setDocumentErrorMsg('Archivos permitidos: pdf');
            } else {
                setDocumentErrorMsg();
            }
        }

        // eslint-disable-next-line
    }, [document]);

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCategoryId(editableItem.categoryId);
            setName(editableItem.name);
            setIdSAP(editableItem.idSAP);
            setDescription(editableItem.description);
            setIsFacilitatorExclusive(editableItem.isFacilitatorExclusive);
            setIsEnabledRegionalValidity(editableItem.isEnabledRegionalValidity);
            setPhoto();
            setDocument();
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}
                <Row className="mb-4">
                    <Col className="flex-lg-column">
                        {/* name */}
                        <Input label="Título" value={name} onChange={e => setName(e.target.value)} required />

                        {/* ID SAP */}
                        <Input label="ID (SAP):" value={idSAP} onChange={e => setIdSAP(e.target.value)} />

                        {/* description */}
                        <Textarea
                            label="Descripción"
                            rows={9}
                            maxLength={400}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </Col>

                    {/* files */}
                    <Col className="pt-4 pt-lg-0">
                        <div className="mb-4">
                            <span className="upload-file-text text-app-gray-2 font-weight-bold">Sube tu archivo</span>
                            <br />
                            <span className="text-app-gray-2 drag-file-text">O arrastralo aquí</span>
                        </div>

                        {/* photo */}
                        <FileInput
                            label="Foto/Portada"
                            placeholder="Seleccionar archivo"
                            onChange={handleOnPhotoChange}
                            required={!isEditing}
                            error={photoErrorMsg}
                        />

                        {/* Documento */}
                        <FileInput
                            className="mb-5"
                            label="Documento"
                            placeholder="Seleccionar archivo"
                            onChange={handleOnDocumentChange}
                            required={!isEditing}
                            error={documentErrorMsg}
                        />

                        {/* facilitatr exclusivity */}
                        <Checkbox
                            className="mb-0"
                            checked={isFacilitatorExclusive}
                            label="Libros exclusivos para facilitadores"
                            onClick={checked => setIsFacilitatorExclusive(checked)}
                        />

                        {/* regional validity */}
                        <Checkbox
                            className="mb-3"
                            checked={isEnabledRegionalValidity}
                            label="Validación de regionalidad legal válida"
                            onClick={checked => setIsEnabledRegionalValidity(checked)}
                        />

                        {/* submit */}
                        <Button
                            label={submitLabel}
                            type="submit"
                            className="btn-success app-font-21 font-weight-800 w-100"
                            disabled={!formIsValid() || isProcessingForm}
                        />
                    </Col>
                </Row>

                <RenderIf isTrue={!isEditing}>
                    <Row className="mb-4">
                        <Col>
                            <BooksBatchUploader category={category} />
                        </Col>
                    </Row>
                </RenderIf>
            </Form>
        </>
    );
};

BookForm.propTypes = {
    editableItem: PropTypes.any,
    category: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
};

BookForm.defaultProps = {
    editableItem: undefined,
    category: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
};

const mapStateToProps = (state, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
});

const enhance = compose(connect(mapStateToProps, null));

export default enhance(BookForm);
