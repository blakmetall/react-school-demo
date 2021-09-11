import React from 'react';
import { Col } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import { Dropdown, Avatar, ScrollContent } from '../../../../../components';

const FacilitatorTeamTasksList = () => {
    const { courseId } = useParams();

    return (
        <>
            <Dropdown
                title="Investigación de Fé"
                className="mb-3 flex-column text-primary"
                headerChildren={() => (
                    <div className="d-flex align-items-center flex-nowrap">
                        <h2 className="app-font-16 app-font-19 font-weight-500 title">viernes, 10/05/20, 10:44 am</h2>
                    </div>
                )}
            >
                <div>
                    <div className="d-flex flex-column flex-lg-row">
                        <Col className="col-12 col-lg-9 p-0 mb-4">
                            <p className="text-gray-500 mb-3 pr-0 pr-lg-4 ">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum
                                iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                                zzril delenit augue duis dolore te feugait nulla facilisi.
                            </p>
                            <Link
                                to={`/curso/${courseId}/tarea/:taskId/retroalimentacion`}
                                className="app-font-14  font-weight-600 ml-auto text-app-blue-2"
                            >
                                Ver tarea...
                            </Link>
                        </Col>
                        <Col className="col-12 col-lg-3 p-0">
                            <h2 className="mb-2 app-font-14 text-gray-500">Equipo</h2>
                            <ScrollContent maxHeight="150px" className="p-3 rounded-15">
                                <div className="d-flex flex-column">
                                    <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                                    <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                                    <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                                    <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                                    <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                                </div>
                            </ScrollContent>
                        </Col>
                    </div>

                    <Col className="col-12" />
                </div>
            </Dropdown>
        </>
    );
};

export default FacilitatorTeamTasksList;
