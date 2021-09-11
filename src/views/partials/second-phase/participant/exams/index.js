import React from 'react';
import { PageContainer, PageHeading } from '../../../../../components';
import ExamAvailable from './exams-list/exam-available';
import ExamFinalized from './exams-list/exam-finalized';

const ExamsParticipantPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Asesorías" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <ExamAvailable />
                <ExamFinalized />
                <ExamAvailable />
                <ExamFinalized />
                <ExamAvailable />
                <ExamFinalized />
            </PageContainer>
        </div>
    );
};

export default ExamsParticipantPage;
