import React from 'react';
import { Form, Col, Row, Button as IconButton } from 'react-bootstrap';
import { Button, Datetimepicker, FileInput, Input, ScrollContent, Textarea } from '../../../../../../components';
import { EditIcon, DeleteIcon } from '../../../../../../components/icons';
import theme from '../../../../../../theme';
import FileItem from '../file-item';

const HeaderTaskVisualizer = () => {
    return (
        <Form>
            {/* icons section */}
            <div className="d-flex justify-content-end mb-3">
                <IconButton variant="" className="p-0 mr-2">
                    <EditIcon size="xs" color={theme.bootstrap.appBlue4} />
                </IconButton>
                <IconButton variant="" className="p-0">
                    <DeleteIcon size="xs" color={theme.bootstrap.appBlue4} />
                </IconButton>
            </div>

            <Row>
                {/* left side layout */}
                <Col className="col-12 col-lg-9">
                    <Row className=" align-items-end">
                        {/* title  */}
                        <Col className="col-12 col-lg-6">
                            <Input label="Título" value="Investigación de Fé" required />
                        </Col>
                        {/* datepicker */}
                        <Col className="col-12 col-lg-6">
                            <Datetimepicker label="Fecha de inicio" className="pb-2" required />
                        </Col>
                    </Row>
                    <Col className="col-12 p-0">
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
                </Col>

                {/*  rigth side layout */}
                <Col className="col-12 col-lg-3">
                    <Row className="align-items-end">
                        <Col className="col-12">
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
                        {/* Files uploaded list - todo component */}
                        <Col className="col-12">
                            <ScrollContent height="200px" className="rounded-15 p-3">
                                <FileItem className="mb-3" taskName="Tarea 1." />
                                <FileItem className="mb-3" taskName="Tarea 3." />
                                <FileItem className="mb-3" taskName="Tarea 4." />
                                <FileItem className="mb-3" taskName="Tarea 5." />
                                <FileItem className="mb-3" taskName="Tarea 6." />
                                <FileItem className="mb-3" taskName="Tarea 7." />
                                <FileItem
                                    className="mb-3"
                                    taskName="Tarea 2 Lorem test Large text. Lorem test Large text. Lorem test Large text. Lorem test Large text."
                                />
                                <FileItem taskName="Tarea 8 Lorem test Large text." />
                            </ScrollContent>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export default HeaderTaskVisualizer;
