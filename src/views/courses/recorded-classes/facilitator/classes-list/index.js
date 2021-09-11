import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import RecordedClassesItem from './item';

const RecordedClassesList = ({ recordedClasses, participantsIds, onEdit, onDelete }) => {
    const renderClasses = recordedClasses.map(recordedClass => {
        return (
            <RecordedClassesItem
                recordedClass={recordedClass}
                participantsIds={participantsIds}
                key={recordedClass.id}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        );
    });

    return <div>{renderClasses}</div>;
};

RecordedClassesList.propTypes = {
    recordedClasses: PropTypes.array,
    participantsIds: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

RecordedClassesList.defaultProps = {
    recordedClasses: [],
    participantsIds: [],
    onEdit: () => {},
    onDelete: () => {},
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

const mapStateToProps = state => {
    const groupId = state.auth.group.id;

    const recordedClassesRef = `recorded-classes-${groupId}`;
    const recordedClasses = state.firestore.ordered[recordedClassesRef] ? state.firestore.ordered[recordedClassesRef] : [];

    const groupParticipantsRef = `group-participants-${groupId}`;

    const participantsIds = state.firestore.ordered[groupParticipantsRef]
        ? state.firestore.ordered[groupParticipantsRef][0].participantsIds
        : [];

    return {
        recordedClasses,
        participantsIds,
    };
};

const firestoreQuery = state => {
    const queries = [];
    const groupId = state.auth.group.id;

    const recordedClassesRef = `recorded-classes-${groupId}`;
    queries.push({ collection: 'recordedClasses', where: ['groupId', '==', groupId], storeAs: recordedClassesRef });

    const groupParticipantsRef = `group-participants-${groupId}`;
    queries.push({ collection: 'groupsParticipants', where: ['groupId', '==', groupId], storeAs: groupParticipantsRef });

    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(RecordedClassesList);
