import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUniqueId } from '../../helpers';
import RenderIf from '../render-if';
import { StyledErrorMessage, StyledMessage } from './styled';

function Input({ id, value, name, type, ShowPass, label, placeholder, error, required, onChange, className, disabled }) {
    const [hideAndShowPassword, sethideAndShowPassword] = useState(false);
    const [inputText, setInputText] = useState('Mostrar');
    const [inputType, setInputType] = useState(type);

    const inputId = id || getUniqueId('input');
    const hasError = !!error;
    const hasShowPassword = !!ShowPass;
    const hasLabel = !!label;

    // show and hide the password inputs handle
    const showAndHideHandle = () => {
        sethideAndShowPassword(!hideAndShowPassword);
        if (hideAndShowPassword) {
            setInputText('Mostrar');
            setInputType('password');
        } else {
            setInputText('Ocultar');
            setInputType('text');
        }
    };

    return (
        <div className={`mb-4 ${className}`}>
            <Form.Group controlId={inputId} className="app-line-height-0">
                <RenderIf isTrue={hasLabel}>
                    <Form.Label className="text-app-gray-2 app-font-14 font-weight-500 mb-2">
                        {label}

                        <RenderIf isTrue={required}>
                            <span className="app-font-18 text-primary app-line-height-0">&nbsp;*</span>
                        </RenderIf>
                    </Form.Label>
                </RenderIf>

                <Form.Control
                    className="rounded-pill app-font-14"
                    type={inputType}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                />

                {/* Messages: Errors & show-hide Password  */}
                <RenderIf isTrue={hasShowPassword}>
                    <div className="d-flex">
                        <RenderIf isTrue={hasError}>
                            <StyledErrorMessage>{error}</StyledErrorMessage>
                        </RenderIf>

                        <StyledMessage onClick={showAndHideHandle}>{inputText}</StyledMessage>
                    </div>
                </RenderIf>

                <RenderIf isTrue={hasError && !hasShowPassword}>
                    <StyledErrorMessage>{error}</StyledErrorMessage>
                </RenderIf>
            </Form.Group>
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    type: PropTypes.oneOf(['email', 'date', 'password', 'hidden', 'number', 'text']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    ShowPass: PropTypes.bool,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    id: '',
    value: '',
    name: undefined,
    type: 'text',
    label: '',
    placeholder: '',
    error: '',
    required: false,
    onChange: () => {},
    className: '',
    ShowPass: false,
    disabled: false,
};

export default Input;
