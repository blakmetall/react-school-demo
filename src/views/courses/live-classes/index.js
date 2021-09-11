import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import LiveClassesFacilitator from './facilitator';
import LiveClassesParticipant from './participant';

const CourseLiveClassesPage = ({ auth, liveClasses }) => {
    const { role } = auth;
    const { slug } = role;

    if (slug === 'participant') {
        return <LiveClassesParticipant liveClasses={liveClasses} />;
    }
    if (slug === 'facilitator') {
        return <LiveClassesFacilitator liveClasses={liveClasses} />;
    }
    return null;
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseLiveClassesPage.propTypes = {
    auth: PropTypes.any,
    liveClasses: PropTypes.array,
};

CourseLiveClassesPage.defaultProps = {
    auth: undefined,
    liveClasses: [],
};

const mapStateToProps = (state, { match }) => {
    const { params } = match;
    const { courseId } = params;
    const ref = `live-classes-${courseId}`;
    return {
        liveClasses: state.firestore.ordered[ref],
    };
};

const firestoreQuery = (state, { match }) => {
    const queries = [];
    const { params } = match;
    const { courseId } = params;
    const ref = `live-classes-${courseId}`;
    queries.push({ collection: 'liveClasses', where: ['courseId', '==', courseId], storeAs: ref });
    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CourseLiveClassesPage);
