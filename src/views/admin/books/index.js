import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AddIcon } from '../../../components/icons';
import { PageContainer, PageHeading } from '../../../components';
import BooksCategories from './categories';
import CategoriesForm from './categories/form';

const AdminBooksCategoriesPage = () => {
    const [isCategoriesFormOpen, setIsCategoriesFormOpen] = useState(false);

    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Libros" className="pr-5">
                <div
                    className="app-clickable"
                    onClick={() => setIsCategoriesFormOpen(true)}
                    title="Agregar categoría"
                    role="presentation"
                >
                    <AddIcon size="sm" color="#6fb2da" />
                </div>
            </PageHeading>

            {/* container */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                <Container className="mb-5">
                    {/* categories list */}
                    <BooksCategories />
                </Container>
            </PageContainer>

            {/* categories form */}
            <CategoriesForm isOpen={isCategoriesFormOpen} onClose={() => setIsCategoriesFormOpen(false)} />
        </div>
    );
};

export default AdminBooksCategoriesPage;
