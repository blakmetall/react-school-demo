import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const SendChatIcon = ({ color, circleColor, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <g id="be805f93-d309-4c1b-a391-ad78ae2b39df" data-name="Layer 2">
                    <g id="bd6a80f2-1cc4-4e44-8a35-2b1314e7653b" data-name="Capa 1">
                        <circle cx="26" cy="26" r="26" fill={circleColor} />
                        <path
                            d="M18.36,29.1l-4.64-2.85a1.06,1.06,0,0,1,.12-1.87L37.29,13.81A1.06,1.06,0,0,1,38.76,15L34.18,35.62a1.06,1.06,0,0,1-1.51.72l-6.33-3.17a1.06,1.06,0,0,0-1.44.51l-1.82,4a1.07,1.07,0,0,1-1.3.57h0a1,1,0,0,1-.72-1l-.22-5.46a1.08,1.08,0,0,1,.33-.81L32.42,20.25a.07.07,0,0,0-.09-.11L19.52,29.08A1.06,1.06,0,0,1,18.36,29.1Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

SendChatIcon.propTypes = {
    color: PropTypes.string,
    circleColor: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

SendChatIcon.defaultProps = {
    color: '#fff',
    circleColor: '#88bdda',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default SendChatIcon;
