import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, RenderIf, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import {
    addFacilitatorsGroupsItem,
    updateFacilitatorsGroupsItem,
    validateOnSaveFacilitatorGroupItem,
} from '../../../../store/actions/facilitators-groups';
import { useCorporateEntitiesOptions } from '../../corporate-entities/hooks';
import { useRegionalEntitiesOptions } from '../../regional-entities/hooks';
import { useLearningCommunitiesOptions } from '../../learning-communities/hooks';
import { useLearningCommunityGroupsOptions } from '../../learning-community-groups/hooks';
import { useFacilitatorsOptions } from '../../facilitators/hooks';
import { validateFacilitatorsGroupsItem } from './helpers';
import FacilitatorsGroupsBatchUploader from './batch';

const FacilitatorsGroupsForm = ({
    editableItem,
    submitLabel,
    isCreating,
    isEditing,
    corporateEntities,
    regionalEntities,
    learningCommunities,
    learningCommunityGroups,
    groups,
    facilitators,
    facilitatorsManagers,
}) => {
    const [corporateEntityId, setCorporateEntityId] = useState('');
    const [regionalEntityId, setRegionalEntityId] = useState('');
    const [learningCommunityId, setLearningCommunityId] = useState('');
    const [facilitatorId, setFacilitatorId] = useState('');
    const [groupId, setGroupId] = useState('');

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const corporateEntitiesOptions = useCorporateEntitiesOptions(corporateEntities);
    const regionalEntitiesOptions = useRegionalEntitiesOptions(corporateEntityId, regionalEntities);
    const learningCommunitiesOptions = useLearningCommunitiesOptions(regionalEntityId, learningCommunities);
    const groupsOptions = useLearningCommunityGroupsOptions(learningCommunityId, learningCommunityGroups, groups);
    const facilitatorsOptions = useFacilitatorsOptions(learningCommunityId, facilitators, facilitatorsManagers);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCorporateEntityId('');
        setRegionalEntityId('');
        setLearningCommunityId('');
        setFacilitatorId('');
        setGroupId('');
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCorporateEntity = corporateEntitiesOptions.filter(item => item.value === corporateEntityId);
        const corporateEntityName = (selectedCorporateEntity[0] && selectedCorporateEntity[0].label) || '';

        const selectedRegionalEntity = regionalEntitiesOptions.filter(item => item.value === regionalEntityId);
        const regionalEntityName = (selectedRegionalEntity[0] && selectedRegionalEntity[0].label) || '';

        const selectedLearningCommunity = learningCommunitiesOptions.filter(item => item.value === learningCommunityId);
        const learningCommunityName = (selectedLearningCommunity[0] && selectedLearningCommunity[0].label) || '';

        const selectedFacilitator = facilitatorsOptions.filter(item => item.value === facilitatorId);
        const facilitatorName = (selectedFacilitator[0] && selectedFacilitator[0].name) || '';

        const selectedGroup = groupsOptions.filter(item => item.value === groupId);
        const groupName = (selectedGroup[0] && selectedGroup[0].label) || '';

        const item = {
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
            corporateEntityName,
            regionalEntityName,
            learningCommunityName,
            facilitatorId,
            facilitatorName,
            groupId,
            groupName,
        };

        const validation = await dispatch(
            validateOnSaveFacilitatorGroupItem({ ...item, isEditing, id: (editableItem && editableItem.id) || '' }),
        );

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addFacilitatorsGroupsItem(item))
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
                dispatch(updateFacilitatorsGroupsItem(item, editableItem.id))
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
        return validateFacilitatorsGroupsItem({
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
            facilitatorId,
            groupId,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCorporateEntityId(editableItem.corporateEntityId);
            setRegionalEntityId(editableItem.regionalEntityId);
            setLearningCommunityId(editableItem.learningCommunityId);
            setFacilitatorId(editableItem.facilitatorId);
            setGroupId(editableItem.groupId);
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
                                        setGroupId();
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
                                        setGroupId();
                                    }

                                    setRegionalEntityId(e.target.value);
                                }}
                                required
                            />

                            {/* learning community */}
                            <Select
                                className="col-lg-4 pl-0 pr-0"
                                label="Comunidad de aprendizaje"
                                value={learningCommunityId}
                                options={learningCommunitiesOptions}
                                onChange={e => {
                                    if (e.target.value !== learningCommunityId) {
                                        setGroupId();
                                    }

                                    setLearningCommunityId(e.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="d-flex flex-column flex-lg-row mb-2">
                            {/* facilitator */}
                            <Select
                                className="col-lg-4 pl-0 pr-0 pr-lg-4"
                                label="Facilitador"
                                value={facilitatorId}
                                options={facilitatorsOptions}
                                onChange={e => setFacilitatorId(e.target.value)}
                                required
                            />

                            {/* group */}
                            <Select
                                className="col-lg-4 pl-0 pr-lg-4"
                                label="Grupo"
                                value={groupId}
                                options={groupsOptions}
                                onChange={e => setGroupId(e.target.value)}
                                required
                            />
                        </div>

                        {/* carga por lote */}
                        <RenderIf isTrue={!isEditing}>
                            <FacilitatorsGroupsBatchUploader />
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

FacilitatorsGroupsForm.propTypes = {
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
    corporateEntities: PropTypes.array,
    regionalEntities: PropTypes.array,
    learningCommunities: PropTypes.array,
    learningCommunityGroups: PropTypes.array,
    groups: PropTypes.array,
    facilitators: PropTypes.array,
    facilitatorsManagers: PropTypes.array,
};
FacilitatorsGroupsForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    corporateEntities: [],
    regionalEntities: [],
    learningCommunities: [],
    learningCommunityGroups: [],
    groups: [],
    facilitators: [],
    facilitatorsManagers: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    corporateEntities: firestore.ordered && firestore.ordered['selectable-corporate-entities'],
    regionalEntities: firestore.ordered && firestore.ordered['selectable-regional-entities'],
    learningCommunities: firestore.ordered && firestore.ordered['selectable-learning-communities'],
    learningCommunityGroups: firestore.ordered && firestore.ordered['selectable-learning-community-groups'],
    groups: firestore.ordered && firestore.ordered['selectable-groups'],
    facilitators: firestore.ordered && firestore.ordered['selectable-facilitators'],
    facilitatorsManagers: firestore.ordered && firestore.ordered['selectable-facilitators-managers'],
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

    fsQuery.push({
        collection: 'learningCommunityGroups',
        storeAs: 'selectable-learning-community-groups',
    });

    fsQuery.push({
        collection: 'groups',
        storeAs: 'selectable-groups',
    });

    fsQuery.push({
        collection: 'facilitators',
        storeAs: 'selectable-facilitators',
    });

    fsQuery.push({
        collection: 'facilitatorsManagers',
        storeAs: 'selectable-facilitators-managers',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(FacilitatorsGroupsForm);
