import React from 'react';
import PropTypes from 'prop-types';
// import { Form } from 'react-bootstrap';
// import { StyledCheckBoxWrapper } from './styled';
import { Col } from 'react-bootstrap';
import { Avatar } from '../../../../../../components';

const AvatarsWhitCheckBoxes = ({ checked, className, id }) => {
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

AvatarsWhitCheckBoxes.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
};

AvatarsWhitCheckBoxes.defaultProps = {
    checked: undefined,
    className: undefined,
    id: undefined,
};

export default AvatarsWhitCheckBoxes;
