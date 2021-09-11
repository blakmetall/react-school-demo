import React from 'react';
import { Link } from 'react-router-dom';
import { Button as IconButton, Col } from 'react-bootstrap';
import { Dropdown } from '../../../../../../components';
import { DeleteIcon, EditIcon } from '../../../../../../components/icons';
import { StyledFooter, StyledQualificationWrapper } from './styled';

const TasksList = () => {
    /**
     * Los items de la lista en el pdf son distintos. pero lo mejor es
     * mantener un estandar en el diseño y reutilizar componentes.
     * */

    return (
        <>
            <Dropdown
                title="Investigación de Fé"
                className="mb-3 flex-column text-primary"
                headerChildren={() => (
                    <div className="d-flex align-items-center flex-nowrap justify-content-between">
                        <h1 className="app-font-19 font-weight-500">viernes, 10/05/20, 10:44 am</h1>
                        <div className="d-flex align-items-center">
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
                <Col>
                    <Col className="col-12 p-0 mb-4">
                        <p className="text-gray-500 ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                            augue duis dolore te feugait nulla facilisi.
                        </p>
                    </Col>
                    <Link to="/curso/:courseId/facilitator/taskId" className="app-font-14 font-weight-600 ml-auto">
                        Ver tarea...
                    </Link>
                </Col>
            </Dropdown>

            {/* Examen Finalizada */}
            <Dropdown
                title="Investigación de Fé"
                className="mb-3 flex-column"
                headerChildren={() => (
                    <div className="d-flex align-items-center flex-column flex-lg-row">
                        <h1 className="app-font-19 font-weight-500 mr-0 mr-lg-3 mb-2 mb-lg-0">Finalizado</h1>
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
                <Col>
                    <Col className="col-12 p-0 mb-4">
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                            augue duis dolore te feugait nulla facilisi.
                        </p>
                    </Col>
                    <StyledFooter>
                        <Link to="/curso/:courseId/facilitator/taskId" className="app-font-14 font-weight-600">
                            <p>Ver tarea...</p>
                        </Link>
                        <StyledQualificationWrapper className="app-font-14 font-weight-600 text-gray-500 rounded-15 p-3">
                            8.0/100
                        </StyledQualificationWrapper>
                    </StyledFooter>
                </Col>
            </Dropdown>
        </>
    );
};

export default TasksList;
