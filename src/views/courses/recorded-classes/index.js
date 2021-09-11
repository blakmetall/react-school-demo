import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import CourseRecordedClassesPageParticipant from './participant';
import CourseRecordedClassesPageFacilitator from './facilitator';

const CourseRecordedClassesPage = ({ auth, recordedClasses }) => {
    const { role } = auth;
    const { slug } = role;

    if (slug === 'participant') {
        return <CourseRecordedClassesPageParticipant recordedClasses={recordedClasses} />;
    }
    if (slug === 'facilitator') {
        return <CourseRecordedClassesPageFacilitator recordedClasses={recordedClasses} />;
    }
    return null;
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseRecordedClassesPage.propTypes = {
    auth: PropTypes.any,
    recordedClasses: PropTypes.array,
};

CourseRecordedClassesPage.defaultProps = {
    auth: undefined,
    recordedClasses: [],
};

const mapStateToProps = (state, { match }) => {
    const { params } = match;
    const { courseId } = params;
    const ref = `recorded-classes-${courseId}`;
    return {
        recordedClasses: state.firestore.ordered[ref],
    };
};

const firestoreQuery = (state, { match }) => {
    const queries = [];
    const { params } = match;
    const { courseId } = params;
    const ref = `recorded-classes-${courseId}`;
    queries.push({ collection: 'recordedClasses', where: ['courseId', '==', courseId], storeAs: ref });
    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CourseRecordedClassesPage);
