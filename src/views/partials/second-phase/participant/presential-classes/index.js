import React from 'react';
import { PageContainer, PageHeading } from '../../../../../components';
import PresentialClasseslist from './presential-classes-list';

const PresentialClassesParticipant = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Exámenes" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <PresentialClasseslist />
            </PageContainer>
        </div>
    );
};

export default PresentialClassesParticipant;
