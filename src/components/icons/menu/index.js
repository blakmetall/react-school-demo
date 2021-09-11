import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const MenuIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
                <g id="b6daf0ac-90ce-4d97-b22b-353b462207af" data-name="Layer 2">
                    <g id="a58cc2d2-2932-4a23-9b00-8aa6539b50d2" data-name="Capa 1">
                        <path d="M22,4H2A2,2,0,0,1,0,2H0A2,2,0,0,1,2,0H22a2,2,0,0,1,2,2h0A2,2,0,0,1,22,4Z" fill={color} />
                        <path d="M22,12H2a2,2,0,0,1-2-2H0A2,2,0,0,1,2,8H22a2,2,0,0,1,2,2h0A2,2,0,0,1,22,12Z" fill={color} />
                        <path d="M22,20H2a2,2,0,0,1-2-2H0a2,2,0,0,1,2-2H22a2,2,0,0,1,2,2h0A2,2,0,0,1,22,20Z" fill={color} />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

MenuIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

MenuIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default MenuIcon;
