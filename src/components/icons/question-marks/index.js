import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const QuestionMarksIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.71 11.13">
                <g id="b46396a1-0b0b-4ade-8094-5c3714e8280b" data-name="Layer 2">
                    <g id="acc9ae81-37d2-4058-b662-739b65800528" data-name="Capa 1">
                        <path
                            d="M3.74,11.13a5.12,5.12,0,0,1-1.52-.21A3.4,3.4,0,0,1,1,10.3a2.73,2.73,0,0,1-.77-1A3.28,3.28,0,0,1,0,7.92v0A3,3,0,0,1,.24,6.62a2.81,2.81,0,0,1,.65-.9,3.12,3.12,0,0,1,1-.6A6.32,6.32,0,0,1,3,4.77l.17-.95H4.79l.36,2.51-.08.09A4.64,4.64,0,0,0,3,6.85a1.12,1.12,0,0,0-.62,1v0a1,1,0,0,0,.37.82,1.7,1.7,0,0,0,1,.29A3,3,0,0,0,5,8.72,4.07,4.07,0,0,0,6.11,7.9L7.54,9.46a5.6,5.6,0,0,1-1.6,1.2A4.92,4.92,0,0,1,3.74,11.13ZM2.82.14h2.5V2.62H2.82Z"
                            fill={color}
                        />
                        <path
                            d="M10.57,4.79l.08-.08a4.64,4.64,0,0,0,2.09-.43,1.11,1.11,0,0,0,.62-1v0A1,1,0,0,0,13,2.44a1.7,1.7,0,0,0-1.05-.29,3,3,0,0,0-1.22.26,3.83,3.83,0,0,0-1.11.81L8.18,1.66A5.74,5.74,0,0,1,9.78.46,4.86,4.86,0,0,1,12,0,5.12,5.12,0,0,1,13.5.21a3.4,3.4,0,0,1,1.18.62,2.73,2.73,0,0,1,.76,1,3.32,3.32,0,0,1,.27,1.37v0a3,3,0,0,1-.24,1.27,2.81,2.81,0,0,1-.65.9,3.12,3.12,0,0,1-1,.6,6.32,6.32,0,0,1-1.19.35l-.16.94H10.93ZM10.4,8.51h2.5V11H10.4Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

QuestionMarksIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

QuestionMarksIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default QuestionMarksIcon;
