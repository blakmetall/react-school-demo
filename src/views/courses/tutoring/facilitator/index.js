import React from 'react';
import { Dropdown, PageContainer, PageHeading } from '../../../../components';
import TutoringForm from './form';
import TutoringListFacilitator from './list';

const TutoringFacilitatorPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Asesorías" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar asesorías" icon="add" className="mb-5">
                    <TutoringForm />
                </Dropdown>
                <TutoringListFacilitator />
            </PageContainer>
        </div>
    );
};

export default TutoringFacilitatorPage;
