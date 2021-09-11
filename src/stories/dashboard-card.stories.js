import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ClosedBookIcon, GraduationIcon, PersonIcon, PersonsIcon } from '../components/icons';
import { DashboardCard, ThemeWrapper } from '../components';

export default {
    title: 'Presentational/DashboardCard',
    component: DashboardCard,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => (
    <div>
        <div className="mb-3">
            <DashboardCard value={45} label="Books" variant="light" icon={ClosedBookIcon} progress={25} />
        </div>
        <div className="mb-3">
            <DashboardCard value={45} label="Books" variant="brown" icon={ClosedBookIcon} progress={50} />
        </div>
        <div className="mb-3">
            <DashboardCard value={45} label="Books" variant="light" icon={ClosedBookIcon} progress={75} />
        </div>
        <div className="mb-3">
            <DashboardCard value={45} label="Books" variant="brown" icon={ClosedBookIcon} progress={100} />
        </div>
    </div>
);

export const GridUsage = () => (
    <Row className="no-gutters">
        <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
            <DashboardCard value={45} label="Books" variant="light" icon={ClosedBookIcon} progress={25} />
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
            <DashboardCard value={45} label="Books" variant="brown" icon={GraduationIcon} progress={50} />
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
            <DashboardCard value={45} label="Books" variant="light" icon={PersonsIcon} progress={75} />
        </Col>
        <Col className="col-12 col-md-6 col-lg-3 px-2 mb-2">
            <DashboardCard value={45} label="Books" variant="brown" icon={PersonIcon} progress={100} />
        </Col>
    </Row>
);
