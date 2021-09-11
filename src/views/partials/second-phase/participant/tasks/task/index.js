import React from 'react';
import { PageHeading, PageContainer, Dropdown } from '../../../../../../components';
import theme from '../../../../../../theme';
import FormUpTask from './form-up-task';
import ParticipantsTaskVisualizer from './participant-header-tasks-Visualizer';

const ParticipantSeeTask = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas" />
            {/*  header form */}
            <div className="bg-white pb-4 px-6">
                <ParticipantsTaskVisualizer />
            </div>
            <PageContainer contentPaddingClass="p-5">
                <Dropdown title="Subir tarea" icon="add" color={theme.bootstrap.info}>
                    <FormUpTask />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default ParticipantSeeTask;
