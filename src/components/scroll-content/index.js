import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styled';

const ScrollContent = ({ children, height, maxHeight, background, className, style }) => {
    return (
        <StyledWrapper style={style} maxHeight={maxHeight} height={height} background={background} className={className}>
            {children}
        </StyledWrapper>
    );
};

ScrollContent.propTypes = {
    children: PropTypes.node,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
};

ScrollContent.defaultProps = {
    children: undefined,
    height: undefined,
    maxHeight: undefined,
    background: '#f2f7fb', // mimic inputs bg
    className: undefined,
};

export default ScrollContent;
