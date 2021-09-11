import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import validator from 'validator';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { showSuccessNotification, showFailedNotification } from '../../../../../store/actions/notifications';
import {
    addRecordedClass,
    updateRecordedClass,
    validateOnSaveRecordedClass,
} from '../../../../../store/actions/recorded-classes';
import { Input, Button } from '../../../../../components';

const AddNewClassForm = ({ groupId, editableItem, submitLabel, isCreating, isEditing }) => {
    const [title, setTitle] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [isProcessingForm, setIsProcessingForm] = useState(false);
    const { courseId } = useParams();
    const dispatch = useDispatch();

    const clearForm = () => {
        setTitle('');
        setVideoURL('');
    };

    // Validations

    const formIsValid = () => {
        if (validator.isEmpty(title, { ignore_whitespace: true })) {
            return false;
        }
        if (validator.isEmpty(videoURL, { ignore_whitespace: true })) {
            return false;
        }
        return true;
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const item = {
            groupId,
            courseId,
            title: title.trim(),
            videoURL: videoURL.trim(),
        };

        const validation = await dispatch(validateOnSaveRecordedClass({ ...item, id: (editableItem && editableItem.id) || '' }));

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addRecordedClass(item))
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
                setIsProcessingForm(true);
                dispatch(updateRecordedClass(item, editableItem.id))
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

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setTitle(editableItem.title);
            setVideoURL(editableItem.videoURL);
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Row>
                    {/* title */}
                    <Col className="col-12 col-lg-9 p-0">
                        <Row className="d-flex align-items-center m-0">
                            <Col className="col-12 col-lg-6 px-2">
                                <Input label="Título" value={title} onChange={e => setTitle(e.target.value)} required />
                            </Col>

                            {/* fileselector (video) */}
                            <Col className="col-12 col-lg-6 px-2">
                                <Input
                                    label="Dirección del Video"
                                    value={videoURL}
                                    placeholder="https://..."
                                    onChange={e => setVideoURL(e.target.value)}
                                    required
                                />
                            </Col>
                        </Row>
                    </Col>

                    {/* buttons subir */}
                    <Col className="col-12 col-lg-3 d-flex align-items-center px-2">
                        <Button
                            fullWidth
                            label={submitLabel}
                            disabled={!formIsValid() || isProcessingForm}
                            type="submit"
                            size="xs"
                            variant="success"
                        />
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

AddNewClassForm.propTypes = {
    groupId: PropTypes.any,
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
};

AddNewClassForm.defaultProps = {
    groupId: undefined,
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
};

const mapStateToProps = (state, { editableItem }) => ({
    groupId: state.auth.group.id,
    isCreating: !editableItem,
    isEditing: !!editableItem,
});

const enhance = compose(connect(mapStateToProps, null));

export default enhance(AddNewClassForm);
