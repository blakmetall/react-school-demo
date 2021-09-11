import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { BookCard } from '../../../../components';
import { StyledGrid } from './styled';

const BooksGrid = ({ books = [] }) => {
    const history = useHistory();

    const viewBook = id => {
        const url = `${history.location.pathname}/libro/${id}`;
        history.push(url);
    };

    const renderBookCards = books.map(bookData => {
        if (!bookData) return null;
        const { id, name, description, photo } = bookData;
        const portraitUrl = (photo && photo.storageUrl) || '';

        return (
            <BookCard key={id} title={name} description={description} portraitUrl={portraitUrl} onClick={() => viewBook(id)} />
        );
    });

    return <StyledGrid className="rainbow-flex rainbow-flex_wrap rainbow-flex_row">{renderBookCards}</StyledGrid>;
};

BooksGrid.propTypes = {
    books: PropTypes.array,
};

BooksGrid.defaultProps = {
    books: [],
};

const mapStateToProps = (state, { booksIds = [] }) => {
    return {
        books: booksIds.map(bookId => {
            const bookRef = `book-grid-${bookId}`;
            const item = state.firestore.ordered[bookRef];
            return item ? item[0] : false;
        }),
    };
};

const firestoreQuery = ({ booksIds = [] }) => {
    const queries = booksIds.map(function AddBookQueries(bookId) {
        const bookRef = `book-grid-${bookId}`;
        return { collection: 'books', doc: bookId, storeAs: bookRef };
    });
    return queries;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(BooksGrid);
