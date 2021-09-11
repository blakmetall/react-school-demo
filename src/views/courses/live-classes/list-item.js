import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { Col, Button as IconButton } from 'react-bootstrap';
import { Button, Dropdown, RenderIf } from '../../../components';
import { DeleteIcon, EditIcon } from '../../../components/icons';
import LiveClassParticipants from './facilitator/classes-list/participants';
import theme from '../../../theme';

const LiveClassesItem = ({ liveClass, participants, onEdit, onDelete }) => {
    const { title, startDateTime, endDateTime, description, meetingURL } = liveClass;

    const startJSDate = new Date(startDateTime.seconds * 1000);
    const endJSDate = new Date(endDateTime.seconds * 1000);

    const start = DateTime.fromJSDate(startJSDate)
        .toLocal()
        .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);

    const end = DateTime.fromJSDate(endJSDate)
        .toLocal()
        .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);

    const inTheFuture = startJSDate > new Date();
    const inThePast = endJSDate < new Date();
    const inTheNearFuture =
        !inThePast &&
        DateTime.fromJSDate(startJSDate)
            .minus({ hours: 1 })
            .toJSDate() < new Date();
    const active = inTheNearFuture || (!inTheFuture && !inThePast);

    let headerActive = (
        <div className="d-flex align-items-center flex-nowrap justify-content-between">
            <h1 className="app-font-19 font-weight-500">
                {start} a {end}
            </h1>
        </div>
    );

    if (onEdit) {
        headerActive = (
            <div className="d-flex align-items-center flex-nowrap justify-content-between">
                <h1 className="app-font-19 font-weight-500">
                    {start} a {end}
                </h1>
                <div className="d-flex align-self-end align-items-center">
                    <IconButton variant="" className="mx-2 p-0" onClick={e => onEdit(e, liveClass)}>
                        <EditIcon size="xs" />
                    </IconButton>
                    <IconButton variant="" className="p-0" onClick={e => onDelete(e, liveClass)}>
                        <DeleteIcon size="xs" />
                    </IconButton>
                </div>
            </div>
        );
    }

    const color = inThePast ? theme.bootstrap.info : theme.bootstrap.appGray;

    return (
        <Dropdown
            title={title}
            isOpenByDefault={false}
            className="mb-3"
            headerChildren={() => {
                if (active) return headerActive;
                if (inThePast) return <div className="app-font-19 font-weight-500">Finalizada</div>;
                if (inTheFuture)
                    return (
                        <div className="app-font-19 font-weight-500">
                            {start} a {end}
                        </div>
                    );
                return null;
            }}
            color={active ? undefined : color}
        >
            <div className="d-flex justify-content-between justify-content-center align-items-center flex-column flex-lg-row mb-3">
                <h1 className="text-gray-500 font-weight-bold app-font-16 order-2 order-lg-1">Notas</h1>
                <RenderIf isTrue={participants.length > 0}>
                    <LiveClassParticipants participants={participants} />
                </RenderIf>
            </div>
            <Col className="col-12 p-0">
                <p className="text-gray-500 mb-3">{description}</p>
            </Col>
            <Col className="col-12 col-lg-2 p-0">
                <Button
                    fullWidth
                    label="Ir"
                    disabled={!active}
                    href={meetingURL}
                    onClick={() => window.open(meetingURL, '_blank')}
                    type="submit"
                    variant="success"
                    size="xs"
                />
            </Col>
        </Dropdown>
    );
};

LiveClassesItem.propTypes = {
    liveClass: PropTypes.any,
    participants: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

LiveClassesItem.defaultProps = {
    liveClass: false,
    participants: [],
    onEdit: undefined,
    onDelete: undefined,
};

const mapStateToProps = (state, { participantsIds }) => {
    const participants = [];
    if (participantsIds) {
        participantsIds.forEach(participantId => {
            const participantRef = `participant-${participantId}`;
            if (state.firestore.ordered[participantRef]) {
                participants.push(state.firestore.ordered[participantRef]);
            }
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

export default enhance(LiveClassesItem);
