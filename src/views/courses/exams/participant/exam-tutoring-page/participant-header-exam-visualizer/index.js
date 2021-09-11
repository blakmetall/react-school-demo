import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import { ScrollContent } from '../../../../../../components';
import FilesList from '../file-item';

const ParticipantHeaderExamTutoringVisualizer = () => {
    const history = useHistory();

    return (
        <Form>
            <Row>
                {/* left side layout */}
                <Col className="col-12 ">
                    <Row className="justify-content-between align-items-center mx-0 mb-3">
                        <div className="app-font-18 text-gray-500 font-weight-500 mb-3">Examen “Investigación de Fé”</div>
                        <div className="app-font-18 text-gray-500 mb-3">
                            Lunes, 13/05/2020, 12:00 pm - Lunes, 13/05/2020, 2:00 pm
                        </div>
                    </Row>
                    <Col className="col-12 p-0">
                        <div className="mb-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sit placeat est atque nam
                            adipisci repellat ducimus, cumque saepe recusandae in amet sint fugit accusamus dicta doloribus, quam
                            tempore ipsa.Officiis repellendus eligendi cum reprehenderit, aperiam totam voluptatem minima iure
                            nisi quaerat, natus quod iste adipisci rerum molestiae sunt quasi qui magni, doloremque enim nam
                            dignissimos! Commodi similique ducimus quis?
                        </div>
                        <div className="d-flex flex-column flex-lg-row mb-4">
                            <div className=" text-gray-500  mb-2 mb-lg-0 mr-3">Link del examen:</div>

                            <a
                                href="#/"
                                className="text-gray-500 font-weight-600s"
                                onClick={() => history.push('/curso/:courseId/examenes/:examId/examen-auto-calificado/finalizado')}

                            >
                                Ir al examen...
                            </a>
                        </div>
                    </Col>
                </Col>
            </Row>

            <Row>
                {/* Files uploaded list - todo component */}
                <Col className="col-12">
                    <ScrollContent height="200px" className="d-flex flex-column rounded-15 p-3">
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
            </Row>
        </Form>
    );
};

export default ParticipantHeaderExamTutoringVisualizer;
