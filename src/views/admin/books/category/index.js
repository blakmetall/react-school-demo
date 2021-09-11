import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { findItemInStoreList, getIconSrc } from '../../../../helpers';
import { AdminTable, Dropdown, PageContainer, PageHeading } from '../../../../components';
import { deleteBook } from '../../../../store/actions/books';
import { booksSort } from '../../../../helpers/sort';
import { StyledIconWrapper, StyledIcon } from './styled';
import BookForm from '../form';

const AdminBookCategoryPage = ({ category, openFormByDefault }) => {
    const history = useHistory();

    const tableColumnsSettings = [
        {
            label: 'Libro',
            field: 'bookName',
            colWidth: '250px',
        },
        {
            label: 'ID (SAP)',
            field: 'bookIdSAP',
            colWidth: '110px',
        },
        {
            label: 'Portada',
            field: 'bookPhoto',
            colWidth: '65px',
            type: 'preview-image',
        },
        {
            label: 'Documento',
            field: 'bookDocument',
            colWidth: '80px',
            type: 'preview-pdf',
        },
    ];

    const tableRequestsSettings = [
        {
            firebase: {
                collection: 'books',
                whereFilters: [{ whereField: 'categoryId', whereEquality: '==', whereValue: category && category.id }],
            },
            mapFields: {
                id: 'id',
                name: 'bookName',
                idSAP: 'bookIdSAP',
                photo: 'bookPhoto',
                document: 'bookDocument',
            },
            rowActions: {
                canView: true,
                canEdit: true,
                canDelete: true,
            },
            settings: {
                onViewRowClick: item => {
                    history.push(`/admin/libro/${item.id}/visualizar`);
                },
                formComponent: BookForm,
                deleteAction: deleteBook,
                sortPipe: booksSort,
            },
        },
    ];

    const renderHeadingCategoryIcon = () => {
        if (category) {
            const { iconSlug } = category;

            return (
                <div className="pr-3 align-self-stretch">
                    <StyledIconWrapper className="d-flex align-items-center justify-content-center h-100">
                        <StyledIcon src={getIconSrc(iconSlug)} />
                    </StyledIconWrapper>
                </div>
            );
        }

        return undefined;
    };

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label={category && category.name} content={renderHeadingCategoryIcon} />

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                {/* form dropdown */}
                <Dropdown title="Agregar Libro" icon="add" isOpenByDefault={openFormByDefault} className="mb-5">
                    <BookForm category={category} />
                </Dropdown>

                {/* table */}
                <AdminTable columnsSettings={tableColumnsSettings} requestsSettings={tableRequestsSettings} withColoredCircles />
            </PageContainer>
        </div>
    );
};

AdminBookCategoryPage.propTypes = {
    category: PropTypes.any,
    openFormByDefault: PropTypes.bool,
};

AdminBookCategoryPage.defaultProps = {
    category: undefined,
    openFormByDefault: undefined,
};

const mapStateToProps = ({ firestore }, { match }) => ({
    category: findItemInStoreList('categoryId', 'categories', match.params, firestore),
    openFormByDefault: !!(match.params && match.params.new),
});

const firestoreQuery = (state, { match }) => {
    const fsQuery = [];

    if (match && match.params && match.params.categoryId) {
        fsQuery.push({ collection: 'categories', doc: match.params.categoryId });
    }

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(AdminBookCategoryPage);
