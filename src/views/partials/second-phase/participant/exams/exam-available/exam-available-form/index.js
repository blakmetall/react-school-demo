import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { Button } from '../../../../../../../components';
import QuestionExample from './question-example';

const ExamAvailableForm = () => {
    return (
        <Form className="bg-white px-0 px-lg-5">
            <Row className=" d-flex bg-white p-3 m-0">
                <Col className="col-12 d-flex flex-column flex-lg-row justify-content-lg-between  mb-4">
                    <div className="app-font-16 font-weight-600 text-gray-500 mb-3">Exámen “Investigación de Fé”</div>
                    <div className="app-font-16  text-gray-500">Lunes, 13/05/2020, 12:00 pm - Lunes, 13/05/2020, 2:00 pm</div>
                </Col>

                <Col className="col-12 app-font-14 text-gray-500 m-0 mb-4">
                    lorem large text testing, lorem large text testing lorem large text testing, lorem large text testing lorem
                    large text testing, lorem large text testing lorem large text testing, lorem large text testing lorem large
                    text testing, lorem large text testing ? lorem large text testing, lorem large text testing lorem large text
                    testing, lorem large text testing lorem large text testing, lorem large text testing lorem large text testing,
                    lorem large text testing lorem large text testing, lorem large text testing ?
                </Col>

                <div className="col-12 col-lg-9">
                    <QuestionExample className="mb-3" />
                    <QuestionExample className="mb-3" />
                    <QuestionExample />
                </div>
                <Col className="d-flex align-items-end">
                    <Button
                        label="Finalizar Examen"
                        type="submit"
                        variant="success"
                        fullWidth
                        size="xs"
                        // disabled={!formIsValid()}
                    />
                </Col>
            </Row>
        </Form>
    );
};

export default ExamAvailableForm;
