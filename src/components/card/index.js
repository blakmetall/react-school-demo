import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardWrapper } from './styled';

const Card = ({ textColor, backgroundColor, paddingSize, maxWidth, className, children }) => {
    return (
        <StyledCardWrapper
            textcolor={textColor}
            backgroundcolor={backgroundColor}
            paddingsize={paddingSize}
            maxwidth={maxWidth}
            className={className}
        >
            {children}
        </StyledCardWrapper>
    );
};

Card.propTypes = {
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    paddingSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    maxWidth: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Card.defaultProps = {
    textColor: undefined,
    backgroundColor: undefined,
    paddingSize: undefined,
    maxWidth: undefined,
    className: undefined,
    children: undefined,
};

export default Card;
