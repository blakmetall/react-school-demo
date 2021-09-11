import React from 'react';
import { Calendar, ThemeWrapper } from '../components';

export default {
    title: 'Components/Calendar',
    component: Calendar,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => {
    const activitiesList = [
        { date: '2020-09-01', label: 'tareas', id: '1', type: 'tasks' },
        { date: '2020-09-02', label: 'proyectos', id: '2', type: 'projects' },
        { date: '2020-09-03', label: 'exámenes', id: '3', type: 'exam' },
        { date: '2020-09-04', label: 'asesorías', id: '4', type: 'consultancies' },
        { date: '2020-09-05', label: 'trabajo en equipo', id: '5', type: 'teamwork' },
        { date: '2020-09-06', label: 'tareas', id: '6', type: 'tasks' },
        { date: '2020-09-07', label: 'tareas', id: '7', type: 'tasks' },
        { date: '2020-09-08', label: 'tareas', id: '8', type: 'tasks' },
        { date: '2020-09-09', label: 'exámenes', id: '9', type: 'exam' },
        { date: '2020-09-10', label: 'tareas', id: '10', type: 'tasks' },
        { date: '2020-09-11', label: 'tareas', id: '11', type: 'tasks' },
        { date: '2020-09-15', label: 'tareas', id: '12', type: 'tasks' },
        { date: '2020-09-15', label: 'asesorías', id: '13', type: 'consultancies' },
        { date: '2020-09-15', label: 'trabajo en equipo', id: '14', type: 'teamwork' },
        { date: '2020-09-15', label: 'proyectos', id: '15', type: 'projects' },
    ];

    return (
        <div>
            <Calendar activitiesList={activitiesList} />
            {/* <h1>hello</h1> */}
        </div>
    );
};
