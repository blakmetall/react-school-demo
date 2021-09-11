import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import { Button, Datetimepicker, Input, Message, Textarea } from '../../../../components';
import { addForum, updateForum } from '../../../../store/actions/forums';
import { StyledFormActionsWrapper } from './styled';

const CourseForumForm = ({ submitLabel, courseId, editableItem, addItem, updateItem, onSaveSuccess, onSaveError }) => {
    const [onSaveMessage, setOnSaveMessage] = useState();
    const [onErrorMessage, setOnErrorMessage] = useState();
    const isCreating = !editableItem;
    const isEditing = !isCreating;

    const [title, setTitle] = useState('');
    const [initialDate, setInitialDate] = useState(new Date());
    const [description, setDescription] = useState('');

    // clear form
    const clearForm = () => {
        setTitle('');
        setInitialDate(new Date());
        setDescription('');
    };

    // submit form
    const handleOnSubmit = e => {
        e.preventDefault();

        if (isCreating) {
            const item = {
                title,
                initialDate,
                description,
                courseId,
            };

            addItem(item)
                .then(() => {
                    clearForm();
                    setOnSaveMessage('Foro agregado.');
                })
                .catch(() => {
                    onSaveError();
                    setOnErrorMessage('Error al agregar.');
                });
        }

        if (isEditing) {
            const item = {
                title,
                initialDate,
                description,
            };

            updateItem(item, editableItem.id)
                .then(() => {
                    onSaveSuccess(item);
                    setOnSaveMessage('Foro actualizado.');
                })
                .catch(() => {
                    onSaveError();
                    setOnErrorMessage('Error al actualizar.');
                });
        }
    };

    // simple validations
    const formIsValid = () => {
        if (validator.isEmpty(title, { ignore_whitespace: true })) {
            return false;
        }

        if (!initialDate) {
            return false;
        }

        if (validator.isEmpty(description, { ignore_whitespace: true })) {
            return false;
        }

        return true;
    };

    // sets editing item values
    useEffect(() => {
        if (editableItem) {
            setTitle(editableItem.title);
            setDescription(editableItem.description);

            if (editableItem.initialDate && editableItem.initialDate.seconds) {
                setInitialDate(editableItem.initialDate.toDate());
            }
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* titulo y fecha */}
                <Row className="mb-3">
                    <Col className="col-12 col-md-6">
                        <Input label="Título" value={title} onChange={e => setTitle(e.target.value)} required />
                    </Col>

                    <Col className="col-12 col-md-6">
                        <Datetimepicker
                            label="Fecha de inicio"
                            value={initialDate}
                            onChange={date => setInitialDate(date)}
                            required
                        />
                    </Col>
                </Row>

                {/* descripción y botones de acción */}
                <Row className="mb-3">
                    <Col className="col-12 col-md-6">
                        <Textarea
                            label="Descripción"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </Col>

                    <Col className="col-12 col-md-6">
                        <StyledFormActionsWrapper>
                            <Button
                                fullWidth
                                label={submitLabel}
                                type="submit"
                                variant="success"
                                disabled={!formIsValid()}
                                className="mb-2"
                            />

                            <div className="text-center">
                                <Message
                                    showIf={!!onSaveMessage}
                                    message={onSaveMessage}
                                    duration={3500}
                                    onComplete={() => setOnSaveMessage()}
                                />
                                <Message
                                    showIf={!!onErrorMessage}
                                    message={onErrorMessage}
                                    duration={3500}
                                    color="red"
                                    onComplete={() => setOnErrorMessage()}
                                />
                            </div>
                        </StyledFormActionsWrapper>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

CourseForumForm.propTypes = {
    submitLabel: PropTypes.string,
    courseId: PropTypes.string,
    editableItem: PropTypes.object,
    addItem: PropTypes.func,
    updateItem: PropTypes.func,
    onSaveSuccess: PropTypes.func,
    onSaveError: PropTypes.func,
};

CourseForumForm.defaultProps = {
    submitLabel: 'Agregar',
    courseId: undefined,
    editableItem: undefined,
    addItem: () => {},
    updateItem: () => {},
    onSaveSuccess: () => {},
    onSaveError: () => {},
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addForum(item)),
    updateItem: (item, docId) => dispatch(updateForum(item, docId)),
});

const enhance = compose(connect(null, mapDispatchToProps));

export default enhance(CourseForumForm);
