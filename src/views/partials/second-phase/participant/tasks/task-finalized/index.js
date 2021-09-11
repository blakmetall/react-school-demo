import React from 'react';
import { PageHeading, PageContainer, Dropdown } from '../../../../../../components';
import theme from '../../../../../../theme';
import TaskFinalized from './form';
import ParticipantsTaskVisualizer from './header-tasks-vizualizer';

const participantTasksVizualizer = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas" />
            <div className="bg-white pb-4 px-5">
                <ParticipantsTaskVisualizer />
            </div>
            <PageContainer contentPaddingClass="p-4">
                <Dropdown title="Tarea finalizada" icon="add" color={theme.bootstrap.info}>
                    <TaskFinalized />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default participantTasksVizualizer;
