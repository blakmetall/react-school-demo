import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Avatar } from '../../../../../components';

// todo component
const AvatarsCheckItem = ({ checked, className, id }) => {
    return (
        <Col className={`d-flex justify-content-between align-items-center ${className}`}>
            <label style={{ cursor: 'pointer' }} htmlFor={id}>
                <Avatar size="small" name="Lorem Name" label="Lorem Name" />
            </label>

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={id} checked={checked} />
                <label className="custom-control-label" />
            </div>
        </Col>
    );
};

AvatarsCheckItem.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
};

AvatarsCheckItem.defaultProps = {
    checked: undefined,
    className: undefined,
    id: undefined,
};

export default AvatarsCheckItem;
