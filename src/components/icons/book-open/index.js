import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const BookOpenIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.55 31.18">
                <g id="adeb1579-a2b7-4e5f-81d2-d1c839b42993" data-name="Layer 2">
                    <g id="a6e94486-8c05-4789-98f1-33e6293eb45d" data-name="Capa 1">
                        <path
                            d="M21.67,0H.86L.71,0h0L.56.06h0L.41.13h0l0,0L.27.24l0,0L.16.38l0,0L.08.52v0A1.21,1.21,0,0,0,0,.68v0A.88.88,0,0,0,0,.88V23.29a.88.88,0,0,0,.49.79l14.21,7a.89.89,0,0,0,.39.09.84.84,0,0,0,.46-.13A.88.88,0,0,0,16,30.3V27l2.55.55h.09a.48.48,0,0,0,.28-.1.46.46,0,0,0,.16-.34V24.16h2.62a.87.87,0,0,0,.88-.88V.88A.87.87,0,0,0,21.67,0ZM14.21,28.89,1.76,22.75V2.29L14.21,8.43Zm4-2.34L16,26.08V7.89a.88.88,0,0,0-.49-.79L6,2.43,18.17,5Zm2.63-4.14H19.19l-.14,0V4.68a.45.45,0,0,0-.35-.43L7.07,1.76H20.8Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

BookOpenIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
BookOpenIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default BookOpenIcon;
