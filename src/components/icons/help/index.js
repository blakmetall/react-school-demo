import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const HelpIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <g id="ae050b2c-b40b-4fe7-a174-41b1f30115ca" data-name="Layer 2">
                    <g id="bd1efbb8-7714-490b-9aaf-0e54471c2d6f" data-name="Capa 1">
                        <circle cx="14" cy="14" r="13" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="2" />
                        <path
                            d="M16.14,18.41H12.85V13.29H13.9a2.51,2.51,0,0,0,1.9-.7,2.68,2.68,0,0,0,.68-1.94A2.72,2.72,0,0,0,16,8.9a1.74,1.74,0,0,0-1.44-.61,1.84,1.84,0,0,0-1.45.57,2.51,2.51,0,0,0-.5,1.69,1.36,1.36,0,0,0,0,.18,1.36,1.36,0,0,1,0,.18H9.23v-.38A4.51,4.51,0,0,1,10.74,7a5.83,5.83,0,0,1,4-1.34A5.21,5.21,0,0,1,18.57,7,5,5,0,0,1,20,10.78a4.49,4.49,0,0,1-1,3,4.92,4.92,0,0,1-2.86,1.55Zm-3.71,3.53A1.93,1.93,0,0,1,13,20.5a2.09,2.09,0,0,1,2.91,0,2,2,0,0,1,.6,1.44,2,2,0,0,1-.6,1.45,2,2,0,0,1-1.46.6A1.94,1.94,0,0,1,13,23.38,2,2,0,0,1,12.43,21.94Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

HelpIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

HelpIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default HelpIcon;
