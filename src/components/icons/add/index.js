import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const AddIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg
                className={className}
                style={style}
                viewBox="0 0 43 43"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <circle
                            cx="21.5"
                            cy="21.5"
                            r="20"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3px"
                        />
                        <line
                            x1="21.5"
                            y1="11"
                            x2="21.5"
                            y2="33"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3px"
                        />
                        <line
                            x1="32.5"
                            y1="22"
                            x2="10.5"
                            y2="22"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3px"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

AddIcon.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.string,
};

AddIcon.defaultProps = {
    color: '#ffffff',
    className: undefined,
    style: undefined,
    size: undefined,
};

export default AddIcon;
