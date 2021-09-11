import React from 'react';
import { Calendar, PageContainer, PageHeading } from '../../../components';
import dummyData from './dummyData';

const CourseCalendarPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Calendario" />
            <PageContainer contentPaddingClass="p-5">
                <Calendar activitiesList={dummyData.activitiesList} />
            </PageContainer>
        </div>
    );
};

export default CourseCalendarPage;
