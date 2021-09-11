import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Input, Textarea, Datetimepicker, Button, FileInput, RenderIf } from '../../../../../../components';
import AddQuestion from './add-questions';
import QuestionExample from './question-example';

const ExamsFacilitatorForm = () => {
    const [selfQualifiedTaskisVisible, setSelfQualifiedTaskIsVisible] = useState(false);

    return (
        <Form>
            <Row>
                {/* 1st column */}
                <Col className="col-12 col-lg-4">
                    {/* title */}
                    <Col>
                        <Input label="Título" required />
                    </Col>
                    {/* datepicker */}
                    <Col>
                        <Textarea label="Notas" rows={7} required />
                    </Col>
                    {/* textarea */}
                </Col>

                {/* 2nd column */}
                <Col className="col-12 col-lg-4">
                    {/* date */}
                    <Col>
                        <Datetimepicker label="Fecha de limite" className="mb-5" required />
                    </Col>
                    {/* date */}
                    <Col>
                        <Datetimepicker label="Fecha de limite" className="mb-5" required />
                    </Col>
                    {/* input */}
                    <Col>
                        <Input label="Link ( opcional )" />
                    </Col>
                </Col>

                {/* 3rd column */}
                <Col className="col-12 col-lg-4">
                    <Row className="m-0 h-100">
                        {/* file input */}
                        <Col>
                            <FileInput label="Archivo (opcional)" placeholder=".PDf .JPG .PNG .DOC .MP4" />
                        </Col>
                        {/* show Self-Qualified Task */}
                        <Col className="col-12">
                            <Button
                                label="Examen Autocalificado"
                                variant="success"
                                className="mb-3"
                                fullWidth
                                size="xs"
                                onClick={() => setSelfQualifiedTaskIsVisible(!selfQualifiedTaskisVisible)}
                                // disabled={!formIsValid()}
                            />
                        </Col>
                        {/* cancel */}
                        <Col className="d-flex align-self-center col-12 col-lg-6">
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
                        <Col className="d-flex align-self-center col-12 col-lg-6">
                            <Button
                                label="Subir"
                                variant="success"
                                fullWidth
                                size="xs"
                                // disabled={!formIsValid()}
                            />
                        </Col>
                    </Row>
                </Col>

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

export default ExamsFacilitatorForm;
