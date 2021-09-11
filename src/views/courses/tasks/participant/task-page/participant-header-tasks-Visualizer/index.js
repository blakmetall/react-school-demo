import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import FileItem from '../file-item';
import { StyledFilesWrapper } from '../styled';

const ParticipantHeaderTaskVisualizer = () => {
    return (
        <Form>
            <Row>
                {/* left side layout */}
                <Col className="col-12 ">
                    <Row className="justify-content-between align-items-center mx-0 mb-3">
                        <h1 className="app-font-18 text-gray-500 font-weight-600 mb-3">Lorem Title Task</h1>
                        <h1 className="app-font-18 text-gray-500 mb-3">Viernes, 10/05/2020, 10:44 am</h1>
                    </Row>
                    <Col className="col-12 p-0">
                        <h1 className="mb-3 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sit placeat est atque nam
                            adipisci repellat ducimus, cumque saepe recusandae in amet sint fugit accusamus dicta doloribus, quam
                            tempore ipsa.Officiis repellendus eligendi cum reprehenderit, aperiam totam voluptatem minima iure
                            nisi quaerat, natus quod iste adipisci rerum molestiae sunt quasi qui magni, doloremque enim nam
                            dignissimos! Commodi similique ducimus quis?
                        </h1>
                    </Col>
                </Col>
            </Row>

            <Row>
                {/* Files uploaded list - todo component */}
                <Col className="col-12">
                    <StyledFilesWrapper className="d-flex flex-column rounded-15 p-3">
                        <FileItem className="mb-3" taskName="Tarea 1." />
                        <FileItem className="mb-3" taskName="Tarea 3." />
                        <FileItem className="mb-3" taskName="Tarea 4." />
                        <FileItem className="mb-3" taskName="Tarea 5." />
                        <FileItem className="mb-3" taskName="Tarea 6." />
                        <FileItem className="mb-3" taskName="Tarea 7." />
                        <FileItem
                            className="mb-3"
                            taskName="Tarea 2 Lorem test Large text. Lorem test Large text. Lorem test Large text. Lorem test Large text."
                        />
                        <FileItem taskName="Tarea 8 Lorem test Large text." />
                    </StyledFilesWrapper>
                </Col>
            </Row>
        </Form>
    );
};

export default ParticipantHeaderTaskVisualizer;
