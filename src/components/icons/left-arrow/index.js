import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const LeftArrowIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.08 8.5">
                <g id="be5aa399-4135-49b1-8369-c4cb8237b1d4" data-name="Layer 2">
                    <g id="b525d65f-dd63-4337-9094-affe59a1bad8" data-name="Capa 1">
                        <polyline
                            points="4.08 1 1 4.25 4.08 7.5"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

LeftArrowIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

LeftArrowIcon.defaultProps = {
    color: '#c6c6c6',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default LeftArrowIcon;
