import React from 'react';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import RecordedClassesItemAccordion from './accordion';
import { ListItem } from '../../../../../components';

const RecordedClassesItem = ({ recordedClass, participants, onEdit, onDelete }) => {
    const { courseId } = useParams();
    const { id: recordedClassId } = recordedClass;

    return (
        <ListItem className="mb-3" key={recordedClassId} to={`/curso/${courseId}/clases-grabadas/${recordedClassId}`}>
            <RecordedClassesItemAccordion
                participants={participants}
                recordedClass={recordedClass}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </ListItem>
    );
};

RecordedClassesItem.propTypes = {
    recordedClass: PropTypes.any,
    participants: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

RecordedClassesItem.defaultProps = {
    recordedClass: false,
    participants: [],
    onEdit: () => {},
    onDelete: () => {},
};

const mapStateToProps = (state, { participantsIds }) => {
    const participants = [];
    if (participantsIds) {
        participantsIds.forEach(participantId => {
            const participantRef = `participant-${participantId}`;
            participants.push(state.firestore.ordered[participantRef]);
        });
    }

    return {
        participants,
    };
};

const firestoreQuery = (state, { participantsIds }) => {
    const queries = [];

    if (participantsIds) {
        participantsIds.forEach(participantId => {
            const participantRef = `participant-${participantId}`;
            queries.push({ collection: 'participants', doc: participantId, storeAs: participantRef });
        });
    }

    return queries;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(RecordedClassesItem);
