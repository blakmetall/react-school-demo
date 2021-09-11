import React from 'react';
import { PageContainer, PageHeading, Dropdown } from '../../../../../../../components';
import theme from '../../../../../../../theme';
import FeedbackAndRating from './FeedbackAndRating';
import ParticipantsTaskVisualizer from '../participant-header-tasks-visualizer';

const ParticipantTeamGroupTasksFinalized = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading returnEnabled />
            {/* header form */}
            <div className="bg-white pb-4 px-6">
                <ParticipantsTaskVisualizer />
            </div>
            <PageContainer contentPaddingClass="p-4 px-5">
                {/* dropdown-form - feedback and rating */}
                <Dropdown title="Retroalimentación de tu tarea y calificación" icon="add" color={theme.bootstrap.info}>
                    <FeedbackAndRating />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default ParticipantTeamGroupTasksFinalized;
