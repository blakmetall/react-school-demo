import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Dropdown, PageContainer, PageHeading } from '../../../components';
import TutoringParticipantPage from './participant';
import TutoringFacilitatorPage from './facilitator';

const CourseTutoringPage = ({ auth }) => {
    const { role } = auth;
    const { slug } = role;
    
    if (slug === 'participant') {
        return <TutoringParticipantPage/>;
    }
    if (slug === 'facilitator') {
        return <TutoringFacilitatorPage />;
    }
    return null;
};



const storeInjectedProps = state => ({
    auth: state.auth,
});

CourseTutoringPage.propTypes = {
    auth: PropTypes.any,
    recordedClasses: PropTypes.array,
};

CourseTutoringPage.defaultProps = {
    auth: undefined,
    recordedClasses: [],
};

const enhance = compose(connect(storeInjectedProps));

export default enhance(CourseTutoringPage);






//────  ──────────────────────────────────────────────────────────────────────────────────
// const CourseTutoringPage = () => {
//     return (
//         <div className="flex-grow-1">
//             <PageHeading label="Asesorías" />
//             <PageContainer contentPaddingClass="p-5">
//                 <div>Work in progress...</div>
//             </PageContainer>
//         </div>
//     );
// };

// export default CourseTutoringPage;
