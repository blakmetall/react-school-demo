import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LiveClassesItem from '../../list-item';

const LiveClassesList = ({ liveClasses, participantsIds, onEdit, onDelete }) => {
    const renderItems = liveClasses.map(liveClass => {
        return (
            <LiveClassesItem
                liveClass={liveClass}
                participantsIds={participantsIds}
                key={liveClass.id}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        );
    });

    return renderItems;
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

const mapStateToProps = state => {
    const groupId = state.auth.group.id;

    const liveClassesRef = `live-classes-${groupId}`;
    const liveClasses = state.firestore.ordered[liveClassesRef] ? state.firestore.ordered[liveClassesRef] : [];

    const groupParticipantsRef = `group-participants-${groupId}`;

    const participantsIds = state.firestore.ordered[groupParticipantsRef]
        ? state.firestore.ordered[groupParticipantsRef][0].participantsIds
        : [];

    return {
        liveClasses,
        participantsIds,
    };
};

const firestoreQuery = state => {
    const queries = [];
    const groupId = state.auth.group.id;

    const liveClassesRef = `live-classes-${groupId}`;
    queries.push({ collection: 'liveClasses', where: ['groupId', '==', groupId], storeAs: liveClassesRef });

    const groupParticipantsRef = `group-participants-${groupId}`;
    queries.push({ collection: 'groupsParticipants', where: ['groupId', '==', groupId], storeAs: groupParticipantsRef });

    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(LiveClassesList);
