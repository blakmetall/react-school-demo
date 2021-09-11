import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUniqueId } from '../../helpers';
import RenderIf from '../render-if';
import { StyledErrorMessage } from '../input/styled';
import { StyledDatePicker } from './styled';

const Datepicker = ({
    id,
    value,
    label,
    error,
    disabled,
    required,
    formatStyle,
    maxDate,
    minDate,
    className,
    onChange,
    onClick,
    onFocus,
    onBlur,
}) => {
    const inputId = id || getUniqueId('datepicker-input');

    return (
        <div className={`mb-3 ${className}`}>
            <Form.Group controlId={inputId} className="app-line-height-0">
                <Form.Label className="text-app-gray-2 app-font-14 font-weight-500 mb-2">
                    {label}

                    <RenderIf isTrue={required}>
                        <span className="app-font-18 text-primary app-line-height-0">&nbsp;*</span>
                    </RenderIf>
                </Form.Label>

                {/* datepicker input */}
                <StyledDatePicker
                    id={inputId}
                    value={value}
                    disabled={disabled}
                    formatStyle={formatStyle}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={onChange}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="rounded-pill"
                    locale="es-ES"
                />

                <RenderIf isTrue={!!error}>
                    <StyledErrorMessage>{error}</StyledErrorMessage>
                </RenderIf>
            </Form.Group>
        </div>
    );
};

Datepicker.propTypes = {
    id: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

Datepicker.defaultProps = {
    id: undefined,
    value: undefined,
    label: '',
    error: undefined,
    disabled: false,
    required: false,
    formatStyle: 'medium',
    minDate: undefined,
    maxDate: undefined,
    className: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

export default Datepicker;
