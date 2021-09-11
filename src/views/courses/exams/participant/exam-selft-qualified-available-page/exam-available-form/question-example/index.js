import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Form } from 'react-bootstrap';
import StyledContainer from './styled';

const QuestionExample = ({ className }) => {
    return (
        <StyledContainer className={`p-3 ${className}`}>
            {/* questions */}
            <Col className="mb-4">
                <Row className="justify-content-between align-items-start mb-3 ">
                    <div className="app-font-16 text-gray-500 font-weight-600 col-10 p-0 order-2 order-lg-0">
                        ¿Qué es la fé, lorem large text testing, lorem large text testing lorem large text testing, lorem large
                        text testing lorem large text testing, lorem large text testing lorem large text testing, lorem large text
                        testing lorem large text testing, lorem large text testing ?
                    </div>
                </Row>
            </Col>

            {/* questions checkboxs */}
            <Col>
                <Row className="flex-nowrap mb-3">
                    <div>
                        <Form.Check custom label="" type="radio" name="question" className="mr-3" id={1} checked />
                    </div>
                    <p className="app-font-14 text-gray-500 ">
                        Pregunta 1, lorem large text testing, lorem large text testing, , lorem large text testing, lorem large
                    </p>
                </Row>

                <Row className="align-items-center flex-nowrap mb-3">
                    <Form.Check custom label="" type="radio" name="question" className="mr-3" id={2} />
                    <p className="app-font-14 text-gray-500">Pregunta 2, lorem large text testing, lorem large text testing</p>
                </Row>

                <Row className="align-items-center flex-nowrap mb-3">
                    <Form.Check custom label="" type="radio" name="question" className="mr-3" id={3} />
                    <p className="app-font-14 text-gray-500">Pregunta 3, lorem large text testing, lorem large text testing</p>
                </Row>
            </Col>
        </StyledContainer>
    );
};

QuestionExample.propTypes = {
    className: PropTypes.string,
};

QuestionExample.defaultProps = {
    className: '',
};

export default QuestionExample;
