import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, RenderIf, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import { findFacilitatorsManagersByIds } from '../../../../store/actions/facilitators-managers';
import {
    addFacilitatorsItem,
    updateFacilitatorsItem,
    validateOnSaveFacilitatorsItem,
} from '../../../../store/actions/facilitators';
import { useCorporateEntitiesOptions } from '../../corporate-entities/hooks';
import { useRegionalEntitiesOptions } from '../../regional-entities/hooks';
import { useLearningCommunitiesOptions } from '../../learning-communities/hooks';
import { validateFacilitator } from './helpers';
import FacilitatorsBatchUploader from './batch';
import FacilitatorsManagersSelectable from './managersSelectable';

const CoursesForm = ({
    editableItem,
    submitLabel,
    isCreating,
    isEditing,
    corporateEntities,
    regionalEntities,
    learningCommunities,
}) => {
    const [corporateEntityId, setCorporateEntityId] = useState('');
    const [regionalEntityId, setRegionalEntityId] = useState('');
    const [learningCommunityId, setLearningCommunityId] = useState('');
    const [managers, setManagers] = useState([]);
    const [prevManagers, setPrevManagers] = useState('');

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const corporateEntitiesOptions = useCorporateEntitiesOptions(corporateEntities);
    const regionalEntitiesOptions = useRegionalEntitiesOptions(corporateEntityId, regionalEntities);
    const learningCommunitiesOptions = useLearningCommunitiesOptions(regionalEntityId, learningCommunities);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCorporateEntityId('');
        setRegionalEntityId('');
        setLearningCommunityId('');
        setManagers([]);
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCorporateEntity = corporateEntitiesOptions.filter(item => item.value === corporateEntityId);
        const corporateEntityName = (selectedCorporateEntity[0] && selectedCorporateEntity[0].label) || '';

        const selectedRegionalEntity = regionalEntitiesOptions.filter(item => item.value === regionalEntityId);
        const regionalEntityName = (selectedRegionalEntity[0] && selectedRegionalEntity[0].label) || '';

        const selectedLearningCommunity = learningCommunitiesOptions.filter(item => item.value === learningCommunityId);
        const learningCommunityName = (selectedLearningCommunity[0] && selectedLearningCommunity[0].label) || '';

        const item = {
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
            corporateEntityName,
            regionalEntityName,
            learningCommunityName,
        };

        const validation = await dispatch(
            validateOnSaveFacilitatorsItem({ ...item, id: (editableItem && editableItem.id) || '' }),
        );

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addFacilitatorsItem(item, managers))
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
                dispatch(updateFacilitatorsItem(item, editableItem.id, managers, prevManagers))
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
        return validateFacilitator({
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCorporateEntityId(editableItem.corporateEntityId);
            setRegionalEntityId(editableItem.regionalEntityId);
            setLearningCommunityId(editableItem.learningCommunityId);

            if (editableItem.managersIds) {
                dispatch(findFacilitatorsManagersByIds(editableItem.managersIds)).then(managersValues => {
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
                <div className="d-flex flex-column no-gutters">
                    <Col className="col-12 col-lg-12 mb-4">
                        <div className="d-flex flex-column flex-lg-row mb-2">
                            {/* corporate entity */}
                            <Select
                                className="col-lg-4 pl-0 pr-0 pr-lg-4"
                                label="Entidad Corporativa"
                                value={corporateEntityId}
                                options={corporateEntitiesOptions}
                                onChange={e => {
                                    if (e.target.value !== corporateEntityId) {
                                        setRegionalEntityId();
                                        setLearningCommunityId();
                                    }

                                    setCorporateEntityId(e.target.value);
                                }}
                                required
                            />

                            {/* regional entity */}
                            <Select
                                className="col-lg-4 pl-0 pr-0 pr-lg-4"
                                label="Entidad Regional"
                                value={regionalEntityId}
                                options={regionalEntitiesOptions}
                                onChange={e => {
                                    if (e.target.value !== regionalEntityId) {
                                        setLearningCommunityId();
                                    }

                                    setRegionalEntityId(e.target.value);
                                }}
                                required
                            />

                            {/* regional entity */}
                            <Select
                                className="col-lg-4 pl-0 pr-0"
                                label="Comunidad de aprendizaje"
                                value={learningCommunityId}
                                options={learningCommunitiesOptions}
                                onChange={e => setLearningCommunityId(e.target.value)}
                                required
                            />
                        </div>

                        {/* course books selectable */}
                        <FacilitatorsManagersSelectable
                            className="pr-0 mb-5"
                            managers={managers}
                            onChange={values => setManagers(values)}
                        />

                        {/* carga por lote */}
                        <RenderIf isTrue={!isEditing}>
                            <FacilitatorsBatchUploader />
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
                    </Col>
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
    learningCommunities: PropTypes.array,
};

CoursesForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    corporateEntities: [],
    regionalEntities: [],
    learningCommunities: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    corporateEntities: firestore.ordered && firestore.ordered['selectable-corporate-entities'],
    regionalEntities: firestore.ordered && firestore.ordered['selectable-regional-entities'],
    learningCommunities: firestore.ordered && firestore.ordered['selectable-learning-communities'],
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

    fsQuery.push({
        collection: 'learningCommunities',
        storeAs: 'selectable-learning-communities',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CoursesForm);
