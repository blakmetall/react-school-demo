import React from 'react';
import { Col } from 'react-bootstrap';
import { Input, Button } from '../../../../../components';
import { DownloadIcon } from '../../../../../components/icons';
import { StyledScrollContent, StyledTable, StyledTableFooter } from './styled';

const BreackdownTable = () => {
    return (
        <div className="mx-1 mx-lg-5">
            <div className="d-flex flex-column align-items-center mb-4 no-gutters">
                <Col className="col-12 col-lg-5">
                    <Input label="Buscar" type="text" />
                </Col>
                <Col className="col-12 col-lg-5">
                    <Button
                        label="Descargar csv."
                        icon={<DownloadIcon color="white" />}
                        size="xs"
                        iconPosition="left"
                        className="align-self-center mb-4"
                        fullWidth
                    />
                </Col>
            </div>

            {/* table */}
            <div className="mx-0 mx-lg-5">
                <StyledScrollContent background="transparent" className="row no-gutters rounded-top-15 ">
                    <StyledTable className="col-12 table table-hover">
                        {/* headers */}
                        <thead>
                            <tr>
                                <th scope="col">ID Libro (SAP) </th>
                                <th scope="col">Libro</th>
                                <th scope="col">Numero total de usuarios</th>
                                <th scope="col">test for responsive</th>
                                <th scope="col">test for responsive</th>
                                <th scope="col">test for responsive</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                            </tr>
                        </tbody>
                    </StyledTable>
                </StyledScrollContent>
                {/* footer */}
                <StyledTableFooter />
            </div>
        </div>
    );
};

export default BreackdownTable;
