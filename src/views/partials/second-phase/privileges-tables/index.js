import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import PrivilegesTable from './table';

const PrivilegesTablePage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tabla de privilegios" />
            <PageContainer contentPaddingClass="p-5 pb-4">
                <PrivilegesTable />
            </PageContainer>
        </div>
    );
};

export default PrivilegesTablePage;
