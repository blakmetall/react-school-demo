import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const GraduationIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.59 27.39">
                <g>
                    <g>
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M8.88,13.43h0l-.17,8a1.71,1.71,0,0,0,.34,1c.93,1.12,4.3,3.92,10.65,3.92,6.18,0,9-2.87,9.42-3.92a1.81,1.81,0,0,0,.14-.66l.07-7.88h0l-8.79,3.53h0Z"
                        />
                        <polygon
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            points="36.51 7.9 17.61 1.07 17.61 1.07 1.06 7.85 1.06 7.85 1.13 8.69 1.13 8.69 9.21 12.24 20.1 17.01 20.1 17.01 28.31 12.83 36.44 8.68 36.44 8.68 36.51 7.9 36.51 7.9"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

GraduationIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

GraduationIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default GraduationIcon;
