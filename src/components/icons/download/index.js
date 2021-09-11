import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const DownloadIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.09 30.71">
                <path
                    d="M-71.67,184h-2.87a.46.46,0,0,0-.46.47v4.08H-97.49v-4.08a.47.47,0,0,0-.46-.47h-2.87a.47.47,0,0,0-.47.47v7.42a.46.46,0,0,0,.47.46h29.15a.46.46,0,0,0,.47-.46v-7.42A.47.47,0,0,0-71.67,184Z"
                    transform="translate(101.29 -161.61)"
                    fill={color}
                />
                <rect x="10" width="10.09" height="3.53" rx="0.54" fill={color} />
                <path
                    d="M-92.39,178.74l5.21,6.11a1.37,1.37,0,0,0,1.87,0l5.21-6.11,5.22-6.11c.41-.49-.11-1.1-.94-1.1h-5.46v-5a.47.47,0,0,0-.47-.47H-90.9a.46.46,0,0,0-.46.47v5h-5.31c-.83,0-1.35.61-.94,1.1Z"
                    transform="translate(101.29 -161.61)"
                    fill={color}
                />
            </svg>
        </StyledIcon>
    );
};

DownloadIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

DownloadIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default DownloadIcon;
