import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const UploadIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.3 449.5">
                <g id="a159e933-bd51-4532-9c6b-11c3e77d9e7a" data-name="Layer 2">
                    <g id="bdad6f54-6cfc-432c-9b7b-dc35e79114d5" data-name="Capa 1">
                        <path
                            fill={color}
                            d="M395.5,117.4a140.87,140.87,0,0,0-261-46.8,80.69,80.69,0,0,0-14.8-1.4,77.2,77.2,0,0,0-77.1,77.1,84.28,84.28,0,0,0,1.6,16A107.29,107.29,0,0,0,0,248.8a114.7,114.7,0,0,0,29.1,75.9c19.3,21.8,44.8,34.7,72,36.2h86.8a13.5,13.5,0,0,0,0-27H102.3C61.4,331.4,27,292.5,27,248.7a80.15,80.15,0,0,1,39.7-69,13.61,13.61,0,0,0,5.9-16.4,49,49,0,0,1-3-17.2A50.19,50.19,0,0,1,119.7,96a49.24,49.24,0,0,1,17.1,3,13.56,13.56,0,0,0,16.9-6.9A113.86,113.86,0,0,1,370,129.6a13.48,13.48,0,0,0,11.2,12c44.5,7.6,78.1,48.7,78.1,95.6,0,49.7-39.1,92.9-87.3,96.6H298.3a13.5,13.5,0,0,0,0,27h75.2c30.5-2.2,59-16.2,80.2-39.6a124.53,124.53,0,0,0,32.6-84C486.2,181.1,447.9,131.2,395.5,117.4Z"
                        />
                        <path
                            fill={color}
                            d="M324.2,261.6a13.46,13.46,0,0,0,0-19.1L252.7,171a13.66,13.66,0,0,0-9.5-4,13.24,13.24,0,0,0-9.5,4l-71.5,71.5a13.55,13.55,0,0,0,9.5,23.1,13.17,13.17,0,0,0,9.5-4l48.5-48.5V436a13.5,13.5,0,0,0,27,0V213.1l48.5,48.5A13.34,13.34,0,0,0,324.2,261.6Z"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

UploadIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
UploadIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default UploadIcon;
