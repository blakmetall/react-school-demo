/* eslint-disable */
import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import validator from 'validator';
import { Input, FileInput, Button } from '../../../../../../components';

const AddNewClassForm = () => {
    const [title, setTitle] = useState('');
    const [videoFile, setFileVideoFile] = useState(undefined);
    const [errorVideoFile, setErrorVideoFile] = useState('The file is required');

    // Validations

    const handleFileChange = files => {
        const currentFile = files && files.length ? files[0] : undefined;
        setFileVideoFile(currentFile);

        if (currentFile) {
            setErrorVideoFile();
        } else {
            setErrorVideoFile('The file is required');
        }
    };

    const formIsValid = () => {
        if (validator.isEmpty(title, { ignore_whitespace: true })) {
            return false;
        }
        if (videoFile === undefined) {
            return null;
        }
        return true;
    };

    return (
        <div>
            <Form>
                <Form.Row>
                    {/* title */}
                    <Col className="col-12 col-lg-6 p-0">
                        <Row className="d-flex align-items-center m-0">
                            <Col className="col-12 col-lg-6 px-2">
                                <Input label="Título." value={title} onChange={e => setTitle(e.target.value)} required />
                            </Col>

                            {/* fileselector (video) */}
                            <Col className="col-12 col-lg-6 px-2">
                                <FileInput
                                    label="Subir video ( 30 min. máx. )"
                                    placeholder="Seleccionar archivo"
                                    onChange={handleFileChange}
                                    // error={errorVideoFile}
                                />
                            </Col>
                        </Row>
                    </Col>

                    {/* buttons cancel - subir */}
                    <Col className="col-12 col-lg-3 d-flex align-items-center mb-4 mb-lg-0 px-2">
                        <Button fullWidth label="Cancelar" type="submit" size="xs" variant="secondary" />
                    </Col>
                    <Col className="col-12 col-lg-3 d-flex align-items-center px-2">
                        <Button fullWidth label="Subir" type="submit" size="xs" variant="success" disabled={!formIsValid()} />
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default AddNewClassForm;
