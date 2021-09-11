import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Datepicker } from '../../../../../components';

const HeaderChart = () => {
    return (
        <div>
            <div className="app-font-28 text-gray-500 font-weight-500 text-center mb-4">Asignacion de libros</div>
            <Row className="no-gutters justify-content-center">
                <Col className="col-12 col-lg-4 px-0 px-lg-2 mb-2 mb-lg-0">
                    <Datepicker label="fecha inicio" />
                </Col>
                <Col className="col-12 col-lg-4 px-0 px-lg-2 mb-2 mb-lg-0">
                    <Datepicker label="fecha inicio" />
                </Col>
            </Row>
        </div>
    );
};

export default HeaderChart;
