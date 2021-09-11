import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Button as IconButton } from 'react-bootstrap';
import { Button, AvatarGroup, Dropdown } from '../../../../../../components';
import { DeleteIcon, EditIcon } from '../../../../../../components/icons';
import theme from '../../../../../../theme';
import { avatars } from '../../../test-data';

const PresentialClasseslist = () => {
    const history = useHistory();

    return (
        <>
            <Dropdown
                title="Mi familia mi soporte"
                isOpenByDefault={false}
                className="mb-3"
                headerChildren={() => (
                    <div className="d-flex align-items-center flex-nowrap justify-content-between">
                        <h1 className="app-font-19 font-weight-500">viernes, 10/05/20, 10:44 am</h1>
                        <div className="d-flex align-self-end align-items-center">
                            <IconButton variant="" className="mx-2 p-0">
                                <EditIcon size="xs" />
                            </IconButton>
                            <IconButton variant="" className="p-0">
                                <DeleteIcon size="xs" />
                            </IconButton>
                        </div>
                    </div>
                )}
            >
                <div className="d-flex justify-content-between justify-content-center align-items-center flex-column flex-lg-row mb-3">
                    <h1 className="text-gray-500 font-weight-bold app-font-16 order-2 order-lg-1">
                        Notas. Large title test Large title test Large title test
                    </h1>
                    <AvatarGroup avatars={avatars} className="align-self-end mb-3 mb-lg-0 order-1 order-lg-2" />
                </div>
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
                        fullWidth
                        label="Ir"
                        onClick={() =>
                            history.push(
                                '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                            )
                        }
                        type="submit"
                        variant="success"
                        size="xs"
                    />
                </Col>
            </Dropdown>

            {/* No disponible */}
            <Dropdown
                title="Mi familia mi soporte"
                isOpenByDefault={false}
                headerChildren={() => <div className="app-font-19 font-weight-500">No disponible</div>}
                className="mb-3"
                color={theme.bootstrap.appGray}
            >
                <div className="d-flex justify-content-between justify-content-center align-items-center flex-column flex-lg-row mb-3">
                    <h1 className="text-gray-500 font-weight-bold app-font-16 order-2 order-lg-1">
                        Notas. Large title test Large title test Large title test
                    </h1>
                    <AvatarGroup avatars={avatars} className="align-self-end mb-3 mb-lg-0 order-1 order-lg-2" />
                </div>
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
                        fullWidth
                        label="Ir"
                        onClick={() =>
                            history.push(
                                '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                            )
                        }
                        type="submit"
                        variant="success"
                        size="xs"
                        disabled
                    />
                </Col>
            </Dropdown>

            {/* Finalizada */}
            <Dropdown
                title="Mi familia mi soporte (Finalizada)"
                isOpenByDefault={false}
                className="mb-3"
                headerChildren={() => <div className="app-font-19 font-weight-500">Finalizada </div>}
                color={theme.bootstrap.info}
            >
                <div className="d-flex justify-content-between justify-content-center align-items-center flex-column flex-lg-row mb-3">
                    <h1 className="text-gray-500 font-weight-bold app-font-16 order-2 order-lg-1">
                        Notas. Large title test Large title test Large title test
                    </h1>
                    <AvatarGroup avatars={avatars} className="align-self-end mb-3 mb-lg-0 order-1 order-lg-2" />
                </div>
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
                        fullWidth
                        label="Ir"
                        onClick={() =>
                            history.push(
                                '/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video',
                            )
                        }
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
