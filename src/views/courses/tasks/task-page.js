import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacilitatorTaskPage from './facilitator/task-page'
import ParticipantTaskPage from './participant/task-page'


const CourseTaskPage = ({ auth }) => {
    const { role } = auth;
    const { slug } = role;

    if (slug === 'participant') {
        return <ParticipantTaskPage />;
    }
    if (slug === 'facilitator') {
        return <FacilitatorTaskPage />;
    }
    return null;
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseTaskPage.propTypes = {
    auth: PropTypes.any,
};

CourseTaskPage.defaultProps = {
    auth: undefined,
};

const enhance = compose(connect(storeInjectedProps));

export default enhance(CourseTaskPage);



