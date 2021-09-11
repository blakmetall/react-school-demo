import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const CancelIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg
                className={className}
                style={style}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 301.076 301.076"
                xmlSpace="preserve"
            >
                <g>
                    <path
                        fill={color}
                        d="M98.159,150.539L10.858,237.84c-14.461,14.469-14.461,37.936,0,52.397
		c14.453,14.453,37.92,14.453,52.372,0l87.309-87.317l87.293,87.317c14.469,14.453,37.92,14.453,52.381,0
		c14.477-14.469,14.461-37.936,0-52.397l-87.293-87.301l87.301-87.285c14.469-14.477,14.469-37.936,0-52.397
		c-14.469-14.477-37.92-14.477-52.389,0l-87.293,87.309L63.23,10.858c-14.453-14.477-37.92-14.477-52.381,0
		c-14.461,14.461-14.461,37.895,0,52.364L98.159,150.539z"
                    />
                </g>
            </svg>
        </StyledIcon>
    );
};

CancelIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};
CancelIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default CancelIcon;
