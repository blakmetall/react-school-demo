import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { Col, Row } from 'react-bootstrap';
import { ImportRecordsInput, RenderContentWhen, RenderIf, ThemeWrapper } from '../components';

export default {
    title: 'Components/ImportRecordsInput',
    component: ImportRecordsInput,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

const importSchema = {
    collection: 'collectionName',
    attributes: {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
        },
    },
};

export const Default = ({ ...args }) => <ImportRecordsInput {...args} schema={importSchema} />;
Default.args = {
    label: 'Importer example',
    placeholder: 'Upload your file...',
};

export const Required = ({ ...args }) => <ImportRecordsInput {...args} schema={importSchema} />;
Required.args = {
    label: 'Required label',
    placeholder: 'Upload your file...',
    required: true,
};

export const OnCompleteImport = ({ ...args }) => {
    const [importedData, setImportedData] = useState();

    const handleOnComplete = data => {
        setImportedData(data);
    };

    return (
        <>
            <ImportRecordsInput {...args} onComplete={handleOnComplete} />

            <Row>
                <Col className="col-12 col-md-6">
                    <h4>Schema</h4>

                    <ReactJson src={importSchema} />
                </Col>
                <Col className="col-12 col-md-6">
                    <RenderIf isTrue={!!importedData}>
                        <h4>Imported data</h4>

                        <ReactJson src={importedData} />
                    </RenderIf>
                </Col>
            </Row>
        </>
    );
};
OnCompleteImport.args = {
    label: 'Upload CSV file',
    placeholder: 'Select...',
    required: true,
    schema: importSchema,
};

export const BatchLoader = ({ ...args }) => {
    const [startProcess, setStartProcess] = useState();
    const [processCompleted, setProcessCompleted] = useState();

    const handleOnComplete = () => {
        setStartProcess(true);
        setTimeout(() => {
            setProcessCompleted(true);
        }, 3000);
    };

    return (
        <ImportRecordsInput
            label="Loader process"
            placeholder="Upload your file..."
            schema={importSchema}
            onComplete={handleOnComplete}
            batchLoader={
                <RenderContentWhen isTrue={processCompleted} showSpinnerIf={startProcess} stopSpinnerIf={processCompleted}>
                    <span>Simulated load completed</span>
                </RenderContentWhen>
            }
        />
    );
};
