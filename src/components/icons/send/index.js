import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from '../styled';

const SendIcon = ({ color, size, style, className }) => {
    return (
        <StyledIcon size={size}>
            <svg
                className={className}
                style={style}
                enableBackground="new 0 0 465.882 465.882"
                viewBox="0 0 465.882 465.882"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill={color}
                    d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"
                />
            </svg>
        </StyledIcon>
    );
};

SendIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

SendIcon.defaultProps = {
    color: '#ffffff',
    size: undefined,
    style: undefined,
    className: undefined,
};

export default SendIcon;
