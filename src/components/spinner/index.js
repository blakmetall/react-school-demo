import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as RainbowSpinner } from 'react-rainbow-components';
import { StyledContainer } from './styled';

function Spinner({ size, variant, className }) {
    return (
        <StyledContainer className={`d-flex align-items-center justify-content-center ${className}`}>
            <RainbowSpinner size={size} variant={variant} type="arc" />
        </StyledContainer>
    );
}

Spinner.propTypes = {
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large']),
    variant: PropTypes.oneOf(['base', 'brand', 'inverse', 'neutral']),
    className: PropTypes.string,
};

Spinner.defaultProps = {
    size: 'small',
    variant: 'brand',
    className: undefined,
};

export default Spinner;
