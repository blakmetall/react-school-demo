import React from 'react';
import { PageHeading, PageContainer, Dropdown } from '../../../../../../components';
import SelfQualifiedTaskForm from './form';

const SelfQualifiedTask = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Tarea autocalificada" icon="add" className="mb-3">
                    <SelfQualifiedTaskForm />
                </Dropdown>
            </PageContainer>
        </div>
    );
};

export default SelfQualifiedTask;
