import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const ClosedBookIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.95 30.78">
                <g>
                    <g>
                        <path
                            className="cls-1"
                            fill={color}
                            d="M3.92,5.1a.46.46,0,0,1,.46-.46H20.31a.46.46,0,1,1,0,.91H4.38A.46.46,0,0,1,3.92,5.1Zm.46-1.4H20.31a.46.46,0,1,0,0-.91H4.38a.46.46,0,1,0,0,.91ZM25,7.51V29.87a.91.91,0,0,1-.91.91H4.21A4.22,4.22,0,0,1,0,26.57V4.21H0A4.22,4.22,0,0,1,4.21,0H24a.91.91,0,1,1,0,1.82h-.53V6.59H24A.92.92,0,0,1,25,7.51ZM1.82,4.21A2.39,2.39,0,0,0,4.21,6.59H22.6V1.82H4.21A2.39,2.39,0,0,0,1.82,4.21ZM23.13,8.42H4.21a4.19,4.19,0,0,1-2.39-.75v18.9A2.39,2.39,0,0,0,4.21,29H23.13Z"
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

ClosedBookIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

ClosedBookIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    className: undefined,
    style: undefined,
};

export default ClosedBookIcon;
