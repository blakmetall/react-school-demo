import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const EditICon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.7 25.28">
                <g>
                    <polygon
                        points="13.08 16.63 13.08 16.63 13.08 16.63 13.08 16.63"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M235.15,176.63v-10c0-.25-.19-.41-.48-.41h-16c-.29,0-.53.16-.53.41v19.19a.53.53,0,0,0,.53.49h6.63c1.08-.95,2.14-2.05,3.2-3.09C230.68,181,232.87,178.77,235.15,176.63Zm-2.47-7.09c0,.35-.15.63-.33.63H220.89c-.19,0-.33-.28-.33-.63v-.06c0-.35.14-.63.33-.63h11.46c.18,0,.33.28.33.63Zm0,3c0,.35-.15.63-.33.63H220.89c-.19,0-.33-.28-.33-.63v-.06c0-.35.14-.63.33-.63h11.46c.18,0,.33.28.33.63Zm0,3c0,.34-.15.63-.33.63H220.89c-.19,0-.33-.29-.33-.63v-.07c0-.35.14-.63.33-.63h11.46c.18,0,.33.28.33.63Z"
                        transform="translate(-217.59 -165.69)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M238.46,178.84a1.28,1.28,0,0,0-.08-1.81,1.54,1.54,0,0,0-1.77-.23h0l0,0-.16.09s-.06,0,0,0h-.1l-2.24,2.19-.13.12-6,5.79a4.28,4.28,0,0,0-.4.45h0l-2.34,4.29,4.28-2.21c.05,0,.28-.14.53-.38l6-5.8a.57.57,0,0,0,.11-.11l2.37-2.32v-.12Zm-2.39.46a3.09,3.09,0,0,0-1.25-.71l1.44-1.41a3.09,3.09,0,0,1,1.29.65,2.14,2.14,0,0,1,.68,1.16l-1.56,1.53A1.9,1.9,0,0,0,236.07,179.3Zm-.12,1.54L230,186.57l-.18.18a1.05,1.05,0,0,0-.35.71l-2.32,1.21a.76.76,0,0,0-.89-.7l1.33-2.43a1.46,1.46,0,0,0,.91-.36s0,0,0,0l6.11-5.9a1.49,1.49,0,0,1,.18-.18l.29.12-.11.11-6.32,6a2.8,2.8,0,0,0-.4.47c-.27.43-.25.7,0,1s.65.21,1.11-.09a1.79,1.79,0,0,0,.33-.25l6.33-6.14.13-.13a1.53,1.53,0,0,1,.14.29Z"
                        transform="translate(-217.59 -165.69)"
                        fill="none"
                        stroke={color}
                        strokeMiterlimit="10"
                    />
                </g>
            </svg>
        </StyledIcon>
    );
};

EditICon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

EditICon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default EditICon;
