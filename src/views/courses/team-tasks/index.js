import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import TeamTasksFacilitatorPage from './facilitator';
import TeamTaskParticipantPage from './participant'

const CourseTeamTasksPage = ({ auth }) => {
    const { role } = auth;
    const { slug } = role;
    
    if (slug === 'participant') {
        return <TeamTaskParticipantPage/>;
    }
    if (slug === 'facilitator') {
        return <TeamTasksFacilitatorPage />;
    }
    return null;
};



const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseTeamTasksPage.propTypes = {
    auth: PropTypes.any,
    recordedClasses: PropTypes.array,
};

CourseTeamTasksPage.defaultProps = {
    auth: undefined,
    recordedClasses: [],
};

const enhance = compose(connect(storeInjectedProps));

export default enhance(CourseTeamTasksPage);
