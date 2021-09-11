import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const EngineIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.35 25.36">
                <g id="aa4ff7e3-15c2-4c31-9088-ecc13dd51cb1" data-name="Layer 2">
                    <g id="ec9cf92a-88ba-4c7e-ad3d-f1e13732b5df" data-name="Capa 1">
                        <path
                            d="M23,9.93h-.83a10.17,10.17,0,0,0-.84-2L22,7.31A2.33,2.33,0,0,0,22,4l-.61-.61a2.33,2.33,0,0,0-3.28,0L17.48,4a10.17,10.17,0,0,0-2-.84V2.32A2.32,2.32,0,0,0,13.12,0h-.87A2.32,2.32,0,0,0,9.93,2.32v.83a10.17,10.17,0,0,0-2,.84L7.3,3.41A2.33,2.33,0,0,0,4,3.41L3.41,4a2.33,2.33,0,0,0,0,3.28L4,7.88a10.51,10.51,0,0,0-.84,2.05H2.32A2.32,2.32,0,0,0,0,12.25v.87a2.32,2.32,0,0,0,2.32,2.32h.83a10.17,10.17,0,0,0,.84,2l-.58.58a2.33,2.33,0,0,0,0,3.28L4,22A2.33,2.33,0,0,0,7.3,22l.58-.58a10.17,10.17,0,0,0,2,.84V23a2.32,2.32,0,0,0,2.32,2.32h.87A2.32,2.32,0,0,0,15.43,23v-.83a10.17,10.17,0,0,0,2-.84l.58.58a2.33,2.33,0,0,0,3.28,0l.61-.61a2.33,2.33,0,0,0,0-3.28l-.58-.58a10.17,10.17,0,0,0,.84-2H23a2.32,2.32,0,0,0,2.32-2.32v-.87A2.31,2.31,0,0,0,23,9.93ZM12.68,18.78a6.1,6.1,0,1,1,6.1-6.1A6.1,6.1,0,0,1,12.68,18.78Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

EngineIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

EngineIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default EngineIcon;
