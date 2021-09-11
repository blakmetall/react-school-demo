import React from 'react';
import { PageContainer, PageHeading, Dropdown } from '../../../../../components';
import theme from '../../../../../theme';
import FeedbackAndRating from './tutoring';
import ParticipantExamTutoringView from './participant-header-exam-visualizer';

const CourseParticipantExamTutoringPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading returnEnabled />
            {/* header form */}
            <div className="bg-white pb-4 px-6">
                <ParticipantExamTutoringView />
            </div>
            <PageContainer contentPaddingClass="py-4 px-5">
                {/* dropdown-form - feedback and rating */}
                <Dropdown title="Retroalimentación de tu examen y calificación" icon="add" color={theme.bootstrap.info}>
                    <FeedbackAndRating />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default CourseParticipantExamTutoringPage;
