import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Textarea, Avatar, Input, FileInput, Button, ScrollContent } from '../../../../../../../components';
import FileItem from '../file-item';

const FeedbackAndRating = () => {
    return (
        <Form>
            <Row>
                <Col className="col-12">
                    <h2 className="app-font-16 font-weight-600 text-gray-500 mb-3">Asunto</h2>
                    <h3 className="app-font-16 text-gray-500  mb-4">Tarea de investigación</h3>
                </Col>
                {/* mid layout */}
                <Col className="col-12 col-lg-6">
                    <h2 className="app-font-14 font-weight-500 text-gray-500 mb-3">Descripción</h2>
                    <h3 className="app-font-14 text-gray-500 mb-4">
                        <ScrollContent className="p-3 rounded-15" height="144.5px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nobis doloribus, modi veniam
                            aperiam, dignissimos sed nam qui dicta illo id iste beatae quam aliquid reprehenderit architecto fugit
                            ipsum.Eius possimus quam, eos magni excepturi nostrum modi voluptatem porro nemo quibusdam deserunt
                            recusandae perspiciatis, fugit odio, provident eaque quas at tenetur? Delectus placeat dolore
                            explicabo adipisci minus, facere magnam.
                        </ScrollContent>
                    </h3>

                    {/* Files uploaded list - todo component */}
                    <h2 className="app-font-14 font-weight-500 text-gray-500 mb-3">Archivos</h2>
                    <Col className="col-12 p-0 mb-4 mb-lg-0">
                        <ScrollContent height="144.5px" className="rounded-15 p-3">
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
                        </ScrollContent>
                    </Col>
                </Col>

                {/* mid layout */}
                <Col>
                    {/* textarea */}
                    <Textarea
                        label="Retroalimentación (opcional)"
                        value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sit placeat est atque nam
                                adipisci repellat ducimus, cumque saepe recusandae in amet sint fugit accusamus dicta doloribus,
                                "
                        rows={7}
                        required
                    />

                    {/* Raiting */}
                    <h1 className="app-font-14 text-app-gray app-font-14 font-weight-500">Nota*.</h1>
                    <div className="d-flex align-items-center">
                        <Avatar size="small" label="Lorem Participant Large Full Name" className="mb-4" />
                        <Col className="col-3 col-md-4 col-lg-3 ml-auto">
                            <Input value="99" maxLength="2" type="number" required />
                        </Col>
                        <h2 className="text-gray-500 mb-4">/ 100</h2>
                    </div>

                    {/* fileinput and submit button */}
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <FileInput label="Archivo (opcional)" placeholder=".PDf .JPG .PNG .DOC .MP4" />
                        </Col>
                        <Col className="d-flex align-items-end">
                            <Button
                                label="Guardar"
                                type="submit"
                                variant="success"
                                className="mb-4 "
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

export default FeedbackAndRating;
