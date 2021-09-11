import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Input } from '../../../../../../../components';
import { AddIcon, DeleteIcon } from '../../../../../../../components/icons'; 
import theme from '../../../../../../../theme';
import StyledContainer from './styled';

const AddQuestion = ({ className }) => {
    return (
        <StyledContainer className={`p-3 ${className}`}>
            <Col className="p-0">
                {/* question and plus icon section */}
                <Row className="justify-content-end justify-content-lg-between mx-0 mb-2">
                    <Col className="col-12 col-lg-10 p-0 order-1 order-lg-0">
                        <Input label="Pregunta" required />
                    </Col>

                    <Button variant="" className="p-0 ml-4 order-0 order-lg-1">
                        <AddIcon color={theme.bootstrap.appBlue4} size="xs" />
                    </Button>
                </Row>

                {/* answers section */}
                <Col className="col-12 col-lg-10">
                    {/* input answer row */}
                    <Row className="align-items-center align-content-center ">
                        <Form.Check custom label="" type="radio" id={11} name="answers" className="custom-radio-green mb-4" />
                        <Col>
                            <Input value="Respuesta" />
                        </Col>
                        <Col className="col-2 col-lg-1 d-flex justify-content-end pr-0 mr-0 mb-4">
                            <Button variant="" className="p-0">
                                <DeleteIcon color={theme.bootstrap.primary} size="xs" />
                            </Button>
                        </Col>
                    </Row>
                    {/* input answer row */}
                    <Row className="align-items-center ">
                        <Form.Check custom label="" type="radio" id={21} name="answers" className="custom-radio-green mb-4" />
                        <Col>
                            <Input value="Respuesta" />
                        </Col>
                        <Col className="col-2 col-lg-1 d-flex justify-content-end pr-0 mr-0 mb-4">
                            <Button variant="" className="p-0">
                                <DeleteIcon color={theme.bootstrap.primary} size="xs" />
                            </Button>
                        </Col>
                    </Row>
                    {/* input answer row */}
                    <Row className="align-items-center ">
                        <Form.Check custom label="" type="radio" id={31} name="answers" className="custom-radio-green mb-4" />
                        <Col>
                            <Input value="Respuesta" />
                        </Col>
                        <Col className="col-2 col-lg-1 d-flex justify-content-end pr-0 mr-0 mb-4">
                            <Button variant="" className="p-0">
                                <AddIcon color={theme.bootstrap.appBlue4} size="xs" />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </StyledContainer>
    );
};

AddQuestion.propTypes = {
    className: PropTypes.string,
};

AddQuestion.defaultProps = {
    className: '',
};

export default AddQuestion;
