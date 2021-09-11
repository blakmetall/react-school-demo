import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUniqueId } from '../../helpers';
import RenderIf from '../render-if';
import { StyledErrorMessage } from '../input/styled';
import { StyledSelect } from './styled';

function Select({ id, label, value, placeholder, options, error, required, disabled, onChange, className }) {
    const inputId = id || getUniqueId('select');
    const hasError = !!error;
    const selectOptions = placeholder ? [{ label: placeholder, value: '' }, ...options] : [...options];

    return (
        <div className={`mb-4 ${className}`}>
            <Form.Group controlId={inputId} className="app-line-height-0">
                <Form.Label className="text-app-gray-2 app-font-14 font-weight-500 mb-2">
                    {label}

                    <RenderIf isTrue={required}>
                        <span className="app-font-18 text-primary app-line-height-0">&nbsp;*</span>
                    </RenderIf>
                </Form.Label>

                <StyledSelect options={selectOptions} onChange={onChange} value={value} disabled={disabled} />

                <RenderIf isTrue={hasError}>
                    <StyledErrorMessage>{error}</StyledErrorMessage>
                </RenderIf>
            </Form.Group>
        </div>
    );
}

Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

Select.defaultProps = {
    id: '',
    label: '',
    value: '',
    placeholder: 'Seleccionar...',
    options: [],
    error: '',
    required: false,
    disabled: false,
    onChange: () => {},
    className: '',
};

export default Select;
