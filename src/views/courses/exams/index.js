import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import LiveClassesParticipant from './participant';
import LiveClassesFacilitator from './facilitator';

const CourseExamsPage = ({ auth }) => {
    const { role } = auth;
    const { slug } = role;
    
    if (slug === 'participant') {
        return <LiveClassesParticipant/>;
    }
    if (slug === 'facilitator') {
        return <LiveClassesFacilitator />;
    }
    return null;
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseExamsPage.propTypes = {
    auth: PropTypes.any,
    recordedClasses: PropTypes.array,
};

CourseExamsPage.defaultProps = {
    auth: undefined,
    recordedClasses: [],
};

const enhance = compose(connect(storeInjectedProps));

export default enhance(CourseExamsPage);
