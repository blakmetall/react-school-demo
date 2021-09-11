import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const UpArrow = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 13.31">
                <g>
                    <g>
                        <polyline
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3.19px"
                            points="1.6 11.71 6.69 6.65 11.78 1.6 16.87 6.65 21.96 11.71"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

UpArrow.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

UpArrow.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default UpArrow;
