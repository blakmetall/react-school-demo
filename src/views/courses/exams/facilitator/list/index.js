import React from 'react';
import { Link } from 'react-router-dom';
import { Button as IconButton, Col } from 'react-bootstrap';
import { Dropdown } from '../../../../../components';
import { DeleteIcon, EditIcon } from '../../../../../components/icons';
import { StyledFooter, StyledQualificationWrapper } from './styled';
import theme from '../../../../../theme';

const ExamsList = () => {
    return (
        <>
            <Dropdown
                title="Investigación de Fé"
                className="mb-3 flex-column text-primary"
                headerChildren={() => (
                    <div className="d-flex align-items-center flex-nowrap justify-content-between">
                        <div className="app-font-19 font-weight-500 mr-0 mr-lg-3">viernes, 10/05/20, 10:44 am</div>
                        <div className="d-flex align-items-center">
                            <IconButton variant="" className="mr-2 p-0">
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
                    {/* todo: definir la vista para el facilitador del examen en sus dos estados */}
                    <Link to="/curso/:courseId/facilitator/exams/examId" className="app-font-14 font-weight-600 ml-auto">
                        Ver examen...
                    </Link>
                </Col>
            </Dropdown>

            {/* Asesoria Finalizada */}
            <Dropdown
                title="Investigación de Fé"
                className="mb-3 flex-column"
                color={theme.bootstrap.info}
                headerChildren={() => (
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="app-font-19 font-weight-500 mr-0 mr-lg-3">Finalizado</div>
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
                        {/* todo: definir la vista para el facilitador del examen en sus dos estados */}
                        <Link to="/curso/:courseId/facilitator/exams/examId" className="app-font-14 font-weight-600">
                            <p>Ver examen...</p>
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

export default ExamsList;
