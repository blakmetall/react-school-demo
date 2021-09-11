import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const BooksPillICon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.61 24.1">
                <g id="e97d89bd-de72-466f-b456-7d3b02860163" data-name="Layer 2">
                    <g id="a9e3c9ba-0967-450c-be05-e39d9bb63218" data-name="Capa 1">
                        <path
                            d="M4.3,3.62a.41.41,0,0,1,.43-.42l15.91.24a.42.42,0,0,1,.42.43.41.41,0,0,1-.43.42L4.72,4.05A.42.42,0,0,1,4.3,3.62ZM4.68,6.3l15.91.24A.43.43,0,0,0,21,6.12a.44.44,0,0,0-.42-.43L4.69,5.45a.42.42,0,0,0-.43.42A.43.43,0,0,0,4.68,6.3ZM21,8.38a.43.43,0,0,0-.42-.44L4.66,7.7a.41.41,0,0,0-.43.42.42.42,0,0,0,.42.43l15.91.25A.42.42,0,0,0,21,8.38ZM2.12,9.93l.12-8.21H1.18A.86.86,0,0,1,1.21,0L18.89.27a5.81,5.81,0,1,1-.18,11.62L1,11.61a.85.85,0,0,1,0-1.7Zm.85,0,15.77.24A4.1,4.1,0,0,0,18.87,2L3.09,1.73Zm17.48,5.71L4.54,15.41a.43.43,0,0,0,0,.85l15.91.25a.43.43,0,0,0,0-.86Zm0,2.25L4.51,17.66a.43.43,0,1,0,0,.85l15.92.25a.43.43,0,0,0,0-.86Zm0,2.26L4.47,19.91a.43.43,0,0,0,0,.85L20.37,21a.42.42,0,0,0,.43-.42A.41.41,0,0,0,20.38,20.16Zm4-1.78a5.82,5.82,0,0,1-5.9,5.72L.84,23.83a.86.86,0,1,1,0-1.71l1.06,0,.12-8.21H1a.86.86,0,1,1,0-1.71l17.68.28A5.8,5.8,0,0,1,24.42,18.38Zm-1.7,0a4.11,4.11,0,0,0-4-4.17L2.91,14l-.13,8.2,15.77.24A4.11,4.11,0,0,0,22.72,18.36Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

BooksPillICon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
BooksPillICon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default BooksPillICon;
