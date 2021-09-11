import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const LeftArrowBlueIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.88 33.72">
                <g id="a396653a-e3b1-4773-a07a-81ccdc32c5d9" data-name="Layer 2">
                    <g id="a0c842d1-e13b-4088-a04e-93eb9666f8cc" data-name="Capa 1">
                        <polyline
                            points="16.78 29.62 10.44 23.24 4.11 16.86 10.44 10.49 16.78 4.11"
                            fill="none"
                            stroke={color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="8.21"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

LeftArrowBlueIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

LeftArrowBlueIcon.defaultProps = {
    color: '#4fa9ed',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default LeftArrowBlueIcon;
