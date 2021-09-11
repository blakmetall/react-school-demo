import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DashboardCard } from '../../../../../components';
import {
    BookOpenIcon,
    ClosedBookIcon,
    GraduationIcon,
    PersonIcon,
    PersonsGroupIcon,
    PersonsIcon,
} from '../../../../../components/icons';
import BooksPillICon from '../../../../../components/icons/books-pill';

const LicensesGeneralCardsList = () => {
    return (
        <div className="py-4">
            <Row className="no-gutters">
                {/* 1st row */}
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard value={45} label="LIBROS" variant="light" icon={ClosedBookIcon} progress={25} />
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard value={45} label="CURSOS" variant="brown" icon={BookOpenIcon} progress={50} />
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard
                        value={45}
                        label="PROMEDIO LIBROS POR CURSO"
                        variant="light"
                        icon={BooksPillICon}
                        progress={75}
                    />
                </Col>

                {/* 2nd row */}
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard value={45} label="USUARIOS" variant="light" icon={PersonIcon} progress={25} />
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard value={45} label="PARTICIPANTES" variant="brown" icon={GraduationIcon} progress={50} />
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard value={45} label="FACILITADORES" variant="light" icon={PersonsIcon} progress={75} />
                </Col>

                {/* 3rth row */}
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard
                        value={45}
                        label="ENTIDADES CORPORATIVAS"
                        variant="light"
                        icon={PersonsGroupIcon}
                        progress={25}
                    />
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard
                        value={45}
                        label="ENTIDADES REGIONALES"
                        variant="brown"
                        icon={PersonsGroupIcon}
                        progress={50}
                    />
                </Col>
                <Col className="col-12 col-md-6 col-lg-4 px-3 px-lg-4 mb-4">
                    <DashboardCard
                        value={45}
                        label="COMUNIDADES DE APRENDIZAJE"
                        variant="light"
                        icon={PersonsGroupIcon}
                        progress={75}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default LicensesGeneralCardsList;

// <Col className="col-12 col-md-6 col-lg-3 px-3 px-lg-4 mb-2">
// <DashboardCard value={45} label="Books" variant="light" icon={PersonIcon} progress={100} />
// </Col>
