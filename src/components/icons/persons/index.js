import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const PersonsIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.53 25.86">
                <g>
                    <g>
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M16.26,14.14l-.2.17-.2.17-.43.32-3.08,6.33-.62-3.64L12.64,16l-.33.07a8.46,8.46,0,0,1-.88.1l-.49,0A8,8,0,0,1,9.1,16l.93,1.5-.58,3.7L6,14.49a5.58,5.58,0,0,1-.46-.39l-.06.05C2.21,17,1.33,21.44,1.1,23.76H20.46C19.82,17,17,14.63,16.26,14.14Z"
                        />
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M10.94,1a7.34,7.34,0,1,0,7.34,7.34A7.34,7.34,0,0,0,10.94,1Z"
                        />
                        <path
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                            strokeWidth="2px"
                            d="M32,18.93A.14.14,0,0,0,32,18.8a.14.14,0,0,0-.08-.12,3.7,3.7,0,0,1-1.56-1.5A2.85,2.85,0,0,0,32,17.9a.16.16,0,0,0,.14,0,.14.14,0,0,0,0-.14,24.78,24.78,0,0,1-1.26-5.19c-.19-1.09-.37-2.15-.62-3.1a5.42,5.42,0,0,0-.38-1.18A6,6,0,0,0,29.24,7a4.2,4.2,0,0,0-2.72-1.79,5.5,5.5,0,0,0-1.73-.28A5,5,0,0,0,21.64,6a4.9,4.9,0,0,0-1.9,2.44,8.9,8.9,0,0,0-.64,2.07c0,.2-.05.4-.06.59s-.08.48-.12.74a15.17,15.17,0,0,0,.19,4.24,17.3,17.3,0,0,1,2.27,7.67H32.45a13.65,13.65,0,0,0-1.12-4.48A4.33,4.33,0,0,0,32,18.93Zm-3.4-.88c-.09.11-1.82,1.24-1.82,1.24l.85,1.16-2.7,2.12h0l-2.7-2.12L23,19.29s-1.73-1.13-1.82-1.24S22,17,22,17l2.89,5.59L27.78,17S28.7,17.86,28.55,18.05Z"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

PersonsIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

PersonsIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default PersonsIcon;
