import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { PageContainer, PageHeading } from '../../../../../components';
import HeaderTaskVisualizer from './header-task-visualizer';
// import TableDemoSVG from '../../../../svg/table-demo.svg';
import TableDemoSVG from '../../../../partials/svg/table-demo.svg';

const FacilitatorTaskPage = () => {
    const history = useHistory();
    const { courseId } = useParams();

    const redirectToParticipantsTask = () => history.push(`/curso/${courseId}/tarea/:taskId/retroalimentacion`);

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

export default FacilitatorTaskPage;
