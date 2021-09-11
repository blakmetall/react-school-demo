import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Input, RenderIf, ResponsiveControl, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import { addCourse, updateCourse, validateOnSaveCourse } from '../../../../store/actions/courses';
import { useCategoriesOptions } from './hooks';
import { validateCourse } from './helpers';
import CoursesBatchUploader from './batch';
import CourseBooksSelectable from './courseBooksSelectable';

const CoursesForm = ({ editableItem, submitLabel, isCreating, isEditing, categories }) => {
    const [courseName, setCourseName] = useState('');
    const [minQualification, setMinQualification] = useState('60');
    const [categoryId, setCategoryId] = useState('');
    const [booksIds, setBooksIds] = useState([]);

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const categoriesOptions = useCategoriesOptions(categories);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCourseName('');
        setMinQualification('');
        setCategoryId('');
        setBooksIds([]);
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCategory = categoriesOptions.filter(item => item.value === categoryId);
        const categoryName = (selectedCategory[0] && selectedCategory[0].label) || '';

        const item = {
            name: courseName.trim(),
            minQualification: parseInt(minQualification, 10),
            categoryId,
            categoryName,
            booksIds,
        };

        const validation = await dispatch(validateOnSaveCourse({ ...item, id: (editableItem && editableItem.id) || '' }));

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addCourse(item))
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
                dispatch(updateCourse(item, editableItem.id))
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
        return validateCourse({
            name: courseName,
            categoryId,
            booksIds,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCourseName(editableItem.name);
            setMinQualification(String(editableItem.minQualification));
            setCategoryId(editableItem.categoryId);
            setBooksIds(editableItem.booksIds);
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}
                <div className="d-flex flex-column flex-md-row no-gutters">
                    <Col className="col-12 col-lg-9 mb-4">
                        <div className="d-flex flex-column flex-md-row mb-3">
                            {/* course */}
                            <Input
                                className="col-lg-6 pl-0 pr-0 pr-md-4 pr-lg-3"
                                label="Nombre del curso"
                                value={courseName}
                                onChange={e => setCourseName(e.target.value)}
                                required
                            />

                            {/* min qualification */}
                            <Input
                                className="col-lg-6 pl-0 pl-md-3 pr-0 pr-lg-4"
                                label="Calificación mínima (0 — 100)"
                                value={minQualification}
                                onChange={e => setMinQualification(e.target.value)}
                                required
                            />
                        </div>

                        <div className="d-flex flex-column flex-md-row mb-3">
                            {/* category */}
                            <Select
                                className="col-lg-12 pl-0 pr-0 pr-lg-4"
                                label="Categoría"
                                value={categoryId}
                                options={categoriesOptions}
                                onChange={e => setCategoryId(e.target.value)}
                            />
                        </div>

                        {/* course books selectable */}
                        <CourseBooksSelectable
                            className="pr-0 pr-lg-4"
                            booksIds={booksIds}
                            onChange={values => setBooksIds(values)}
                        />

                        <ResponsiveControl visibleOn="md" className="pt-3">
                            {/* carga por lote */}
                            <RenderIf isTrue={!isEditing}>
                                <CoursesBatchUploader />
                            </RenderIf>

                            {/* submit */}
                            <div>
                                <Button
                                    fullWidth
                                    label={submitLabel}
                                    type="submit"
                                    variant="success"
                                    disabled={!formIsValid() || isProcessingForm}
                                />
                            </div>
                        </ResponsiveControl>
                    </Col>

                    <ResponsiveControl hiddenOn="md" className="col-12 col-lg-3">
                        <div>
                            {/* carga por lote */}
                            <RenderIf isTrue={!isEditing}>
                                <CoursesBatchUploader />
                            </RenderIf>

                            {/* submit */}
                            <div style={isEditing ? { position: 'relative', top: '28px' } : {}}>
                                <Button
                                    fullWidth
                                    label={submitLabel}
                                    type="submit"
                                    variant="success"
                                    disabled={!formIsValid() || isProcessingForm}
                                />
                            </div>
                        </div>
                    </ResponsiveControl>
                </div>
            </Form>
        </>
    );
};

CoursesForm.propTypes = {
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
    categories: PropTypes.array,
};

CoursesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    categories: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    categories: firestore.ordered && firestore.ordered['selectable-categories'],
});

const firestoreQuery = () => {
    const fsQuery = [];
    fsQuery.push({
        collection: 'categories',
        storeAs: 'selectable-categories',
    });
    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CoursesForm);
