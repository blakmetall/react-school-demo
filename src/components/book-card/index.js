import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import { StyledCard, StyledImg, StyledContentCol } from './styled';
import { cropText } from '../../helpers';
import { ResponsiveControl } from '..';
import BookCardEvents from './events';

const BookCard = ({
    title,
    description,
    portraitUrl,
    hasView,
    hasEdit,
    hasDelete,
    onViewClick,
    onEditClick,
    onDeleteClick,
    onClick,
}) => {
    const imgSrc = portraitUrl || 'https://via.placeholder.com/200x300';

    return (
        <StyledCard onClick={onClick}>
            <Card.Body>
                <Row className="align-item-start justify-content-between no-gutters">
                    <Col className="col-12 col-md-6 mb-4 mb-md-0">
                        {/* image */}
                        <StyledImg className="img-fluid" src={imgSrc} alt="book-preview" />
                    </Col>

                    <StyledContentCol className="col-12 col-md-6">
                        {/* book actions: desktop */}
                        <ResponsiveControl hiddenOn="sm" className="mb-3">
                            <BookCardEvents
                                hasView={hasView}
                                hasEdit={hasEdit}
                                hasDelete={hasDelete}
                                onViewClick={onViewClick}
                                onEditClick={onEditClick}
                                onDeleteClick={onDeleteClick}
                            />
                        </ResponsiveControl>

                        {/* title */}
                        <Card.Title className="mb-3 text-white app-font-22 font-weight-500">{title}</Card.Title>

                        {/* content */}
                        <Card.Text className="text-white mb-3 mb-md-0">{cropText(description, 400)}</Card.Text>

                        {/* book actions: mobile */}
                        <ResponsiveControl visibleOn="sm">
                            <BookCardEvents
                                hasView={hasView}
                                hasEdit={hasEdit}
                                hasDelete={hasDelete}
                                onViewClick={onViewClick}
                                onEditClick={onEditClick}
                                onDeleteClick={onDeleteClick}
                            />
                        </ResponsiveControl>
                    </StyledContentCol>
                </Row>
            </Card.Body>
        </StyledCard>
    );
};

BookCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    portraitUrl: PropTypes.string,
    hasView: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasDelete: PropTypes.bool,
    onViewClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    onClick: PropTypes.func,
};

BookCard.defaultProps = {
    title: '',
    description: '',
    portraitUrl: '',
    hasView: false,
    hasEdit: false,
    hasDelete: false,
    onViewClick: () => {},
    onEditClick: () => {},
    onDeleteClick: () => {},
    onClick: false,
};

export default BookCard;
