import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIconWrapper } from './styled';
import RenderIf from '../render-if';

const Button = ({ label, icon, iconPosition, size, variant, fullWidth, disabled, type, onClick, className }) => {
    const hasIcon = !!icon;
    const renderLeftIcon = hasIcon && iconPosition === 'left';
    const renderRightIcon = hasIcon && iconPosition === 'right';

    return (
        <StyledButton
            size={size}
            variant={variant}
            fullwidth={fullWidth ? 1 : 0}
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={className}
        >
            <div className="d-flex align-items-center justify-content-center">
                {/* left icon position */}
                <RenderIf isTrue={hasIcon && renderLeftIcon}>
                    <StyledIconWrapper size={size} position="left">
                        {icon}
                    </StyledIconWrapper>
                </RenderIf>

                {/* label */}
                <div>{label}</div>

                {/* right icon position */}
                <RenderIf isTrue={hasIcon && renderRightIcon}>
                    <StyledIconWrapper size={size} position="right">
                        {icon}
                    </StyledIconWrapper>
                </RenderIf>
            </div>
        </StyledButton>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Button.defaultProps = {
    label: '',
    icon: undefined,
    iconPosition: 'right',
    size: 'sm',
    variant: 'success',
    fullWidth: false,
    disabled: false,
    type: 'button',
    onClick: () => {},
    className: '',
};
export default Button;
