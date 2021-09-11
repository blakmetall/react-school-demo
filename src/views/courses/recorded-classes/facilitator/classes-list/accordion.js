import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Accordion, AvatarList } from '../../../../../components';

const RecordedClassesItemAccordion = ({ profiles, recordedClass, onEdit, onDelete }) => {
    const history = useHistory();
    const { courseId } = useParams();
    const { id: recordedClassId, title, viewedBy = [] } = recordedClass;

    const avatarsMap = profiles.map(({ id, firstName = '', lastName = '' }) => {
        return {
            id,
            name: `${firstName} ${lastName}`,
        };
    });

    const viewedByProfiles = avatarsMap.filter(profile => viewedBy.indexOf(profile.id) >= 0);
    const notViewedByProfiles = avatarsMap.filter(profile => viewedBy.indexOf(profile.id) < 0);

    return (
        <>
            <Accordion
                title={title}
                avatars={viewedByProfiles}
                onButtonClick={() => history.push(`/curso/${courseId}/clases-grabadas/${recordedClassId}`)}
                onEdit={e => {
                    onEdit(e, recordedClass);
                }}
                onDelete={e => {
                    onDelete(e, recordedClass);
                }}
            >
                <Row className="p-1">
                    <Col className="col-12 col-lg-3 mb-2 mb-lg-0">
                        <AvatarList avatars={viewedByProfiles} size="small" />
                    </Col>
                    <Col className="col-12 col-lg-3">
                        <AvatarList avatars={notViewedByProfiles} unSeenList size="small" />
                    </Col>
                </Row>
            </Accordion>
        </>
    );
};

RecordedClassesItemAccordion.propTypes = {
    recordedClass: PropTypes.any,
    profiles: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

RecordedClassesItemAccordion.defaultProps = {
    recordedClass: {},
    profiles: [],
    onEdit: () => {},
    onDelete: () => {},
};

const mapStateToProps = (state, { participants }) => {
    const profiles = [];
    if (participants) {
        participants.forEach(participant => {
            const { profileId } = participant[0];

            const profileRef = `profile-${profileId}`;
            profiles.push(state.firestore.ordered[profileRef][0]);
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

export default enhance(RecordedClassesItemAccordion);
