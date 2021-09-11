import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ClosedBookIcon, GraduationIcon, PersonIcon, PersonsIcon } from '../../../components/icons';
import { Chart, DashboardCard, PageContainer, PageHeading } from '../../../components';

const chartData = [
    {
        title: 'Escuela Ciencias',
        values: [23, 45, 123, 56, 65, 11, 54, 92, 26, 86, 95, 78],
        backgroundColor: '#D3264B',
        borderColor: '#D3264B',
    },
    {
        title: 'Grupo apostólico',
        values: [66, 70, 80, 62, 60, 75, 120, 111, 90, 93, 99, 69],
        backgroundColor: '#88BDDA',
        borderColor: '#88BDDA',
    },
    {
        title: 'San Juan Evangelista',
        values: [30, 60, 68, 79, 100, 112, 100, 121, 130, 105, 145, 185],
        backgroundColor: '#D6CBB9',
        borderColor: '#D6CBB9',
    },
];

const AdminDashboardPage = () => {
    return (
        <div className="flex-grow-1 h-100">
            <PageHeading label="Dashboard" />
            <PageContainer contentPaddingClass="p-3">
                <Row className="no-gutters">
                    <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
                        <DashboardCard value={45} label="Libros" variant="light" icon={ClosedBookIcon} progress={25} />
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
                        <DashboardCard value={45} label="Escuelas" variant="brown" icon={GraduationIcon} progress={50} />
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
                        <DashboardCard value={45} label="Facilitadores" variant="light" icon={PersonIcon} progress={75} />
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
                        <DashboardCard value={45} label="Participantes" variant="brown" icon={PersonsIcon} progress={100} />
                    </Col>
                </Row>

                <div>
                    <Chart data={chartData} />
                </div>
            </PageContainer>
        </div>
    );
};

export default AdminDashboardPage;
