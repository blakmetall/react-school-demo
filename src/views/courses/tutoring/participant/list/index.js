import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { Dropdown, Button, Avatar } from '../../../../../components';
import theme from '../../../../../theme';

const TutoringListFacilitator = () => {
    const history = useHistory();

    return (
        <>
            <Dropdown
                isOpenByDefault={false}
                className="mb-3 flex-column"
                headerReplacer={() => (
                    <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row w-100">
                        <Avatar name="John Doe" label="John Doe" labelColor="white" size="small" className="mb-3 mb-lg-0" />
                        <div className="app-font-19 font-weight-500 text-center mb-3 mb-lg-0">
                            Asesoría de la tarea: <span> investigación lorem large text</span>
                        </div>
                        <div className="app-font-19 text-center font-weight-500">Viernes, 10/05/2020, 10:44 am</div>
                    </div>
                )}
            >
                <h1 className="text-gray-500 font-weight-bold app-font-18 mb-3">
                    Notas. Large title test Large title test Large title test
                </h1>
                <Col className="col-12 p-0">
                    <p className="text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor
                        in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                        dolore te feugait nulla facilisi.
                    </p>
                </Col>
                <Row className="justify-content-end">
                    <Col className="col-12 col-lg-2 ">
                        <Button
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            fullWidth
                            label="Ir"
                            type="submit"
                            variant="success"
                            size="xs"
                        />
                    </Col>
                </Row>
            </Dropdown>

            {/* no disponible  */}
            <Dropdown
                isOpenByDefault={false}
                color={theme.bootstrap.appGray}
                className="mb-3"
                headerReplacer={() => (
                    <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row w-100">
                        <Avatar name="John Doe" label="John Doe" labelColor="white" size="small" className="mb-3 mb-lg-0" />
                        <div className="app-font-19 font-weight-500 text-center mb-3 mb-lg-0">
                            Asesoría de la tarea: <span> investigación lorem large text</span>
                        </div>
                        <div className="app-font-19 text-center font-weight-500">Viernes, 10/05/2020, 10:44 am</div>
                    </div>
                )}
            >
                <h1 className="text-gray-500 font-weight-bold app-font-18 mb-3">
                    Notas. Large title test Large title test Large title test
                </h1>
                <Col className="col-12 p-0">
                    <p className="text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor
                        in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                        dolore te feugait nulla facilisi.
                    </p>
                </Col>
                <Row className="justify-content-end">
                    <Col className="col-12 col-lg-2 ">
                        <Button
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            fullWidth
                            label="Ir"
                            type="submit"
                            variant="success"
                            size="xs"
                        />
                    </Col>
                </Row>
            </Dropdown>

            {/* terminada */}
            <Dropdown
                isOpenByDefault={false}
                color={theme.bootstrap.info}
                className="mb-3 flex-column"
                headerReplacer={() => (
                    <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row w-100">
                        <Avatar name="John Doe" label="John Doe" labelColor="white" size="small" className="mb-3 mb-lg-0" />
                        <div className="app-font-19 font-weight-500 text-center mb-3 mb-lg-0">
                            Asesoría de la tarea: <span> investigación lorem large text</span>
                        </div>
                        <div className="app-font-19 text-center font-weight-500">Viernes, 10/05/2020, 10:44 am</div>
                    </div>
                )}
            >
                <h1 className="text-gray-500 font-weight-bold app-font-18 mb-3">
                    Notas. Large title test Large title test Large title test
                </h1>
                <Col className="col-12 p-0">
                    <p className="text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor
                        in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                        vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                        dolore te feugait nulla facilisi.
                    </p>
                </Col>
                <Row className="justify-content-end">
                    <Col className="col-12 col-lg-2">
                        <Button
                            onClick={() =>
                                history.push(
                                    '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                                )
                            }
                            fullWidth
                            label="Ir"
                            type="submit"
                            variant="success"
                            size="xs"
                        />
                    </Col>
                </Row>
            </Dropdown>
        </>
    );
};

export default TutoringListFacilitator;
