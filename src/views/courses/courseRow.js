import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { ColorCircle, ListItem } from '../../components';

const CourseRow = ({ course, index }) => {
    const courseUrl = `/curso/${course.id}`;

    return (
        <ListItem icon="puzzle" className="mb-3" to={courseUrl}>
            <Row className="align-items-center">
                <Col className="col-12 col-md-3 py-1">{course.name}</Col>
                <Col className="col-12 col-md-3 py-1">-</Col>
                <Col className="col-12 col-md-2 py-1">-</Col>
                <Col className="col-12 col-md-4 py-1">
                    <ColorCircle index={index} />
                </Col>
            </Row>
        </ListItem>
    );
};

CourseRow.propTypes = {
    course: PropTypes.any,
    index: PropTypes.number,
};

CourseRow.defaultProps = {
    course: undefined,
    index: undefined,
};

export default CourseRow;
