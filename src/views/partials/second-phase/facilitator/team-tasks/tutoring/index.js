import React from 'react';
import { PageContainer, PageHeading, Dropdown } from '../../../../../../components';
import theme from '../../../../../../theme';
import TeamTasksVisualizer from './team-task-visualizer';
import TutoringTeamTaskVisualizer from './tutoring-visualizer';

const TeamTaskTutoringFacilitatorPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading returnUrl="/curso/:courseId/facilitator/team-tasks" />
            {/* header form */}
            <div className="bg-white pb-4 px-6">
                <TeamTasksVisualizer />
            </div>

            <PageContainer contentPaddingClass="p-4 pb-4 px-5">
                <Dropdown title="Retroalimentación y calificación" icon="add" color={theme.bootstrap.info}>
                    <TutoringTeamTaskVisualizer />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default TeamTaskTutoringFacilitatorPage;
