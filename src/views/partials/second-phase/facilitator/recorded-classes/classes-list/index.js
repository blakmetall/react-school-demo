import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Accordion, AvatarList, ListItem } from '../../../../../../components';
import { avatars } from '../../../test-data';

const ClassesList = () => {
    const history = useHistory();

    // TEST
    return (
        <div>
            <ListItem className="mb-3">
                <Accordion
                    title="Lorem Title"
                    avatars={avatars}
                    avatarsTo="/"
                    onButtonClick={() =>
                        history.push('/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video')
                    }
                    onEdit={() => {
                        history.push('/');
                    }}
                    onDelete={() => {
                        history.push('/');
                    }}
                >
                    <Row className="p-1">
                        <Col className="col-12 col-lg-3 mb-2 mb-lg-0">
                            <AvatarList avatars={avatars} size="small" />
                        </Col>
                        <Col className="col-12 col-lg-3">
                            <AvatarList avatars={avatars} unSeenList size="small" />
                        </Col>
                    </Row>
                </Accordion>
            </ListItem>

            <ListItem className="mb-3">
                <Accordion
                    title="Lorem Title"
                    avatars={avatars}
                    avatarsTo="/"
                    onButtonClick={() =>
                        history.push('/participant-and-facilitator/presential-classes-and-recorded-classes/video')
                    }
                    onEdit={() => {
                        history.push('/');
                    }}
                    onDelete={() => {
                        history.push('/');
                    }}
                >
                    <Row className="p-2">
                        <Col className="col-12 col-lg-3 mb-2 mb-lg-0">
                            <AvatarList avatars={avatars} size="small" />
                        </Col>
                        <Col className="col-12 col-lg-3">
                            <AvatarList avatars={avatars} unSeenList size="small" />
                        </Col>
                    </Row>
                </Accordion>
            </ListItem>

            <ListItem className="mb-3">
                <Accordion
                    title="Lorem Title"
                    avatars={avatars}
                    avatarsTo="/"
                    onButtonClick={() =>
                        history.push('/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video')
                    }
                    onEdit={() => {
                        history.push('/');
                    }}
                    onDelete={() => {
                        history.push('/');
                    }}
                >
                    <Row className="p-2">
                        <Col className="col-12 col-lg-3 mb-2 mb-lg-0">
                            <AvatarList avatars={avatars} size="small" />
                        </Col>
                        <Col className="col-12 col-lg-3">
                            <AvatarList avatars={avatars} unSeenList size="small" />
                        </Col>
                    </Row>
                </Accordion>
            </ListItem>

            <ListItem className="mb-3">
                <Accordion
                    title="Lorem Title"
                    avatars={avatars}
                    avatarsTo="/"
                    onButtonClick={() =>
                        history.push('/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video')
                    }
                    onEdit={() => {
                        history.push('/');
                    }}
                    onDelete={() => {
                        history.push('/');
                    }}
                >
                    <Row className="p-2">
                        <Col className="col-12 col-lg-3 mb-2 mb-lg-0">
                            <AvatarList avatars={avatars} size="small" />
                        </Col>
                        <Col className="col-12 col-lg-3">
                            <AvatarList avatars={avatars} unSeenList size="small" />
                        </Col>
                    </Row>
                </Accordion>
            </ListItem>
        </div>
    );
};

export default ClassesList;
