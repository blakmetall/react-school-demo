import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImportRecordsFlow } from 'react-rainbow-components';
import { CSVLink } from 'react-csv';
import { getUniqueId } from '../../helpers';
import FileInput from '../file-input';
import RenderIf from '../render-if';
import { SendIcon, CancelIcon } from '../icons';
import {
    StyledCancelBtn,
    StyledCSVLink,
    StyledFileInputContainer,
    StyledFileInputWrapper,
    StyledSendBtn,
    StyledIconWrapper,
} from './styled';

function ImportRecordsInput({
    id,
    label,
    placeholder,
    schema,
    required,
    onComplete,
    batchLoader,
    className,
    sampleFile,
    samplefileName,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [xlsData, setXlsData] = useState();
    const fileInputId = id || getUniqueId('file-input');
    const hasBatchLoader = !!batchLoader;
    const hasXlsData = !!xlsData;
    const hasXlsSample = !!sampleFile && typeof sampleFile === 'object' && sampleFile.length > 0;

    const toggleImporter = () => {
        setIsOpen(!isOpen);
    };

    const handleOnComplete = data => {
        toggleImporter();
        setXlsData(data);
    };

    const handleOnSend = () => {
        onComplete(xlsData);
        setXlsData();
    };

    return (
        <div className={`mb-4 ${className}`}>
            {/* input */}
            <div>
                <StyledFileInputContainer>
                    <div className="d-flex align-items-center justify-content-between">
                        <StyledFileInputWrapper className="w-100">
                            <FileInput
                                id={fileInputId}
                                label={label}
                                required={required}
                                placeholder={placeholder}
                                withOverlay
                                onOverlayClick={() => toggleImporter()}
                            />
                        </StyledFileInputWrapper>

                        {/* data action buttons */}
                        <RenderIf isTrue={hasXlsData}>
                            <div className="d-flex align-items-center pl-2">
                                {/* complete process */}
                                <StyledSendBtn className="btn-app-blue-3 mr-2" onClick={handleOnSend}>
                                    <StyledIconWrapper>
                                        <SendIcon />
                                    </StyledIconWrapper>
                                </StyledSendBtn>

                                {/* cancel import process */}
                                <StyledCancelBtn className="btn-danger" onClick={() => setXlsData()}>
                                    <StyledIconWrapper>
                                        <CancelIcon />
                                    </StyledIconWrapper>
                                </StyledCancelBtn>
                            </div>
                        </RenderIf>
                    </div>
                </StyledFileInputContainer>
            </div>

            <RenderIf isTrue={hasXlsSample}>
                <StyledCSVLink>
                    <CSVLink data={sampleFile} filename={samplefileName}>
                        Descargar archivo de ejemplo
                    </CSVLink>
                </StyledCSVLink>
            </RenderIf>

            {/* custom content to render; intented to be used when the process is running */}
            <RenderIf isTrue={hasBatchLoader}>
                <div className="mt-n2">{batchLoader}</div>
            </RenderIf>

            {/* hidden input */}
            <ImportRecordsFlow
                isOpen={isOpen}
                onRequestClose={() => toggleImporter()}
                schema={schema}
                onComplete={handleOnComplete}
                actionType="add-records"
            />
        </div>
    );
}

ImportRecordsInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    schema: PropTypes.any,
    sampleFile: PropTypes.any,
    samplefileName: PropTypes.string,
    required: PropTypes.bool,
    onComplete: PropTypes.func,
    batchLoader: PropTypes.any,
    className: PropTypes.string,
};

ImportRecordsInput.defaultProps = {
    id: '',
    label: '',
    placeholder: '',
    schema: undefined,
    sampleFile: [],
    samplefileName: 'example',
    required: false,
    onComplete: () => {},
    batchLoader: undefined,
    className: '',
};

export default ImportRecordsInput;
