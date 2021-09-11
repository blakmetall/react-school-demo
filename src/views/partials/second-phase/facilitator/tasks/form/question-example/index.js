import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { EditIcon, DeleteIcon } from '../../../../../../../components/icons';
import theme from '../../../../../../../theme';
import StyledContainer from './styled';

const QuestionExample = ({ className }) => {
    return (
        <StyledContainer className={`p-3 ${className}`}>
            {/* question and addIcon */}
            <Col className="mb-4">
                <Row className="justify-content-between align-items-start mb-3 ">
                    <h1 className="app-font-16 text-gray-500 font-weight-600 col-10 p-0 order-2 order-lg-0">
                        ¿Qué es la fé, lorem large text testing, lorem large text testing lorem large text testing, lorem large
                        text testing lorem large text testing, lorem large text testing lorem large text testing, lorem large text
                        testing lorem large text testing, lorem large text testing ?
                    </h1>
                    <Col className="col-12 col-lg-2 d-flex justify-content-end order-0 order-lg-1 p-0 mb-3 mb-lg-0">
                        <Button variant="" className="p-0 ml-3">
                            <EditIcon size="xs" color={theme.bootstrap.appBlue4} />
                        </Button>
                        <Button variant="" className="p-0 ml-3 mr-1">
                            <DeleteIcon size="xs" color={theme.bootstrap.appBlue4} />
                        </Button>
                    </Col>
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
                        text testing, , lorem large text testing, lorem large text testing orem large text testing, lorem large
                        text testing, , lorem large text testing, lorem large text testing, , lorem large text testing, lorem
                        large text testing orem large text testing, lorem large text testing, , lorem large text testing, lorem
                        large text testing, , lorem large text testing, lorem large text testing
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
