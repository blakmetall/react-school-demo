import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { ContentRepeater, Select } from '../../../../components';
import { arrayReplacePropValue, objectKeysToArray } from '../../../../helpers';
import { booksSort, booksIdSAPSort } from '../../../../helpers/sort';

const CourseBooksSelectable = ({ categoryBooks, booksIds, onChange, className }) => {
    const [repeatableItems, setRepeatableItems] = useState([]);

    const [idSAPsOptions, setIdSAPsOptions] = useState([]);
    const [namesOptions, setNamesOptions] = useState([]);

    const blueprint = {
        idSAPLabel: 'ID (SAP)',
        idSAPValue: '',
        idSAPProp: 'idSAPValue',

        bookIdLabel: 'Libro',
        bookIdValue: '',
        bookIdProp: 'bookIdValue',
    };

    const handleOnChangeRepeater = (replaceValue, dataIndex, replaceProp) => {
        setRepeatableItems(arrayReplacePropValue(repeatableItems, dataIndex, replaceProp, replaceValue));
    };

    const handleOnChangeIdSAP = (e, dataIndex, replaceProp) => {
        const selectedIdSAP = e.target.value;

        if (!selectedIdSAP || selectedIdSAP === 'N/A') {
            handleOnChangeRepeater('', dataIndex, replaceProp);
        } else {
            const found = namesOptions.filter(v => v.value === selectedIdSAP);

            if (found) {
                const bookId = found[0].value;

                handleOnChangeRepeater(bookId, dataIndex, replaceProp);
            }
        }
    };

    const handleOnChangeBook = (e, dataIndex, replaceProp) => {
        handleOnChangeRepeater(e.target.value, dataIndex, replaceProp);
    };

    const handleOnRepeaterChange = values => {
        setRepeatableItems(values);
    };

    useEffect(() => {
        if (categoryBooks && categoryBooks.length) {
            const categoryBooksArray = objectKeysToArray(categoryBooks);

            setIdSAPsOptions([
                ...categoryBooksArray
                    .filter(book => !!book.idSAP)
                    .sort(booksIdSAPSort)
                    .map(book => ({
                        label: book.idSAP,
                        value: book.id,
                    })),
                { value: 'N/A', label: 'N/A' },
            ]);

            setNamesOptions(
                categoryBooksArray.sort(booksSort).map(book => ({
                    label: book.name,
                    value: book.id,
                    idSAP: book.idSAP,
                })),
            );
        }
    }, [categoryBooks]);

    useEffect(() => {
        if (repeatableItems && repeatableItems.length) {
            onChange(repeatableItems.map(item => item.bookIdValue));
        } else {
            onChange([]);
        }

        // eslint-disable-next-line
    }, [repeatableItems]);

    useEffect(() => {
        if (booksIds) {
            const booksRepeatableItems = booksIds.map(bookId => ({
                ...blueprint,
                bookIdValue: bookId,
            }));

            if (!_.isEqual(booksRepeatableItems, repeatableItems)) {
                setRepeatableItems(booksRepeatableItems);
            }
        }

        // eslint-disable-next-line
    }, [booksIds]);

    return (
        <div className={className}>
            <ContentRepeater
                dinamic
                addLabel="Agregar libro"
                data={repeatableItems}
                dataBlueprint={blueprint}
                onAddItem={values => handleOnRepeaterChange(values)}
                onRemoveItem={values => handleOnRepeaterChange(values)}
                render={(renderItem, renderIndex) => {
                    if (renderItem) {
                        const {
                            idSAPLabel,

                            bookIdLabel,
                            bookIdValue,
                            bookIdProp,
                        } = renderItem;

                        const selectedSAPOption = idSAPsOptions.filter(v => v.value === bookIdValue);
                        const selectedIdSAP = selectedSAPOption && selectedSAPOption.length ? selectedSAPOption[0].value : 'N/A';

                        return (
                            <>
                                <div className="d-flex flex-column flex-md-row">
                                    {/* book idSAP */}
                                    <Col className="col-md-6 pl-0 pr-0 pr-md-3">
                                        <Select
                                            label={idSAPLabel}
                                            value={selectedIdSAP}
                                            options={idSAPsOptions}
                                            onChange={e => handleOnChangeIdSAP(e, renderIndex, 'bookIdValue')}
                                        />
                                    </Col>

                                    {/* book name */}
                                    <Col className="col-md-6 pr-0 pl-0 pl-md-3">
                                        <Select
                                            label={bookIdLabel}
                                            value={bookIdValue}
                                            options={namesOptions}
                                            onChange={e => handleOnChangeBook(e, renderIndex, bookIdProp)}
                                        />
                                    </Col>
                                </div>
                            </>
                        );
                    }

                    return <></>;
                }}
            />
        </div>
    );
};

CourseBooksSelectable.propTypes = {
    categoryBooks: PropTypes.any,
    booksIds: PropTypes.array,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

CourseBooksSelectable.defaultProps = {
    categoryBooks: undefined,
    booksIds: [],
    onChange: () => {},
    className: undefined,
};

const mapStateToProps = ({ firestore }) => ({
    categoryBooks: firestore.ordered && firestore.ordered.books,
});

const firestoreQuery = () => {
    const fsQuery = [];

    fsQuery.push({
        collection: 'books',
    });

    return fsQuery;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CourseBooksSelectable);
