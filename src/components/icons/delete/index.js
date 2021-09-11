import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const DeleteIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.43 24.59">
                <path
                    d="M271.67,250H273v-1.17a.73.73,0,0,0-.21-.48.66.66,0,0,0-.48-.19l-6.76.05a.67.67,0,0,0-.48.2.7.7,0,0,0-.2.49V250h1.37v-.49l5.38,0Z"
                    transform="translate(-257.67 -247.6)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                />
                <path
                    d="M258.19,253.72l21.41-.16,0-2.18h-2v-1.14a.35.35,0,0,0-.1-.24.33.33,0,0,0-.24-.1l-4.38,0H271.5l-5.39.05h-1.37l-4.08,0a.34.34,0,0,0-.34.34v1.15h-2.15Z"
                    transform="translate(-257.67 -247.6)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                />
                <path
                    d="M278.55,254.52a.7.7,0,0,0-.56-.26l-18.18.14a.74.74,0,0,0-.71.86l3,15.83a.71.71,0,0,0,.72.59l12.25-.09a.74.74,0,0,0,.71-.6l2.89-15.87A.71.71,0,0,0,278.55,254.52ZM265,270.61a.73.73,0,0,1-.83-.6L262.13,257a.71.71,0,0,1,.6-.82.72.72,0,0,1,.83.6l2.08,13A.73.73,0,0,1,265,270.61Zm4,.05a.73.73,0,0,1-.73-.72l-.1-13.21a.72.72,0,0,1,.72-.72.71.71,0,0,1,.72.71l.11,13.21A.73.73,0,0,1,269,270.66Zm6.69-13.8-1.88,13.07a.72.72,0,1,1-1.43-.2l1.88-13.08a.71.71,0,0,1,.81-.61A.73.73,0,0,1,275.72,256.86Z"
                    transform="translate(-257.67 -247.6)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                />
            </svg>
        </StyledIcon>
    );
};

DeleteIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

DeleteIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default DeleteIcon;
