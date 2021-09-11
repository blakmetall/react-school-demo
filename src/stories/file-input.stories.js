import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactJson from 'react-json-view';
import { hasValidMimeType } from '../helpers';
import { FileInput, ThemeWrapper } from '../components';

export default {
    title: 'Components/FileInput',
    component: FileInput,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = ({ ...args }) => <FileInput {...args} />;
Default.args = {
    label: 'File input',
    placeholder: 'Select your file...',
};

export const Label = ({ ...args }) => <FileInput {...args} />;
Label.args = {
    label: 'Custom input label',
    placeholder: 'Select your file...',
};

export const Required = ({ ...args }) => <FileInput {...args} />;
Required.args = {
    label: 'File input',
    placeholder: 'This is a mandatory field',
    required: true,
};

export const OnChange = ({ ...args }) => (
    <FileInput
        {...args}
        onChange={() => {
            // eslint-disable-next-line
            alert('changed');
        }}
    />
);
OnChange.args = {
    label: 'On change event',
    placeholder: 'Select a file to see action',
};

export const GridInputs = ({ ...args }) => {
    return (
        <Row>
            <Col className="col-12 col-sm-6">
                <FileInput {...args} label="Input 1" />
            </Col>
            <Col className="col-12 col-sm-6">
                <FileInput {...args} label="Input 2" />
            </Col>
        </Row>
    );
};

export const ErrorMessage = ({ ...args }) => {
    const [file, setFile] = useState();
    const [error, setError] = useState('The file is required');

    const handleFileChange = files => {
        const currentFile = files && files.length ? files[0] : undefined;
        setFile(currentFile);

        if (currentFile) {
            setError();
        } else {
            setError('The file is required');
        }
    };

    return (
        <>
            <FileInput {...args} label="Add file" onChange={handleFileChange} error={error} />
            <div className="pb-3" />
            <ReactJson src={file} />
        </>
    );
};

export const FileValidation = ({ ...args }) => {
    const [file, setFile] = useState();
    const [error, setError] = useState('The file must be jpg or png');

    useEffect(() => {
        if (file && hasValidMimeType(file, ['image/jpeg', 'image/png'])) {
            setError();
        } else {
            setError('The file must be jpg or png');
        }
    }, [file]);

    const handleFileChange = files => {
        const currentFile = files && files.length ? files[0] : undefined;
        setFile(currentFile);
    };

    return (
        <>
            <FileInput {...args} label="Upload a valid jpg or png file" onChange={handleFileChange} error={error} />
            <div className="pb-3" />
            <ReactJson src={file} />
        </>
    );
};
