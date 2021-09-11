import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { ListItem, Button } from '../../../../../../components';

const ClassesList = () => {
    const history = useHistory();
    return (
        <>
            <ListItem className="mb-3">
                <Row className="justify-content-center  justify-content-lg-between align-items-center  px-lg-5 px-0">
                    <p className="app-font-20 font-weight-600 mb-2 mb-lg-0">Conociendo mi interior.</p>
                    <Col className="d-flex justify-content-center justify-content-lg-end col-12 col-lg-4">
                        <Button
                            label="Ver"
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            size="xs"
                        />
                    </Col>
                </Row>
            </ListItem>

            <ListItem className="mb-3">
                <Row className="justify-content-center  justify-content-lg-between align-items-center  px-lg-5 px-0">
                    <p className="app-font-20 font-weight-600 mb-2 mb-lg-0">Conociendo mi interior.</p>
                    <Col className="d-flex justify-content-center justify-content-lg-end col-12 col-lg-4">
                        <Button
                            label="Ver"
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            size="xs"
                        />
                    </Col>
                </Row>
            </ListItem>

            <ListItem className="mb-3">
                <Row className="justify-content-center  justify-content-lg-between align-items-center  px-lg-5 px-0">
                    <p className="app-font-20 font-weight-600 mb-2 mb-lg-0">Conociendo mi interior.</p>
                    <Col className="d-flex justify-content-center justify-content-lg-end col-12 col-lg-4">
                        <Button
                            label="Ver"
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            size="xs"
                        />
                    </Col>
                </Row>
            </ListItem>

            <ListItem className="mb-3">
                <Row className="justify-content-center  justify-content-lg-between align-items-center  px-lg-5 px-0">
                    <p className="app-font-20 font-weight-600 mb-2 mb-lg-0">Conociendo mi interior.</p>
                    <Col className="d-flex justify-content-center justify-content-lg-end col-12 col-lg-4">
                        <Button
                            label="Ver"
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            size="xs"
                        />
                    </Col>
                </Row>
            </ListItem>
        </>
    );
};

export default ClassesList;
