import React from 'react';
import { PageHeading, PageContainer, Dropdown } from '../../../../../components';
import theme from '../../../../../theme';
import FormUpExam from './form-up-exam';
import ParticipantsTaskVisualizer from './participant-header-exam-preview';

const UploadExamParticipantPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Exámenes" returnEnabled />
            {/* header form */}
            <div className="bg-white pb-4 px-6">
                <ParticipantsTaskVisualizer />
            </div>
            <PageContainer contentPaddingClass="py-4 px-5">
                <Dropdown title="Subir examen" icon="add" color={theme.bootstrap.info}>
                    <FormUpExam />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default UploadExamParticipantPage;
