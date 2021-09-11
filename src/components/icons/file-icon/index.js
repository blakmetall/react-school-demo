import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const FileIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 21.03">
                <g id="bec101d8-3244-4aca-b4bb-8c8bfe5305e5" data-name="Layer 2">
                    <g id="a68372dc-af9c-404a-8a39-519694577550" data-name="Capa 1">
                        <polygon
                            points="0.5 0.53 0.5 20.53 15.5 20.53 15.5 6.53 10 1.03 0.5 0.53"
                            fill="none"
                            stroke={color}
                            strokeMiterlimit="10"
                        />
                        <polyline points="10 0.03 10 8.03 15.5 8.03" fill="none" stroke={color} strokeMiterlimit="10" />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

FileIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

FileIcon.defaultProps = {
    color: '#a8a8a8',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default FileIcon;
