import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const EmailIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.18 12.32">
                <g id="f318e774-c861-4a26-b645-cf78ea0eaab8" data-name="Layer 2">
                    <g id="a63b02c6-126a-4851-8f17-565508294c92" data-name="Capa 1">
                        <path
                            d="M.36,11.05,8,6.52.32,2v8.8A1.35,1.35,0,0,0,.36,11.05Z"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.65"
                        />
                        <path
                            d="M8.37,6.72.49,11.37A1.21,1.21,0,0,0,1.54,12h15.1a1.2,1.2,0,0,0,1.1-.71L10,6.73l-.83.47Z"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.65"
                        />
                        <path
                            d="M17.85,10.77V2.1l-7.5,4.42,7.48,4.41A.78.78,0,0,0,17.85,10.77Z"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.65"
                        />
                        <path
                            d="M1.54.32A1.21,1.21,0,0,0,.33,1.53v0L9.19,6.8l8.66-5.1V1.54A1.21,1.21,0,0,0,16.64.33H1.54Z"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.65"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

EmailIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

EmailIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default EmailIcon;
