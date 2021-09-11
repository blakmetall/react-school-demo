import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Form } from 'react-bootstrap';
// import theme from '../../../../../../../../theme';
import { StyledContainer, StyledDangerFormCheckWrapper, StyledSuccessFormCheckWrapper } from './styled';
import { ArrowCheck, CancelIcon } from '../../../../../../../../components/icons';
import theme from '../../../../../../../../theme';

const QuestionExample = ({ className }) => {
    return (
        <StyledContainer className={`p-3 ${className}`}>
            {/* questions */}
            <Col className="mb-4">
                <Row className="justify-content-between align-items-start mb-3 ">
                    <div className="app-font-16 text-gray-500 font-weight-600 col-10 p-0 order-2 order-lg-0">
                        ¿Qué es la fé, lorem large text testing, lorem large text testing lorem large text testing, lorem large
                    </div>
                </Row>
            </Col>

            {/* questions checkboxs */}
            <Col>
                <Row className="flex-nowrap mb-3">
                    <StyledDangerFormCheckWrapper>
                        <Form.Check custom label="" type="radio" name="" className="mr-3" id="1a" checked />
                    </StyledDangerFormCheckWrapper>
                    <p className="app-font-14 text-primary">
                        Pregunta 1, lorem large text testing, lorem large text testing, , lorem large text testing, lorem large
                    </p>
                    <Col className="d-flex justify-content-end">
                        <CancelIcon size="xs" color={theme.bootstrap.primary} />
                    </Col>
                </Row>

                <Row className="flex-nowrap mb-3">
                    <StyledSuccessFormCheckWrapper>
                        <Form.Check custom label="" type="radio" name="" className="mr-3" id="2a" checked />
                    </StyledSuccessFormCheckWrapper>
                    <p className="app-font-14 text-app-green">Pregunta 2, lorem large text testing, lorem large text testing</p>
                    <Col className="d-flex justify-content-end">
                        <ArrowCheck size="xs" color={theme.bootstrap.appGreen} />
                    </Col>
                </Row>

                <Row className="flex-nowrap mb-3">
                    <Form.Check custom label="" type="radio" name="" className="mr-3" id="3a" disabled />
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
