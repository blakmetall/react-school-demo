import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { PageContainer, PageHeading } from '../../../../../../components';
import HeaderTaskVisualizer from './header-task-visualizer';
import TableDemoSVG from '../../../../svg/table-demo.svg';

const FacilitatorSeeTask = () => {
    const history = useHistory();
    const redirectToParticipantsTask = () => history.push('/curso/:courseId/facilitator/facilitator-feedback-raiting');

    return (
        <div className="flex-grow-1">
            <PageHeading />

            <PageContainer contentPaddingClass="pb-4">
                {/* header form */}
                <div className="bg-white pb-4 px-6">
                    <HeaderTaskVisualizer />
                </div>
                {/* demo image table */}
                <Row className="justify-content-center my-5" onClick={redirectToParticipantsTask}>
                    <img src={TableDemoSVG} alt="lorem" width="90%" style={{ cursor: 'pointer' }} />
                </Row>
            </PageContainer>
        </div>
    );
};

export default FacilitatorSeeTask;
