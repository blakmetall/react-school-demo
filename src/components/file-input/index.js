import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getUniqueId } from '../../helpers';
import RenderIf from '../render-if';
import { StyledFileSelector, StyledFileInputOverlay } from './styled';
import { StyledErrorMessage } from '../input/styled';

const FileInput = ({ id, label, placeholder, error, required, onChange, withOverlay, onOverlayClick, inputRef, className }) => {
    const [isOverlayHovered, setIsOverlayHovered] = useState();
    const inputId = id || getUniqueId('file-input');
    const hasError = !!error;

    return (
        <div className={`mb-4 ${className}`}>
            <Form.Group controlId={inputId} className="app-line-height-0">
                <Form.Label className="text-app-gray app-font-14 font-weight-500 mb-2">
                    {label}

                    <RenderIf isTrue={required}>
                        <span className="app-font-18 text-primary app-line-height-0">&nbsp;*</span>
                    </RenderIf>
                </Form.Label>

                <div className="position-relative">
                    <StyledFileSelector
                        ref={inputRef}
                        placeholder={placeholder}
                        onChange={onChange}
                        isOverlayHovered={isOverlayHovered}
                    />

                    <RenderIf isTrue={withOverlay}>
                        <StyledFileInputOverlay
                            onClick={() => onOverlayClick()}
                            onMouseEnter={() => setIsOverlayHovered(true)}
                            onMouseLeave={() => setIsOverlayHovered(false)}
                        />
                    </RenderIf>
                </div>

                <RenderIf isTrue={hasError}>
                    <StyledErrorMessage>{error}</StyledErrorMessage>
                </RenderIf>
            </Form.Group>
        </div>
    );
};

FileInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    withOverlay: PropTypes.bool,
    onOverlayClick: PropTypes.func,
    inputRef: PropTypes.any,
    className: PropTypes.string,
};

FileInput.defaultProps = {
    id: '',
    label: '',
    placeholder: 'Seleccionar',
    error: '',
    required: false,
    onChange: () => {},
    withOverlay: false,
    onOverlayClick: undefined,
    inputRef: undefined,
    className: '',
};

export default FileInput;
