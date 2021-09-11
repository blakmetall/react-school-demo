import React from 'react';
import PresentialClassesForm from './form';
import { Dropdown, PageContainer, PageHeading } from '../../../../../components';
import PresentialClasseslist from './classes-list';
import { StyledVideoAccess } from './styled';

const PresentialClassesFacilitator = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Exámenes">
                <div className="ml-2 col-12 w-100">
                    <div className="app-font-14 font-weight-700 text-center mb-2">Accesos para video conferencia</div>
                    <StyledVideoAccess className="p-3 rounded-15 flex-column flex-lg-row">
                        <div className="d-flex flex-column mr-3 mb-3 mb-lg-0">
                            <div className="app-font-14 text-gray-500 font-weight-600">Cuenta</div>
                            <div className="app-font-14 text-gray-500">Samantha Hernandez</div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="app-font-14 text-gray-500 font-weight-600">Contraseña</div>
                            <div className="app-font-14 text-gray-500">Samantha_123</div>
                        </div>
                    </StyledVideoAccess>
                </div>
            </PageHeading>

            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar clase" icon="add" className="mb-5">
                    <PresentialClassesForm />
                </Dropdown>
                <PresentialClasseslist />
            </PageContainer>
        </div>
    );
};

export default PresentialClassesFacilitator;
