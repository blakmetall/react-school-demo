import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { Input, Textarea, FileInput, Button } from '../../../../../../../components';

const FormUpTask = () => {
    return (
        <Form>
            <Row>
                <Col className="col-12">
                    <Input label="Título" value="Investigación de Fé" required />
                </Col>
                <Col className="col-12 ">
                    {/* estas alerts solo se ocupan una vez en todo el sistema - seria bueno quitarlas y mantener todo estandarizado */}
                    <Textarea
                        label="Descripción:"
                        value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sit placeat est atque nam
                                adipisci repellat ducimus, cumque saepe recusandae in amet sint fugit accusamus dicta doloribus,
                                quam tempore ipsa.Officiis repellendus eligendi cum reprehenderit, aperiam totam voluptatem minima
                                iure nisi quaerat, natus quod iste adipisci rerum molestiae sunt quasi qui magni, doloremque enim
                                nam dignissimos! Commodi similique ducimus quis?"
                        rows={11}
                        required
                    />
                </Col>
            </Row>
            <Row className="align-items-end">
                <Col className="col-12 col-lg-6">
                    <FileInput label="Archivo (opcional)" placeholder=".PDf .JPG .PNG .DOC .MP4" />
                </Col>
                <Col>
                    <Button
                        label="Guardar"
                        type="submit"
                        variant="success"
                        className="mb-4 "
                        fullWidth
                        size="xs"
                        // disabled={!formIsValid()}
                    />
                </Col>
            </Row>
        </Form>
    );
};

export default FormUpTask;
