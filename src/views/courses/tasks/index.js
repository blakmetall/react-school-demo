import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ParticipantTaskPage from './participant'
import FacilitatorTasksPage from './facilitator';

const CourseTasksPage = ({ auth }) => {
    const { role } = auth;
    const { slug } = role;

    if (slug === 'participant') {
        return <ParticipantTaskPage />;
    }
    if (slug === 'facilitator') {
        return <FacilitatorTasksPage />;
    }
    return null;
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseTasksPage.propTypes = {
    auth: PropTypes.any,
};

CourseTasksPage.defaultProps = {
    auth: undefined,
};

const enhance = compose(connect(storeInjectedProps));

export default enhance(CourseTasksPage);



