import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Input, Datetimepicker, FileInput, Textarea, Button, RenderIf } from '../../../../../components';
import AddQuestion from './self-qualified-task/question-builder';
import QuestionExample from './self-qualified-task/question-example';

const TasksForm = () => {
    const [selfQualifiedTaskisVisible, setSelfQualifiedTaskIsVisible] = useState(false);

    return (
        <Form>
            <Row>
                {/* Inputs */}
                <Col>
                    <Row>
                        {/* title */}
                        <Col className="col-12 col-lg-6">
                            <Input label="Título" required />
                        </Col>
                        {/* datepicker */}
                        <Col>
                            <Datetimepicker label="Fecha de limite" className="mb-4" required />
                        </Col>
                    </Row>
                    {/* textarea */}
                    <Col className="p-0">
                        <Textarea label="Notas" rows={4} required />
                    </Col>
                </Col>

                {/* buttons */}
                <Col className="col-12 col-lg-4">
                    <Row>
                        {/* file input */}
                        <Col>
                            <FileInput label="Archivo (opcional)" placeholder=".PDf .JPG .PNG .DOC .MP4" />
                        </Col>
                        {/* show Self-Qualified Task */}
                        <Col className="col-12 ">
                            <Button
                                label="Tarea Autocalificada"
                                variant="success"
                                className="mb-3"
                                fullWidth
                                size="xs"
                                onClick={() => setSelfQualifiedTaskIsVisible(!selfQualifiedTaskisVisible)}
                                // disabled={!formIsValid()}
                            />
                        </Col>
                        {/* cancel */}
                        <Col className="col-12 col-lg-6">
                            <Button
                                label="Cancelar"
                                variant="secondary"
                                className="mb-3 mb-lg-0"
                                fullWidth
                                size="xs"
                                // disabled={!formIsValid()}
                            />
                        </Col>
                        {/* upload */}
                        <Col className="col-12 col-lg-6">
                            <Button
                                label="Subir"
                                variant="success"
                                size="xs"
                                fullWidth
                                // disabled={!formIsValid()}
                            />
                        </Col>
                    </Row>
                </Col>

                {/* self quelified task */}
                <RenderIf isTrue={selfQualifiedTaskisVisible}>
                    <Col className="col-12 mt-4">
                        {/* example of a question */}
                        <QuestionExample className="mb-3" />
                        {/* add question section */}
                        <AddQuestion />
                    </Col>
                </RenderIf>
            </Row>
        </Form>
    );
};

export default TasksForm;
