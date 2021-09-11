import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const School DemoIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.07 14.04">
                <g id="b5bc758b-cd07-4fd0-acb4-62bedd0fbba5" data-name="Layer 2">
                    <g id="b140ecb8-ba1a-42a8-b769-0774c85d997f" data-name="Capa 1">
                        <path
                            d="M23,0H2.13a2.13,2.13,0,0,0,0,4.26H7.58l-4,4a1.71,1.71,0,0,0,0,2.42l.6.6a1.71,1.71,0,0,0,2.42,0l4.18-4.18v5.21A1.72,1.72,0,0,0,12.48,14h.84A1.72,1.72,0,0,0,15,12.33V7.12l4.18,4.18a1.71,1.71,0,0,0,2.42,0l.6-.6a1.71,1.71,0,0,0,0-2.42l-4-4h4.72A2.14,2.14,0,0,0,23,0Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

School DemoIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

School DemoIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default School DemoIcon;
