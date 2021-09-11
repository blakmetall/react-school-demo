import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { StyledVideoAccess } from './styled';

const VideoAccessItem = ({ facilitatorManager }) => {
    const { conferenceAccount, conferencePassword } = facilitatorManager;

    return (
        <div className="ml-2 col-12 w-100">
            <div className="app-font-14 font-weight-700 text-center mb-2">Accesos para video conferencia</div>
            <StyledVideoAccess className="p-3 rounded-15 flex-column flex-lg-row">
                <div className="d-flex flex-column mr-3 mb-3 mb-lg-0">
                    <div className="app-font-14 text-gray-500 font-weight-600">Cuenta</div>
                    <div className="app-font-14 text-gray-500">{conferenceAccount}</div>
                </div>
                <div className="d-flex flex-column">
                    <div className="app-font-14 text-gray-500 font-weight-600">Contraseña</div>
                    <div className="app-font-14 text-gray-500">{conferencePassword}</div>
                </div>
            </StyledVideoAccess>
        </div>
    );
};

VideoAccessItem.propTypes = {
    facilitatorManager: PropTypes.any,
};

VideoAccessItem.defaultProps = {
    facilitatorManager: {},
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

const mapStateToProps = state => {
    const facilitatorManager = [];

    const profileId = state.auth.profile.id;

    const facilitatorsManagersRef = `facilitatorsManagers-${profileId}`;
    if (state.firestore.ordered[facilitatorsManagersRef]) {
        facilitatorManager.push(state.firestore.ordered[facilitatorsManagersRef][0]);
    }

    return {
        facilitatorManager: facilitatorManager.length ? facilitatorManager[0] : {},
    };
};

const firestoreQuery = state => {
    const queries = [];

    const profileId = state.auth.profile.id;

    const facilitatorsManagersRef = `facilitatorsManagers-${profileId}`;
    queries.push({ collection: 'facilitatorsManagers', where: ['profileId', '==', profileId], storeAs: facilitatorsManagersRef });

    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(VideoAccessItem);
