import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { ScrollContent } from '../../../../../../components';
import FilesList from '../../../../facilitator/tasks/task/files-list';
import { StyledQualificationWrapper } from '../styled';

const TaskFinalized = () => {
    return (
        <Form>
            <Row className="">
                <Col className="col-12 col-lg-6 mb-4">
                    <div className="app-font-16 font-weight-600 text-gray-500 mb-3">Asunto</div>
                    <div className="app-font-16 text-gray-500">Tarea de investigación</div>
                </Col>
                <Col className="col-12 col-lg-6 mb-4">
                    {/* Raiting */}
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="app-font-14 text-gray-500 font-weight-600 mb-2">Nota</div>
                        <StyledQualificationWrapper className="app-font-14 font-weight-600 text-gray-500 rounded-15 p-3">
                            8.0/100
                        </StyledQualificationWrapper>
                    </div>
                </Col>
                {/* mid layout */}
                <Col className="col-12 col-lg-6">
                    <div className="app-font-14 font-weight-600 text-gray-500 mb-3">Descripción</div>
                    <div className="app-font-14 text-gray-500 mb-4">
                        <ScrollContent className="p-3 rounded-15" height="144.5px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            ipsum.Eius possimus quam, eos magni excepturi nostrum modi voluptatem porro nemo quibusdam deserunt
                            recusandae perspiciatis, fugit odio, provident eaque quas at tenetur? Delectus placeat dolore
                            explicabo adipisci minus, facere magnam.
                        </ScrollContent>
                    </div>
                </Col>

                {/* mid layout */}
                <Col>
                    {/* textarea */}
                    <div className="app-font-14 font-weight-600 text-gray-500 mb-3">Retroalimentación</div>
                    <div className="app-font-14 text-gray-500 mb-4">
                        <ScrollContent className="p-3 rounded-15" height="144.5px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            ipsum.Eius possimus quam, eos magni excepturi nostrum modi voluptatem porro nemo quibusdam deserunt
                            recusandae perspiciatis, fugit odio, provident eaque quas at tenetur? Delectus placeat dolore
                            explicabo adipisci minus, facere magnam.
                        </ScrollContent>
                    </div>
                </Col>
            </Row>

            {/* Files uploaded list - todo component */}
            <div className="app-font-14 font-weight-600 text-gray-500 mb-3">Archivos</div>
            <Col className="col-12 p-0">
                <ScrollContent maxHeight="150px" className="p-3 rounded-15">
                    <FilesList className="mb-3" taskName="Tarea 1." />
                    <FilesList className="mb-3" taskName="Tarea 3." />
                    <FilesList className="mb-3" taskName="Tarea 4." />
                    <FilesList className="mb-3" taskName="Tarea 5." />
                    <FilesList className="mb-3" taskName="Tarea 6." />
                    <FilesList className="mb-3" taskName="Tarea 7." />
                    <FilesList
                        className="mb-3"
                        taskName="Tarea 2 Lorem test Large text. Lorem test Large text. Lorem test Large text. Lorem test Large text."
                    />
                    <FilesList taskName="Tarea 8 Lorem test Large text." />
                </ScrollContent>
            </Col>
        </Form>
    );
};

export default TaskFinalized;
