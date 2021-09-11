import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Button, Datetimepicker, Input, Textarea } from '../../../../../../components';

const PresentialClassesForm = () => {
    return (
        <Form noValidate>
            <Row>
                {/* title and link */}
                <Col className="col-12 col-lg-6">
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <Input label="Título" required />
                        </Col>

                        <Col className="col-12 col-lg-6">
                            <Input label="Link de reunión" required />
                        </Col>
                    </Row>
                    {/* datepicker */}
                    <Row>
                        <Col>
                            <Datetimepicker label="Fecha de inicio" className="mb-4" required />
                        </Col>
                    </Row>
                </Col>
                {/* text area */}
                <Col className="col-12 col-lg-6">
                    <Textarea label="Descripción:" rows={5} required />
                </Col>
            </Row>
            {/* buttons */}
            <Row className="justify-content-end">
                <Col className="col-12 col-lg-3 align-self-end">
                    <Button fullWidth label="Cancelar" type="submit" variant="secondary" size="xs" className="mb-3 mb-lg-0" />
                </Col>
                <Col className="col-12 col-lg-3 ">
                    <Button fullWidth label="Subir" type="submit" variant="success" size="xs" className="mb-3 mb-lg-0" />
                </Col>
            </Row>
        </Form>
    );
};

export default PresentialClassesForm;
