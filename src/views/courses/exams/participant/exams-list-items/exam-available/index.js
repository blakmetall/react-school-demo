import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { ListItem, Button } from '../../../../../../components';

const ExamAvailable = () => {
    const history = useHistory();
    const { courseId } = useParams();
    
    return (
        <>
            <ListItem className="mb-3 bg-success">
                <Row className="d-flex justify-content-lg-between align-items-center">
                    <Col>
                        <div className="app-font-19 font-weight-500 text-center text-sm-left text-white mb-2 mb-lg-0">
                            Examen - Investigación de Fé
                        </div>
                    </Col>

                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between justify-content-lg-end  col-12 col-lg-8 ">
                        <div className="app-font-19 font-weight-500 text-center text-sm-left text-white mb-2">
                            Lunes, 13/05/2020, 12:00 pm - Lunes, 13/05/2020, 2:00 pm
                        </div>

                        <Col className="col-12 col-sm-2 m-0 p-0 ml-auto ml-lg-4">
                            <Button
                                label="Ir"
                                onClick={() => history.push(`/curso/${courseId}/examenes/:examId/subir`)}
                                size="xs"
                                className="bg-app-blue-3"
                                fullWidth
                            />
                        </Col>
                    </div>
                </Row>
            </ListItem>
        </>
    );
};

export default ExamAvailable;
