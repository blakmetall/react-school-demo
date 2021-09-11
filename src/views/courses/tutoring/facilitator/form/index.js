import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { Button, Input, Datetimepicker, Textarea } from '../../../../../components';
import AvatarsCheckItem from './AvatarsCheckItem';
import { StyledAvatarsWrapper } from './styled';
// import { avatars } from '../../../test-data';

const TutoringForm = () => {
    return (
        <Form noValidate>
            <Row>
                {/* mid layout */}
                <Col className="col-12 col-lg-6">
                    {/* inputs - title & link  */}
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <Input label="Título" required />
                        </Col>
                        <Col className="col-12 col-lg-6">
                            <Input label="Link de reunión (opcional)" required />
                        </Col>
                    </Row>
                    {/* datepicker */}
                    <Col className="p-0">
                        <Datetimepicker label="Fecha de limite" className="mb-4" required />
                    </Col>

                    {/* label for avatars */}
                    <div className="d-flex justify-content-between mb-3">
                        <h2 className="app-font-16 text-gray-500">Participantes</h2>

                        <div className="custom-control custom-checkbox mr-1">
                            <input type="checkbox" className="custom-control-input" id="select-all" />
                            <label className="custom-control-label app-font-16 text-gray-500 pt-1" htmlFor="select-all">
                                Seleccionar todos
                            </label>
                        </div>
                    </div>

                    {/* avatars and checkboxs - todo: component  */}
                    <StyledAvatarsWrapper className="mb-3 mb-lg-0 p-3 rounded-15">
                        <AvatarsCheckItem className="mb-3 mr-1 p-0" id="1" checked />
                        <AvatarsCheckItem className="mb-3 mr-1 p-0" id="2" />
                        <AvatarsCheckItem className="mb-3 mr-1  p-0" id="3" />
                        <AvatarsCheckItem className="mb-3 mr-1  p-0" id="4" checked />
                        <AvatarsCheckItem className="mb-3 mr-1  p-0" id="5" />
                        <AvatarsCheckItem className="mb-3 mr-1  p-0" id="6" checked />
                        <AvatarsCheckItem className="mb-3 p-0" id="7" />
                        <AvatarsCheckItem className="mb-3 p-0" id="8" />
                    </StyledAvatarsWrapper>
                </Col>

                {/* mid layout */}
                <Col className="col-12 col-lg-6 d-flex flex-column">
                    <Textarea label="Notas" rows={16} required className="flex-grow-1" />
                    <Button
                        fullWidth
                        label="Enviar invitación"
                        type="submit"
                        variant="success"
                        size="xs"
                        // disabled={!formIsValid()}
                    />
                </Col>
            </Row>
        </Form>
    );
};

export default TutoringForm;
