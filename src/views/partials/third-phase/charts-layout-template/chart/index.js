import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Chart, Dataset } from 'react-rainbow-components';
import { Button } from '../../../../../components';
import theme from '../../../../../theme';

const DoughnutChart = () => {
    // eslint-disable-next-line
    const [state, setState] = useState({
        labels: ['Libro 1', 'Libro 2', 'Libro 3', 'Libro 4'],
        dataset: [
            {
                value: 10,
                color: theme.bootstrap.primary,
            },
            {
                value: 15,
                color: theme.bootstrap.danger,
            },
            {
                value: 42,
                color: theme.bootstrap.appBlue3,
            },
            {
                value: 33,
                color: theme.bootstrap.appBrown,
            },
        ],
    });

    // todo - separar en un componente
    const renderDataset = () => {
        const data = [];
        const renderColors = [];
        const { dataset } = state;
        dataset.forEach(set => {
            data.push(set.value);
            renderColors.push(set.color);
        });

        return <Dataset title="Data" values={data} backgroundColor={renderColors} />;
    };

    const { labels } = state;

    return (
        <Row className="justify-content-center bg-white m-2 m-lg-4 py-5">
            {/* chart */}
            <Col className="col-12 col-md-10 col-lg-7 rounded-15 p-3 py-5">
                <Chart labels={labels} type="doughnut" legendPosition="top" disableCurves style={{ minWidth: '300px' }}>
                    {renderDataset()}
                </Chart>
            </Col>
            {/* button */}
            <Col className="col-12 text-center">
                <Button label="Ver Desglose" variant="success" size="xs" />
            </Col>
        </Row>
    );
};

export default DoughnutChart;
