import React, { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import validator from 'validator';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { showSuccessNotification, showFailedNotification } from '../../../../../store/actions/notifications';
import { addLiveClass, updateLiveClass, validateOnSaveLiveClass } from '../../../../../store/actions/live-classes';
import { Button, Datetimepicker, Input, Textarea } from '../../../../../components';

const LiveClassesForm = ({ groupId, editableItem, submitLabel, isCreating, isEditing }) => {
    const [title, setTitle] = useState('');
    const [meetingURL, setMeetingURL] = useState('');
    const currentDateTime = DateTime.local();
    const [startDateTime, setStartDateTime] = useState(currentDateTime.toJSDate());
    const [endDateTime, setEndDateTime] = useState(currentDateTime.plus({ hours: 1 }).toJSDate());
    const [description, setDescription] = useState('');
    const [isProcessingForm, setIsProcessingForm] = useState(false);
    const { courseId } = useParams();
    const dispatch = useDispatch();

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setTitle(editableItem.title);
            setMeetingURL(editableItem.meetingURL);
            setStartDateTime(new Date(editableItem.startDateTime.seconds * 1000));
            setEndDateTime(new Date(editableItem.endDateTime.seconds * 1000));
            setDescription(editableItem.description);
        }

        // eslint-disable-next-line
    }, [editableItem]);

    useEffect(() => {
        if (startDateTime >= endDateTime) {
            setEndDateTime(
                DateTime.fromJSDate(startDateTime)
                    .plus({ hours: 1 })
                    .toJSDate(),
            );
        }
        // eslint-disable-next-line
    }, [startDateTime]);

    const clearForm = () => {
        setTitle('');
        setMeetingURL('');
        setStartDateTime(currentDateTime.toJSDate());
        setEndDateTime(currentDateTime.plus({ hours: 1 }).toJSDate());
        setDescription('');
    };

    // Validations

    const formIsValid = () => {
        if (validator.isEmpty(title, { ignore_whitespace: true })) {
            return false;
        }
        if (validator.isEmpty(meetingURL, { ignore_whitespace: true })) {
            return false;
        }
        if (startDateTime >= endDateTime) {
            return false;
        }
        if (validator.isEmpty(description, { ignore_whitespace: true })) {
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
            meetingURL: meetingURL.trim(),
            startDateTime: DateTime.fromJSDate(startDateTime)
                .toUTC()
                .toJSDate(),
            endDateTime: DateTime.fromJSDate(endDateTime)
                .toUTC()
                .toJSDate(),
            description: description.trim(),
        };

        const validation = await dispatch(validateOnSaveLiveClass({ ...item, id: (editableItem && editableItem.id) || '' }));

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addLiveClass(item))
                    .then(() => {
                        clearForm();
                        dispatch(showSuccessNotification());
                    })
                    .catch(() => {
                        dispatch(showFailedNotification());
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }

            if (isEditing) {
                setIsProcessingForm(true);
                dispatch(updateLiveClass(item, editableItem.id))
                    .then(() => {
                        dispatch(showSuccessNotification());
                    })
                    .catch(() => {
                        dispatch(showFailedNotification());
                    })
                    .finally(() => {
                        setIsProcessingForm(false);
                    });
            }
        } else {
            dispatch(showFailedNotification(validation.errorMsg));
        }
    };

    return (
        <Form noValidate onSubmit={handleOnSubmit}>
            <Row>
                {/* title and link */}
                <Col className="col-12 col-lg-6">
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <Input label="Título" required value={title} onChange={e => setTitle(e.target.value)} />
                        </Col>

                        <Col className="col-12 col-lg-6">
                            <Input
                                label="Link de reunión"
                                required
                                value={meetingURL}
                                onChange={e => setMeetingURL(e.target.value)}
                            />
                        </Col>
                    </Row>
                    {/* datepicker */}
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <Datetimepicker
                                label="Fecha de inicio"
                                className="mb-4"
                                required
                                value={startDateTime}
                                onChange={value => setStartDateTime(value)}
                            />
                        </Col>
                        <Col className="col-12 col-lg-6">
                            <Datetimepicker
                                label="Fecha de fin"
                                className="mb-4"
                                required
                                value={endDateTime}
                                onChange={value => setEndDateTime(value)}
                            />
                        </Col>
                    </Row>
                </Col>
                {/* text area */}
                <Col className="col-12 col-lg-6">
                    <Textarea
                        label="Descripción:"
                        rows={5}
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Col>
            </Row>
            {/* buttons */}
            <Row className="justify-content-end">
                <Col className="col-12 col-lg-3 ">
                    <Button
                        fullWidth
                        label={submitLabel}
                        type="submit"
                        variant="success"
                        size="xs"
                        className="mb-3 mb-lg-0"
                        disabled={!formIsValid() || isProcessingForm}
                    />
                </Col>
            </Row>
        </Form>
    );
};

LiveClassesForm.propTypes = {
    groupId: PropTypes.any,
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
};

LiveClassesForm.defaultProps = {
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

export default enhance(LiveClassesForm);
