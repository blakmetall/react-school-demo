import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, Input, RenderIf, ResponsiveControl, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import { findManagersByIds } from '../../../../store/actions/managers';
import {
    addRegionalEntity,
    getRegionalEntityCoursesLicenses,
    updateRegionalEntity,
    validateOnSaveRegionalEntity,
} from '../../../../store/actions/regional-entities';
import { useCorporateEntitiesOptions } from '../../corporate-entities/hooks';
import { validateRegionalEntity } from './helpers';
import RegionalEntitiesBatchUploader from './batch';
import RegionalEntityManagersSelectable from './managersSelectable';
import CoursesLicenses from './coursesLicenses';

const CoursesForm = ({ editableItem, submitLabel, isCreating, isEditing, corporateEntities }) => {
    const [corporateEntityId, setCorporateEntityId] = useState('');
    const [regionalEntityName, setRegionalEntityName] = useState('');

    const [managers, setManagers] = useState([]);
    const [prevManagers, setPrevManagers] = useState([]);

    const [coursesLicenses, setCoursesLicenses] = useState([]);
    const [prevCoursesLicenses, setPrevCoursesLicenses] = useState([]);

    const [isProcessingForm, setIsProcessingForm] = useState(false);
    const corporateEntitiesOptions = useCorporateEntitiesOptions(corporateEntities);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCorporateEntityId('');
        setRegionalEntityName('');
        setManagers([]);
    };

    // load courses licenses
    const loadCoursesLicenses = () => {
        setPrevCoursesLicenses([]);

        dispatch(
            getRegionalEntityCoursesLicenses({
                corporateEntityId: editableItem.corporateEntityId,
                regionalEntityId: editableItem.id,
            }),
        ).then(coursesLicensesValues => {
            setPrevCoursesLicenses(coursesLicensesValues);
        });
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCorporateEntity = corporateEntitiesOptions.filter(item => item.value === corporateEntityId);
        const corporateEntityName = (selectedCorporateEntity[0] && selectedCorporateEntity[0].label) || '';

        const item = {
            corporateEntityId,
            corporateEntityName,
            name: regionalEntityName,
        };

        const validation = await dispatch(
            validateOnSaveRegionalEntity({
                ...item,
                coursesLicenses,
                id: (editableItem && editableItem.id) || '',
            }),
        );

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addRegionalEntity(item, managers, coursesLicenses))
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
                dispatch(updateRegionalEntity(item, editableItem.id, managers, prevManagers, coursesLicenses))
                    .then(({ managersSaved }) => {
                        setManagers(managersSaved);
                        setPrevManagers(managers);

                        loadCoursesLicenses();

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
        return validateRegionalEntity({
            corporateEntityId,
            name: regionalEntityName,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCorporateEntityId(editableItem.corporateEntityId);
            setRegionalEntityName(editableItem.name);

            if (editableItem.managersIds) {
                dispatch(findManagersByIds(editableItem.managersIds)).then(managersValues => {
                    setManagers(managersValues);
                    setPrevManagers(managersValues);
                });
            }

            loadCoursesLicenses();
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}
                <div className="d-flex flex-column flex-md-row no-gutters">
                    <Col className="col-12 col-lg-9 mb-4">
                        <div className="d-flex flex-column flex-lg-row mb-3">
                            {/* corporate entity */}
                            <Select
                                className="col-lg-6 pl-0 pr-0 pr-lg-4"
                                label="Entidad Corporativa"
                                value={corporateEntityId}
                                options={corporateEntitiesOptions}
                                onChange={e => setCorporateEntityId(e.target.value)}
                                required
                            />

                            {/* regional entity */}
                            <Input
                                className="col-lg-6 pr-0 pl-0 pr-lg-3"
                                label="Entidad Regional"
                                value={regionalEntityName}
                                onChange={e => setRegionalEntityName(e.target.value)}
                                required
                            />
                        </div>

                        {/* course books selectable */}
                        <RegionalEntityManagersSelectable
                            className="pr-0 pr-lg-4 mb-5"
                            managers={managers}
                            onChange={values => setManagers(values)}
                        />

                        {/* course books selectable */}
                        <RenderIf isTrue={!!corporateEntityId}>
                            <CoursesLicenses
                                className="pr-0 pr-lg-4"
                                corporateEntityId={corporateEntityId}
                                prevCoursesLicenses={prevCoursesLicenses}
                                onChange={values => setCoursesLicenses(values)}
                            />
                        </RenderIf>

                        <ResponsiveControl visibleOn="md" className="pt-3">
                            {/* carga por lote */}
                            <RenderIf isTrue={!isEditing}>
                                <RegionalEntitiesBatchUploader />
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
                                <RegionalEntitiesBatchUploader />
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
    corporateEntities: PropTypes.array,
};

CoursesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    corporateEntities: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    corporateEntities: firestore.ordered && firestore.ordered['selectable-corporate-entities'],
});

const firestoreQuery = () => {
    const fsQuery = [];

    fsQuery.push({
        collection: 'corporateEntities',
        storeAs: 'selectable-corporate-entities',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CoursesForm);
