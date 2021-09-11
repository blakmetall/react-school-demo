import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Button, Dropdown } from '../../../../../../components';
import theme from '../../../../../../theme';

const PresentialClasseslist = () => {
    const history = useHistory();

    return (
        <>
            <Dropdown
                title="Mi familia mi soporte"
                isOpenByDefault={false}
                headerChildren={() => <div className="app-font-16">viernes, 10/05/20, 10:44 am</div>}
                className="mb-3"
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
                <Col className="col-12 col-lg-2 p-0">
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
            </Dropdown>

            <Dropdown
                title="Mi familia mi soporte"
                isOpenByDefault={false}
                headerChildren={() => <div className="app-font-16">No disponible</div>}
                className="mb-3"
                color={theme.bootstrap.appGray}
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
                <Col className="col-12 col-lg-2 p-0">
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
                        disabled
                    />
                </Col>
            </Dropdown>

            <Dropdown
                title="Mi familia mi soporte"
                isOpenByDefault={false}
                className="mb-3"
                headerChildren={() => <div className="app-font-16">Finalizada</div>}
                color={theme.bootstrap.info}
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
                <Col className="col-12 col-lg-2 p-0">
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
                        disabled
                    />
                </Col>
            </Dropdown>
        </>
    );
};

export default PresentialClasseslist;
