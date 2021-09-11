import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUniqueId } from '../../helpers';
import RenderIf from '../render-if';
import { StyledErrorMessage } from '../input/styled';
import { StyledFooter, StyledTextarea } from './styled';

function Textarea({ id, value, label, placeholder, error, disabled, required, onChange, maxLength, className, rows }) {
    const textareaId = id || getUniqueId('textarea');
    const hasError = !!error;

    const getFooter = () => {
        if (maxLength) {
            return <StyledFooter>{`Máx. ${maxLength} caracteres`}</StyledFooter>;
        }

        return undefined;
    };

    return (
        <div className={`mb-4 ${className}`}>
            <Form.Group controlId={textareaId} className="app-line-height-0">
                {/* label */}
                <Form.Label className="text-app-gray-2 app-font-14 font-weight-500 mb-2">
                    {label}

                    <RenderIf isTrue={required}>
                        <span className="app-font-18 text-primary app-line-height-0">&nbsp;*</span>
                    </RenderIf>
                </Form.Label>

                {/* textarea */}
                <StyledTextarea
                    className="app-font-14 input-bg"
                    value={value}
                    disabled={disabled}
                    rows={rows}
                    onChange={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    footer={getFooter()}
                />

                <RenderIf isTrue={hasError}>
                    <StyledErrorMessage>{error}</StyledErrorMessage>
                </RenderIf>
            </Form.Group>
        </div>
    );
}

Textarea.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    rows: PropTypes.number,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

Textarea.defaultProps = {
    id: '',
    value: '',
    label: '',
    error: '',
    disabled: false,
    required: false,
    placeholder: '',
    maxLength: undefined,
    rows: 3,
    className: '',
    onChange: () => {},
};

export default Textarea;
