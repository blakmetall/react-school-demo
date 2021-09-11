import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const ViewIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 14.74">
                <g>
                    <g>
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M22,7.77a12.8,12.8,0,0,1-10.7,6A11.75,11.75,0,0,1,1,7.77V7A12.8,12.8,0,0,1,11.7,1,11.75,11.75,0,0,1,22,7Z"
                        />
                        <circle fill={color} cx="11.43" cy="7.37" r="2.57" />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

ViewIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ViewIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default ViewIcon;
