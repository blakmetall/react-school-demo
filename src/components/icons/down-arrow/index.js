import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const DownArrowIcon = ({ color, size, style, className }) => {
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
                            points="21.96 1.6 16.87 6.65 11.78 11.71 6.69 6.65 1.6 1.6"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

DownArrowIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

DownArrowIcon.defaultProps = {
    color: '#c6c6c6',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default DownArrowIcon;
