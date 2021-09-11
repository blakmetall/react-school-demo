import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Textarea, ScrollContent, Button } from '../../../../../../../components';
import FilesList from '../files-list';
import QualificationItemList from './qualification-item';

const TutoringTeamTaskVisualizer = () => {
    return (
        <Form>
            <h2 className="app-font-14 font-weight-500 text-gray-500 mb-2">Asunto.</h2>
            <h3 className="app-font-14 text-gray-500 font-weight-600 mb-4">Tarea de investigación.</h3>

            <Row>
                <Col className="col-12 col-lg-6">
                    <h2 className="app-font-14 font-weight-500 text-gray-500 mb-2">Descripción.</h2>
                    {/* description */}
                    <ScrollContent maxHeight="200px" className="rounded-15 p-3 mb-4">
                        <h3 className="app-font-14 text-gray-500 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            <br />
                            <br />
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                        </h3>
                    </ScrollContent>

                    {/* feedback */}
                    <Textarea label="Retroalimentación (opcional)" rows={8} className="flex-grow-1" />
                </Col>

                {/* files */}
                <Col>
                    {/* Files uploaded list - todo component */}
                    <div className="mb-4">
                        <h1 className="app-font-14 text-app-gray app-font-14 font-weight-500 mb-2">Archivos.</h1>
                        <ScrollContent height="200px" className="rounded-15 p-3">
                            <FilesList className="mb-3" taskName="Tarea 1." />
                            <FilesList taskName="Tarea 8 Lorem test Large text." className="mb-3" />
                        </ScrollContent>
                    </div>

                    {/* raiting participants list */}
                    <div className="mb-4">
                        <h1 className="app-font-14 text-app-gray app-font-14 font-weight-500 mb-2">Notas.</h1>
                        <ScrollContent height="190px" className="rounded-15 p-3">
                            <QualificationItemList />
                            <QualificationItemList />
                            <QualificationItemList />
                            <QualificationItemList />
                            <QualificationItemList />
                        </ScrollContent>
                    </div>

                    {/* submit button */}
                    <Row>
                        <Col className="d-flex align-items-end">
                            <Button
                                label="Guardar"
                                type="submit"
                                variant="success"
                                fullWidth
                                size="xs"
                                // disabled={!formIsValid()}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export default TutoringTeamTaskVisualizer;
