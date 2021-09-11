import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { AvatarGroup } from '../../../../../components';

const LiveClassParticipants = ({ profiles }) => {
    const avatars = profiles.map(({ id, firstName = '', lastName = '' }) => {
        return {
            id,
            name: `${firstName} ${lastName}`,
        };
    });

    return <AvatarGroup avatars={avatars} className="align-self-end mb-3 mb-lg-0 order-1 order-lg-2" />;
};

LiveClassParticipants.propTypes = {
    profiles: PropTypes.array,
};

LiveClassParticipants.defaultProps = {
    profiles: [],
};

const mapStateToProps = (state, { participants }) => {
    const profiles = [];
    if (participants) {
        participants.forEach(participant => {
            const { profileId } = participant[0];

            const profileRef = `profile-${profileId}`;
            if (state.firestore.ordered[profileRef]) {
                profiles.push(state.firestore.ordered[profileRef][0]);
            }
        });
    }

    return {
        profiles,
    };
};

const firestoreQuery = (state, { participants }) => {
    const queries = [];

    if (participants) {
        participants.forEach(participant => {
            const { profileId } = participant[0];

            const profileRef = `profile-${profileId}`;
            queries.push({ collection: 'profiles', doc: profileId, storeAs: profileRef });
        });
    }

    return queries;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(LiveClassParticipants);
