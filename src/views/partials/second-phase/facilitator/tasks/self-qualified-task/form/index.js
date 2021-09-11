import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Input, Datetimepicker, Textarea, Button } from '../../../../../../../components';
import AddQuestion from './add-questions';
import QuestionExample from './question-example';

const SelfQualifiedTaskForm = () => {
    return (
        <Form>
            <Row>
                <Col className="col-12 col-lg-9">
                    {/* title - datepicker */}
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <Input label="Título." value="" required />
                        </Col>
                        <Col className="col-12 col-lg-6">
                            <Datetimepicker label="Fecha de inicio" required />
                        </Col>
                    </Row>
                    {/* text area */}
                    <Col className="col-12 p-0">
                        <Textarea label="Descripción:" rows={5} required />
                    </Col>

                    {/* example of a question */}
                    <QuestionExample className="mb-3" />

                    {/* add question section */}
                    <AddQuestion className="mb-3 mb-lg-0" />
                </Col>

                {/* Buttons */}
                <Col>
                    <Row className="align-items-end justify-content-end h-100">
                        <Col className="col-12 col-lg-6 p-lg-0 ">
                            <Button
                                fullWidth
                                label="Cancelar"
                                type="submit"
                                variant="secondary"
                                size="xs"
                                className="mb-3 mb-lg-0"
                            />
                        </Col>
                        <Col className="col-12 col-lg-6 px-lg-1">
                            <Button fullWidth label="Subir" type="submit" size="xs" variant="success" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export default SelfQualifiedTaskForm;
