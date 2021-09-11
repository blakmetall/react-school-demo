import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteLearningCommunityGroup } from '../../../store/actions/learning-community-groups';
import { learningCommunityGroupListSort, learningCommunityGroupsSort } from '../../../helpers/sort';
import LearningCommunityGroupsForm from './form';

const AdminLearningCommunityGroupsPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '240px',
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
            label: 'Grupo',
            field: 'groupName',
            colWidth: '150px',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'learningCommunityGroups',
                dropdown: {
                    triggerField: 'learningCommunityName',
                    relationField: 'groupsIds',
                    relationFieldType: 'array',
                },
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                regionalEntityName: 'regionalEntityName',
                learningCommunityName: 'learningCommunityName',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: LearningCommunityGroupsForm,
                deleteAction: deleteLearningCommunityGroup,
                sortPipe: learningCommunityGroupsSort,
            },
        },
        {
            firebase: {
                collection: 'groups',
            },
            mapFields: {
                id: 'id',
                name: 'groupName',
            },
            settings: {
                sortPipe: learningCommunityGroupListSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Grupos" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar" icon="add" isOpenByDefault={false} className="mb-5">
                    <LearningCommunityGroupsForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminLearningCommunityGroupsPage;
