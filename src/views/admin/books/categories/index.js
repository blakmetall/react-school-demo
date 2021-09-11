import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { AddIcon, EditIcon, DeleteIcon, ViewIcon } from '../../../../components/icons';
import { ConfirmationModal, ListItem, RenderIf } from '../../../../components';
import { deleteCategory } from '../../../../store/actions/categories';
import { categoriesSort } from '../../../../helpers/sort';
import CategoriesForm from './form';
import theme from '../../../../theme';

const BooksCategories = ({ categories }) => {
    const [isFormOpen, setIsFormOpen] = useState();
    const [editableItem, setEditableItem] = useState();

    const [deletableItem, setDeletableItem] = useState();
    const [requestDeleteConfirmation, setRequestDeleteConfirmation] = useState();
    const [deleteSuccessConfirmation, setDeleteSuccessConfirmation] = useState();

    const dispatch = useDispatch();

    const sortItems = items => {
        if (items) {
            const arrayItems = Object.keys(items).map(key => items[key]);
            return arrayItems.sort(categoriesSort);
        }

        return items;
    };

    const handleOnEditClick = (e, category) => {
        e.preventDefault();
        setEditableItem(category);
        setIsFormOpen(true);
    };

    const handleOnDeleteClick = (e, category) => {
        e.preventDefault();
        setDeletableItem(category);
        setRequestDeleteConfirmation(true);
    };

    const onDeleteConfirmationAccept = () => {
        if (deletableItem && deletableItem.id) {
            setRequestDeleteConfirmation(false);
            dispatch(deleteCategory(deletableItem.id)).then(() => {
                setDeleteSuccessConfirmation(true);
            });
        }
    };

    const onDeleteConfirmationCancel = () => {
        setDeletableItem();
        setRequestDeleteConfirmation(false);
    };

    const renderCategories = () => {
        return sortItems(categories).map((category, index) => {
            const key = `key-${index}`;
            const { id, name, iconSlug, isDefault } = category;
            const categoryUrl = `/admin/libros/categoria/${id}`;
            const categoryUrlNewBook = `/admin/libros/categoria/${id}/nuevo`;

            return (
                <div key={key}>
                    <ListItem className="mb-3" to={categoryUrl} icon={iconSlug}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <Link to={categoryUrl} className="app-font-20 text-gray-500">
                                    {name}
                                </Link>
                            </div>
                            <div className="pl-4">
                                {/* faciliatos: edit and delete */}
                                <div className="d-flex align-items-center">
                                    <Link to={categoryUrl} className="d-block">
                                        <ViewIcon size="xs-2" color={theme.bootstrap.appBlue4} />
                                    </Link>

                                    <RenderIf isTrue={!isDefault}>
                                        <a href="#/" className="d-block ml-3" onClick={e => handleOnEditClick(e, category)}>
                                            <EditIcon size="xs-2" color={theme.bootstrap.appBlue4} />
                                        </a>

                                        <a href="#/" className="d-block ml-3" onClick={e => handleOnDeleteClick(e, category)}>
                                            <DeleteIcon size="xs-2" color={theme.bootstrap.appBlue4} />
                                        </a>
                                    </RenderIf>

                                    <Link to={categoryUrlNewBook} className="d-block ml-3">
                                        <AddIcon size="sm" color={theme.bootstrap.appBlue3} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ListItem>
                </div>
            );
        });
    };

    return (
        <>
            {renderCategories()}

            {/* categories edit form */}
            <CategoriesForm
                editableItem={editableItem}
                submitLabel="Guardar"
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />

            {/* confirmation modal: delete request */}
            <ConfirmationModal
                icon="danger"
                title="¿Eliminar categoría?"
                show={requestDeleteConfirmation}
                onCancel={onDeleteConfirmationCancel}
                onConfirm={onDeleteConfirmationAccept}
            />

            {/* confirmation modal: delete success */}
            <ConfirmationModal
                icon="success"
                title="Registro eliminado correctamente"
                show={deleteSuccessConfirmation}
                cancelLabel=""
                onHide={() => setDeleteSuccessConfirmation()}
                onConfirm={() => setDeleteSuccessConfirmation()}
            />
        </>
    );
};

BooksCategories.propTypes = {
    categories: PropTypes.array,
};

BooksCategories.defaultProps = {
    categories: [],
};

const mapStateToProps = state => ({
    categories: state.firestore.ordered.categories,
});

const firestoreQuery = () => {
    const queries = [];
    queries.push({ collection: 'categories' });
    return queries;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(BooksCategories);
