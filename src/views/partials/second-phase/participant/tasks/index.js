import React from 'react';
import { PageContainer, PageHeading } from '../../../../../components';
import TasksList from './list';

const ParticipantTaskPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <TasksList />
            </PageContainer>
        </div>
    );
};

export default ParticipantTaskPage;
