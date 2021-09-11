import React from 'react';
import { PageContainer } from '../../../../../components';
import ResultsTable from './table';

const ResultsTablePage = () => {
    return (
        <div className="flex-grow-1">
            <PageContainer contentPaddingClass="p-3 pb-4">
                <ResultsTable />
            </PageContainer>
        </div>
    );
};

export default ResultsTablePage;
