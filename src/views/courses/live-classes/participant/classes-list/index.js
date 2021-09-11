import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LiveClassesItem from '../../list-item';

const LiveClassesList = ({ liveClasses }) => {
    const renderItems = liveClasses.map(liveClass => {
        return <LiveClassesItem liveClass={liveClass} key={liveClass.id} />;
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

    return {
        liveClasses,
    };
};

const firestoreQuery = state => {
    const queries = [];
    const groupId = state.auth.group.id;

    const liveClassesRef = `live-classes-${groupId}`;
    queries.push({ collection: 'liveClasses', where: ['groupId', '==', groupId], storeAs: liveClassesRef });

    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(LiveClassesList);
