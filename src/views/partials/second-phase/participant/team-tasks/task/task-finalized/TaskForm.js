import React from 'react';
import { Form, Col, Row, Button as IconButton } from 'react-bootstrap';
import { ScrollContent } from '../../../../../../../components';
import { EditIcon, DeleteIcon } from '../../../../../../../components/icons';
import theme from '../../../../../../../theme';
import FilesList from './files-list';

const TaskForm = () => {
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
                <Col className="col-12 ">
                    {/* title and date */}
                    <Row className="align-items-center justify-content-between mx-0 mb-4">
                        <h1 className="app-font-16 text-gray-500 font-weight-600">Lorem Title Task</h1>
                        <h1 className="app-font-16 text-gray-500">Viernes, 10/05/2020, 10:44 am</h1>
                    </Row>
                    {/* description */}
                    <Col className="col-12 p-0">
                        <h1 className="mb-3 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sit placeat est atque nam
                            adipisci repellat ducimus, cumque saepe recusandae in amet sint fugit accusamus dicta doloribus, quam
                            tempore ipsa.Officiis repellendus eligendi cum reprehenderit, aperiam totam voluptatem minima iure
                            nisi quaerat, natus quod iste adipisci rerum molestiae sunt quasi qui magni, doloremque enim nam
                            dignissimos! Commodi similique ducimus quis?
                        </h1>
                    </Col>
                </Col>
            </Row>

            <Row>
                {/* Files uploaded list - todo component */}
                <Col className="col-12">
                    <ScrollContent height="200px" className="rounded-15 p-3">
                        <FilesList className="mb-3" taskName="Tarea 1." />
                        <FilesList className="mb-3" taskName="Tarea 3." />
                        <FilesList className="mb-3" taskName="Tarea 4." />
                        <FilesList className="mb-3" taskName="Tarea 5." />
                        <FilesList className="mb-3" taskName="Tarea 6." />
                        <FilesList className="mb-3" taskName="Tarea 7." />
                        <FilesList
                            className="mb-3"
                            taskName="Tarea 2 Lorem test Large text. Lorem test Large text. Lorem test Large text. Lorem test Large text."
                        />
                        <FilesList taskName="Tarea 8 Lorem test Large text." />
                    </ScrollContent>
                </Col>
            </Row>
        </Form>
    );
};

export default TaskForm;
