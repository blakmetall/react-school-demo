import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Button, RenderIf, Select } from '../../../../components';
import { showSuccessNotification, showFailedNotification } from '../../../../store/actions/notifications';
import { findParticipantsItemsByIds } from '../../../../store/actions/participants';
import {
    addGroupsParticipantsItem,
    updateGroupsParticipantsItem,
    validateOnSaveGroupsParticipantsItem,
} from '../../../../store/actions/groups-participants';
import { useCorporateEntitiesOptions } from '../../corporate-entities/hooks';
import { useRegionalEntitiesOptions } from '../../regional-entities/hooks';
import { useLearningCommunitiesOptions } from '../../learning-communities/hooks';
import { useLearningCommunityGroupsOptions } from '../../learning-community-groups/hooks';
import { validateGroupsParticipantsItem } from './helpers';
import GroupsParticipantsBatchUploader from './batch';
import ParticipantsSelectable from './participantsSelectable';

const LearningCommunityGroupsForm = ({
    editableItem,
    submitLabel,
    isCreating,
    isEditing,
    corporateEntities,
    regionalEntities,
    learningCommunities,
    learningCommunityGroups,
    groups,
}) => {
    const [corporateEntityId, setCorporateEntityId] = useState('');
    const [regionalEntityId, setRegionalEntityId] = useState('');
    const [learningCommunityId, setLearningCommunityId] = useState('');
    const [groupId, setGroupId] = useState('');
    const [participants, setParticipants] = useState([]);
    const [prevParticipants, setPrevParticipants] = useState('');

    const [isProcessingForm, setIsProcessingForm] = useState(false);

    const corporateEntitiesOptions = useCorporateEntitiesOptions(corporateEntities);
    const regionalEntitiesOptions = useRegionalEntitiesOptions(corporateEntityId, regionalEntities);
    const learningCommunitiesOptions = useLearningCommunitiesOptions(regionalEntityId, learningCommunities);
    const groupsOptions = useLearningCommunityGroupsOptions(learningCommunityId, learningCommunityGroups, groups);

    const dispatch = useDispatch();

    const clearForm = () => {
        setCorporateEntityId('');
        setRegionalEntityId('');
        setLearningCommunityId('');
        setGroupId('');
        setParticipants([]);
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        const selectedCorporateEntity = corporateEntitiesOptions.filter(item => item.value === corporateEntityId);
        const corporateEntityName = (selectedCorporateEntity[0] && selectedCorporateEntity[0].label) || '';

        const selectedRegionalEntity = regionalEntitiesOptions.filter(item => item.value === regionalEntityId);
        const regionalEntityName = (selectedRegionalEntity[0] && selectedRegionalEntity[0].label) || '';

        const selectedLearningCommunity = learningCommunitiesOptions.filter(item => item.value === learningCommunityId);
        const learningCommunityName = (selectedLearningCommunity[0] && selectedLearningCommunity[0].label) || '';

        const selectedGroup = groupsOptions.filter(item => item.value === groupId);
        const groupName = (selectedGroup[0] && selectedGroup[0].label) || '';

        const item = {
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
            corporateEntityName,
            regionalEntityName,
            learningCommunityName,
            groupId,
            groupName,
        };

        const validation = await dispatch(
            validateOnSaveGroupsParticipantsItem({ ...item, id: (editableItem && editableItem.id) || '' }),
        );

        if (validation.success) {
            if (isCreating) {
                setIsProcessingForm(true);
                dispatch(addGroupsParticipantsItem(item, participants))
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
                dispatch(updateGroupsParticipantsItem(item, editableItem.id, participants, prevParticipants))
                    .then(({ participantsSaved }) => {
                        setParticipants(participantsSaved);
                        setPrevParticipants(participants);

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
        return validateGroupsParticipantsItem({
            corporateEntityId,
            regionalEntityId,
            learningCommunityId,
            groupId,
        });
    };

    // prepares editable item if exists
    useEffect(() => {
        if (editableItem && editableItem.id) {
            setCorporateEntityId(editableItem.corporateEntityId);
            setRegionalEntityId(editableItem.regionalEntityId);
            setLearningCommunityId(editableItem.learningCommunityId);
            setGroupId(editableItem.groupId);

            if (editableItem.participantsIds) {
                dispatch(findParticipantsItemsByIds(editableItem.participantsIds)).then(participantsValues => {
                    setParticipants(participantsValues);
                    setPrevParticipants(participantsValues);
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
                                className="col-lg-6 pl-0 pr-0 pr-lg-4"
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
                                className="col-lg-6 pl-0 pr-0"
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
                        </div>

                        <div className="d-flex flex-column flex-lg-row mb-2">
                            {/* regional entity */}
                            <Select
                                className="col-lg-6 pl-0 pr-0 pr-lg-4"
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

                            {/* group */}
                            <Select
                                className="col-lg-6 pl-0 pr-0"
                                label="Grupo"
                                value={groupId}
                                options={groupsOptions}
                                onChange={e => setGroupId(e.target.value)}
                                required
                            />
                        </div>

                        {/* course books selectable */}
                        <ParticipantsSelectable
                            className="pr-0 mb-5"
                            participants={participants}
                            onChange={values => setParticipants(values)}
                        />

                        {/* carga por lote */}
                        <RenderIf isTrue={!isEditing}>
                            <GroupsParticipantsBatchUploader />
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

LearningCommunityGroupsForm.propTypes = {
    editableItem: PropTypes.any,
    submitLabel: PropTypes.any,
    isCreating: PropTypes.bool,
    isEditing: PropTypes.bool,
    corporateEntities: PropTypes.array,
    regionalEntities: PropTypes.array,
    learningCommunities: PropTypes.array,
    learningCommunityGroups: PropTypes.array,
    groups: PropTypes.array,
};
LearningCommunityGroupsForm.defaultProps = {
    editableItem: undefined,
    submitLabel: 'Agregar',
    isCreating: undefined,
    isEditing: undefined,
    corporateEntities: [],
    regionalEntities: [],
    learningCommunities: [],
    learningCommunityGroups: [],
    groups: [],
};

const mapStateToProps = ({ firestore }, { editableItem }) => ({
    isCreating: !editableItem,
    isEditing: !!editableItem,
    corporateEntities: firestore.ordered && firestore.ordered['selectable-corporate-entities'],
    regionalEntities: firestore.ordered && firestore.ordered['selectable-regional-entities'],
    learningCommunities: firestore.ordered && firestore.ordered['selectable-learning-communities'],
    learningCommunityGroups: firestore.ordered && firestore.ordered['selectable-learning-community-groups'],
    groups: firestore.ordered && firestore.ordered['selectable-groups'],
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

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(LearningCommunityGroupsForm);
