import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Datepicker, Input, RenderIf, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import {
    addCourseAssignation,
    updateCourseAssignation,
    validateOnSaveCourseAssignation,
} from '../../../../store/actions/courses-assignations';
import { useCorporateEntitiesOptions } from '../../corporate-entities/hooks';
import { useCoursesOptions } from '../../courses/hooks';
import { validateCourseAssignation } from './helpers';
import CoursesBatchUploader from './batch';

const CoursesAssignationsForm = ({ editableItem, submitLabel, isCreating, isEditing, corporateEntities, courses }) => {
    const [corporateEntityId, setCorporateEntityId] = useState('');
    const [courseId, setCourseId] = useState('');
    const [licenses, setLicences] = useState();
    const [dueDate, setDueDate] = useState(new Date());

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const corporateEntitiesOptions = useCorporateEntitiesOptions(corporateEntities);
    const coursesOptions = useCoursesOptions(courses);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCorporateEntityId('');
        setCourseId('');
        setLicences('');
        setDueDate();
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCorporateEntity = corporateEntitiesOptions.filter(item => item.value === corporateEntityId);
        const corporateEntityName = (selectedCorporateEntity[0] && selectedCorporateEntity[0].label) || '';

        const selectedCourse = coursesOptions.filter(item => item.value === courseId);
        const courseName = (selectedCourse[0] && selectedCourse[0].label) || '';

        const item = {
            corporateEntityId,
            corporateEntityName,
            courseId,
            courseName,
            licenses: parseInt(licenses, 10),
            dueDate,
        };

        const validation = await dispatch(
            validateOnSaveCourseAssignation({ ...item, id: (editableItem && editableItem.id) || '' }),
        );

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addCourseAssignation(item))
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
                dispatch(updateCourseAssignation(item, editableItem.id))
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

    // form validation
    const formIsValid = () => {
        return validateCourseAssignation({
            corporateEntityId,
            courseId,
            licenses,
            dueDate,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCorporateEntityId(editableItem.corporateEntityId);
            setCourseId(editableItem.courseId);
            setLicences(String(editableItem.licenses));

            if (editableItem.dueDate && editableItem.dueDate.seconds) {
                setDueDate(editableItem.dueDate.toDate());
            }
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}

                <div className="d-flex flex-column flex-lg-row mb-3">
                    {/* corporate entity */}
                    <Select
                        className="col-lg-3 pl-lg-0"
                        label="Entidad corporativa"
                        value={corporateEntityId}
                        options={corporateEntitiesOptions}
                        onChange={e => setCorporateEntityId(e.target.value)}
                    />

                    {/* corporate entity */}
                    <Select
                        className="col-lg-3 pl-lg-0"
                        label="Curso"
                        value={courseId}
                        options={coursesOptions}
                        onChange={e => setCourseId(e.target.value)}
                    />

                    {/* licenses */}
                    <Input
                        className="col-lg-3 pl-lg-0"
                        label="Licencias"
                        value={licenses}
                        onChange={e => setLicences(e.target.value)}
                    />

                    {/* due date */}
                    <Datepicker
                        className="col-lg-3 pr-lg-0 pl-lg-0"
                        label="Fecha de vencimiento"
                        value={dueDate}
                        onChange={date => setDueDate(date)}
                    />
                </div>

                {/* course books selectable */}
                {/* <CoursesSelectable
                    className="pl-3 pr-3 pl-lg-0 pr-lg-0"
                    coursesIds={coursesIds}
                    onChange={values => setCoursesIds(values)}
                /> */}

                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <div className="col-lg-3 pl-lg-0 mb-3 order-2 order-lg-1">
                        <Button
                            fullWidth
                            label={submitLabel}
                            type="submit"
                            variant="success"
                            disabled={!formIsValid() || isProcessingForm}
                        />
                    </div>

                    {/* carga por lote */}
                    <RenderIf isTrue={!isEditing}>
                        <div className="col-lg-3 pr-lg-0 order-1 order-lg-2">
                            <CoursesBatchUploader />
                        </div>
                    </RenderIf>
                </div>
            </Form>
        </>
    );
};

CoursesAssignationsForm.propTypes = {
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
    corporateEntities: PropTypes.array,
    courses: PropTypes.array,
};

CoursesAssignationsForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    corporateEntities: [],
    courses: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    corporateEntities: firestore.ordered && firestore.ordered['selectable-corporate-entities'],
    courses: firestore.ordered && firestore.ordered['selectable-courses'],
});

const firestoreQuery = () => {
    const fsQuery = [];

    fsQuery.push({
        collection: 'corporateEntities',
        storeAs: 'selectable-corporate-entities',
    });

    fsQuery.push({
        collection: 'courses',
        storeAs: 'selectable-courses',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CoursesAssignationsForm);
