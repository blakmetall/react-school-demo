import React from 'react';
import { PageContainer, PageHeading } from '../../../../../components';
import ConsultanciesListFacilitator from './list';

const ConsultanciesParticipant = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Asesorías" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <ConsultanciesListFacilitator />
            </PageContainer>
        </div>
    );
};

export default ConsultanciesParticipant;
