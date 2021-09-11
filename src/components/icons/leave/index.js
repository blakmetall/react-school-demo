import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const LeaveIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.99 24">
                <g id="b0a215df-f6c3-4bfc-b6f1-6ef625aa5709" data-name="Layer 2">
                    <g id="b7d9cbfe-fb19-4808-8b21-fec5d7153a71" data-name="Capa 1">
                        <polyline
                            points="14.1 1.5 1.5 1.5 1.5 22.5 14.1 22.5"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                        />
                        <path
                            d="M15.15,6.62V8.73H9.06a1.35,1.35,0,0,0-1.35,1.35v4.06a1.35,1.35,0,0,0,1.35,1.35h6.09V17.6c0,.93.61,1.24,1.36.68l2.1-1.57,2.72-2,2.1-1.57a1.19,1.19,0,0,0,0-2l-2.1-1.57-2.72-2-2.1-1.57C15.76,5.39,15.15,5.69,15.15,6.62Z"
                            fill={color}
                        />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    );
};

LeaveIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

LeaveIcon.defaultProps = {
    color: '#fff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default LeaveIcon;
