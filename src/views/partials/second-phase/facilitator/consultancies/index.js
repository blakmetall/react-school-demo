import React from 'react';
import { Dropdown, PageContainer, PageHeading } from '../../../../../components';
import ConsultanciesForm from './form';
import ConsultanciesListFacilitator from './list';

const ConsultanciesFacilitator = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Asesorías" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar sesorías" icon="add" className="mb-5">
                    <ConsultanciesForm />
                </Dropdown>
                <ConsultanciesListFacilitator />
            </PageContainer>
        </div>
    );
};

export default ConsultanciesFacilitator;
