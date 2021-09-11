import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const PersonIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.78 31.22">
                <g>
                    <g>
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M6.84,16c-.18-.15-.36-.3-.53-.46l-.08.06C.92,20.24,1,29.59,1,29.93v.29H23.74v-.31c-.38-9.28-4.09-13.67-5-14.29l-.22.2-.24.2c-.16.13-.33.26-.51.38"
                        />
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M12.54,1a8.54,8.54,0,1,0,8.53,8.53A8.54,8.54,0,0,0,12.54,1Z"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

PersonIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
PersonIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default PersonIcon;
