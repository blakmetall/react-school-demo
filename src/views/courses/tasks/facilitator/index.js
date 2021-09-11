import React from 'react';
import { Dropdown, PageContainer, PageHeading } from '../../../../components';
import TasksForm from './form';
import TasksList from './list';

const FacilitatorTasksPage = () => { 
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar tarea" icon="add" className="mb-5">
                    <TasksForm />
                </Dropdown>
                <TasksList />
            </PageContainer>
        </div>
    );
};

export default FacilitatorTasksPage;
