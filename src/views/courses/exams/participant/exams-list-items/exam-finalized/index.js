import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button as IconButton, Col } from 'react-bootstrap';
import { Dropdown } from '../../../../../../components';
import { DeleteIcon, EditIcon } from '../../../../../../components/icons';
import theme from '../../../../../../theme';

const ExamFinalized = () => {
    const { courseId } = useParams(); 

    return (
        <>
            <Dropdown
                title="Investigación de Fé"
                className="mb-3 flex-column text-primary"
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
                        <p className="text-gray-500 ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                            augue duis dolore te feugait nulla facilisi.
                        </p>
                    </Col>
                    <Link to={`/curso/${courseId}/examenes/:examId/retroalimentacion`} className="app-font-14 font-weight-600 ml-auto">
                        Ver examen...
                    </Link>
                </Col>
            </Dropdown>
        </>
    );
};

export default ExamFinalized;
