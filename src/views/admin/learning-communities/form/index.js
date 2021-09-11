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
    addLearningCommunity,
    updateLearningCommunity,
    validateOnSaveLearningCommunity,
} from '../../../../store/actions/learning-communities';
import { useCorporateEntitiesOptions } from '../../corporate-entities/hooks';
import { useRegionalEntitiesOptions } from '../../regional-entities/hooks';
import { validateLearningCommunity } from './helpers';
import LearningCommunitiesBatchUploader from './batch';
import LearningCommunityManagersSelectable from './managersSelectable';

const CoursesForm = ({ editableItem, submitLabel, isCreating, isEditing, corporateEntities, regionalEntities }) => {
    const [corporateEntityId, setCorporateEntityId] = useState('');
    const [regionalEntityId, setRegionalEntityId] = useState('');
    const [learningCommunityName, setLearningCommunityName] = useState('');
    const [managers, setManagers] = useState([]);
    const [prevManagers, setPrevManagers] = useState('');

    const [isProcessingForm, setIsProcessingForm] = useState(false);
    const corporateEntitiesOptions = useCorporateEntitiesOptions(corporateEntities);
    const regionalEntitiesOptions = useRegionalEntitiesOptions(corporateEntityId, regionalEntities);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCorporateEntityId('');
        setRegionalEntityId('');
        setLearningCommunityName('');
        setManagers([]);
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCorporateEntity = corporateEntitiesOptions.filter(item => item.value === corporateEntityId);
        const corporateEntityName = (selectedCorporateEntity[0] && selectedCorporateEntity[0].label) || '';

        const selectedRegionalEntity = regionalEntitiesOptions.filter(item => item.value === regionalEntityId);
        const regionalEntityName = (selectedRegionalEntity[0] && selectedRegionalEntity[0].label) || '';

        const item = {
            corporateEntityId,
            regionalEntityId,
            corporateEntityName,
            regionalEntityName,
            name: learningCommunityName,
        };

        const validation = await dispatch(
            validateOnSaveLearningCommunity({ ...item, id: (editableItem && editableItem.id) || '' }),
        );

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addLearningCommunity(item, managers))
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
                dispatch(updateLearningCommunity(item, editableItem.id, managers, prevManagers))
                    .then(({ managersSaved }) => {
                        setManagers(managersSaved);
                        setPrevManagers(managers);

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
        return validateLearningCommunity({
            corporateEntityId,
            regionalEntityId,
            name: learningCommunityName,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCorporateEntityId(editableItem.corporateEntityId);
            setRegionalEntityId(editableItem.regionalEntityId);
            setLearningCommunityName(editableItem.name);

            if (editableItem.managersIds) {
                dispatch(findManagersByIds(editableItem.managersIds)).then(managersValues => {
                    setManagers(managersValues);
                    setPrevManagers(managersValues);
                });
            }
        }

        // eslint-disable-next-line
    }, [editableItem]);

    return (
        <>
            <Form noValidate onSubmit={handleOnSubmit}>
                {/* input fields */}
                <div className="d-flex flex-column flex-md-row no-gutters">
                    <Col className="col-12 col-lg-9 mb-4">
                        <div className="d-flex flex-column flex-lg-row mb-2">
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
                            <Select
                                className="col-lg-6 pl-0 pr-0 pr-lg-3"
                                label="Entidad Regional"
                                value={regionalEntityId}
                                options={regionalEntitiesOptions}
                                onChange={e => setRegionalEntityId(e.target.value)}
                                required
                            />
                        </div>

                        <div className="d-flex flex-column flex-lg-row mb-3">
                            {/* learning community */}
                            <Input
                                className="col-lg-12 pr-0 pl-0 pr-lg-3"
                                label="Comunidad de aprendizaje"
                                value={learningCommunityName}
                                onChange={e => setLearningCommunityName(e.target.value)}
                                required
                            />
                        </div>

                        {/* course books selectable */}
                        <LearningCommunityManagersSelectable
                            className="pr-0 pr-lg-4"
                            managers={managers}
                            onChange={values => setManagers(values)}
                        />

                        <ResponsiveControl visibleOn="md" className="pt-3">
                            {/* carga por lote */}
                            <RenderIf isTrue={!isEditing}>
                                <LearningCommunitiesBatchUploader />
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
                                <LearningCommunitiesBatchUploader />
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
    regionalEntities: PropTypes.array,
};

CoursesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    corporateEntities: [],
    regionalEntities: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    corporateEntities: firestore.ordered && firestore.ordered['selectable-corporate-entities'],
    regionalEntities: firestore.ordered && firestore.ordered['selectable-regional-entities'],
});

const firestoreQuery = () => {
    const fsQuery = [];

    fsQuery.push({
        collection: 'corporateEntities',
        storeAs: 'selectable-corporate-entities',
    });

    fsQuery.push({
        collection: 'regionalEntities',
        storeAs: 'selectable-regional-entities',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CoursesForm);
