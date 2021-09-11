import React from 'react';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../components';
import { deleteGroupsParticipantsItem } from '../../../store/actions/groups-participants';
import { groupsParticipantsListSort, groupsParticipantsSort } from '../../../helpers/sort';
import GroupsParticipantsForm from './form';

const AdminGroupsParticipantsPage = () => {
    const tableColumnsSettings = [
        {
            label: 'Entidad Corporativa',
            field: 'corporateEntityName',
            colWidth: '240px',
        },
        {
            label: 'Entidad Regional',
            field: 'regionalEntityName',
            colWidth: '200px',
        },
        {
            label: 'Comunidad de Aprendizaje',
            field: 'learningCommunityName',
            colWidth: '200px',
        },
        {
            label: 'Grupo',
            field: 'groupName',
            colWidth: '150px',
        },
        {
            label: 'Participante',
            field: 'participantName',
            colWidth: '200px',
        },
        {
            label: 'Email',
            field: 'participantEmail',
            colWidth: '200px',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'groupsParticipants',
                dropdown: {
                    triggerField: 'groupName',
                    relationField: 'participantsIds',
                    relationFieldType: 'array',
                },
            },
            mapFields: {
                id: 'id',
                corporateEntityName: 'corporateEntityName',
                regionalEntityName: 'regionalEntityName',
                learningCommunityName: 'learningCommunityName',
                groupName: 'groupName',
            },
            rowActions: {
                canEdit: true,
                canDelete: true,
            },
            settings: {
                formComponent: GroupsParticipantsForm,
                deleteAction: deleteGroupsParticipantsItem,
                sortPipe: groupsParticipantsSort,
            },
        },
        {
            firebase: {
                collection: 'participants',
            },
            mapFields: {
                id: 'id',
                name: 'participantName',
                email: 'participantEmail',
            },
            settings: {
                sortPipe: groupsParticipantsListSort,
            },
        },
    ];

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Participantes" />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar" icon="add" isOpenByDefault={false} className="mb-5">
                    <GroupsParticipantsForm />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

export default AdminGroupsParticipantsPage;
