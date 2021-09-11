import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const CheckIcon = ({ color, checkColor, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg
                style={style}
                className={className}
                id="check"
                data-name="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 468.29 468.29"
            >
                <circle cx="234.15" cy="234.15" r="234.15" fill={color} />
                <polygon
                    points="357.52 110.14 192 275.67 110.77 194.45 69.53 235.68 192 358.15 398.76 151.38 357.52 110.14"
                    fill={checkColor}
                />
            </svg>
        </StyledIcon>
    );
};

CheckIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    checkColor: PropTypes.string,
};

CheckIcon.defaultProps = {
    color: '#6b9dbf',
    size: undefined,
    style: undefined,
    className: undefined,
    checkColor: '#ebf0f3',
};

export default CheckIcon;
