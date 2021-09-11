import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import ParticipantTeamTasksList from './list';

const TeamTasksParticipantPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas en equipo" />
            <PageContainer contentPaddingClass="p-3 py-4">
                <ParticipantTeamTasksList />

                <ParticipantTeamTasksList />

                <ParticipantTeamTasksList />
            </PageContainer>
        </div>
    );
};

export default TeamTasksParticipantPage;
