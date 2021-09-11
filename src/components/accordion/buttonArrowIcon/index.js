import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, useAccordionToggle } from 'react-bootstrap';
import StyledArrowICon from './styled';

const ButtonArrowIcon = ({ eventKey, color, size }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const decoratedOnClick = useAccordionToggle(eventKey);

    const clickHandler = () => {
        setIsCollapsed(!isCollapsed);
        decoratedOnClick();
    };

    return (
        <Button variant="" onClick={clickHandler} className="p-0">
            <StyledArrowICon size={size} isCollapsed={isCollapsed} color={color} />
        </Button>
    );
};

ButtonArrowIcon.propTypes = {
    eventKey: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
};

ButtonArrowIcon.defaultProps = {
    eventKey: undefined,
    color: undefined,
    size: undefined,
};

export default ButtonArrowIcon;
