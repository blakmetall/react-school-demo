import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import LiveClassesList from './classes-list';

const LiveClassesParticipant = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Clases Presenciales" />

            <PageContainer contentPaddingClass="p-3 pb-4">
                <LiveClassesList />
            </PageContainer>
        </div>
    );
};

export default LiveClassesParticipant;
