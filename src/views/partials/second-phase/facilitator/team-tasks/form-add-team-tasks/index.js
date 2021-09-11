import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Input, Datetimepicker, Textarea, Button, FileInput } from '../../../../../../components';
// import AvatarsTeamGroups from './avatars-team-groups';
import AvatarTable from '../../../../svg/group-table.svg';

const AddTeamTasksForm = () => {
    const history = useHistory();
    return (
        <Form>
            <Row>
                {/* inputs and textareas */}
                <Col className="col-12 col-lg-6">
                    <Row>
                        {/* title */}
                        <Col className="col-12 col-lg-6">
                            <Input label="Título" required />
                        </Col>
                        {/* datepicker */}
                        <Col>
                            <Datetimepicker label="Fecha de limite" required />
                        </Col>
                    </Row>

                    {/* textarea */}
                    <Col className="p-0">
                        <Textarea label="Notas" rows={11} required />
                    </Col>
                </Col>
                {/* avatars */}
                <Col className="col-12 col-lg-6">
                    {/* <AvatarsTeamGroups /> */}
                    <a href="#/" onClick={() => history.push('/curso/:courseId/facilitator/team-tasks-tutoring')}>
                        <img src={AvatarTable} alt="lorem" width="90%" />
                    </a>
                </Col>

                {/* buttons & fileinput section  */}
                <Col className="col-12 d-flex p-0">
                    {/* file input */}
                    <Col className="col-12 col-lg-6">
                        <FileInput label="Archivo (opcional)" placeholder=".PDf .JPG .PNG .DOC .MP4" />
                    </Col>

                    {/* cancel */}
                    <Col className="d-flex justify-items-between align-items-end pb-0 pb-lg-4">
                        <Col className="col-12 col-lg-6 pl-0">
                            <Button
                                label="Cancelar"
                                type="submit"
                                variant="secondary"
                                fullWidth
                                size="xs"
                                className="mb-3 mb-lg-0"
                                // disabled={!formIsValid()}
                            />
                        </Col>
                        {/* upload */}
                        <Col className="col-12 col-lg-6 ">
                            <Button
                                label="Subir"
                                type="submit"
                                variant="success"
                                fullWidth
                                size="xs"
                                // disabled={!formIsValid()}
                            />
                        </Col>
                    </Col>
                </Col>
            </Row>
        </Form>
    );
};

export default AddTeamTasksForm;
