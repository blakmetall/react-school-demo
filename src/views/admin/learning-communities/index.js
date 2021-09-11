import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteLearningCommunity } from '../../../store/actions/learning-communities';
import { managersSort, learningCommunitiesSort } from '../../../helpers/sort';
import LearningCommunitiesForm from './form';

const AdminLearningCommunitiesPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '230px',
        },
        {
            label: 'Entidad Regional',
            field: 'regionalEntityName',
            colWidth: '210px',
        },
        {
            label: 'Comunidad de Aprendizaje',
            field: 'learningCommunityName',
            colWidth: '210px',
        },
        {
            label: 'Encargado',
            field: 'learningCommunityManagerName',
            colWidth: '210px',
        },
        {
            label: 'Email',
            field: 'learningCommunityManagerEmail',
            colWidth: '260px',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'learningCommunities',
                dropdown: {
                    triggerField: 'learningCommunityName',
                    relationField: 'managersIds',
                    relationFieldType: 'array',
                },
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                regionalEntityName: 'regionalEntityName',
                name: 'learningCommunityName',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: LearningCommunitiesForm,
                deleteAction: deleteLearningCommunity,
                sortPipe: learningCommunitiesSort,
            },
        },
        {
            firebase: {
                collection: 'managers',
            },
            mapFields: {
                id: 'id',
                name: 'learningCommunityManagerName',
                email: 'learningCommunityManagerEmail',
            },
            settings: {
                sortPipe: managersSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Comunidades de aprendizaje" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar comunidad de aprendizaje" icon="add" isOpenByDefault={false} className="mb-5">
                    <LearningCommunitiesForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminLearningCommunitiesPage;
