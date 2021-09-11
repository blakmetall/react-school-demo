import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import TutoringListFacilitator from './list';

const TutoringParticipantPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Asesorías" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <TutoringListFacilitator />
            </PageContainer>
        </div>
    );
};

export default TutoringParticipantPage;
