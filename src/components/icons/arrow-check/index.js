import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const ArrowCheck = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17.18">
                <g id="a96caf20-b995-42de-a98b-15630bd733d4" data-name="Layer 2">
                    <g id="bfb0ad53-c6ab-4aea-9edf-229851868ef7" data-name="Layer 1">
                        <path
                            d="M1.5,8.59l4.33,7.09S10.56,5.83,14.5,1.5"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

ArrowCheck.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
ArrowCheck.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default ArrowCheck;
