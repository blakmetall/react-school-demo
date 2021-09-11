import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImportRecordsInput, RenderContentWhen } from '../../../../../components';
import { addCorporateEntitiesBatch } from '../../../../../store/actions/corporate-entities';
import { showBatchResultsNotification, showFailedNotification } from '../../../../../store/actions/notifications';
import importSchema from './importSchema';
import importSample from './importSample';

const CorporateEntitiesBatchUploader = () => {
    const [isRequesting, setIsRequesting] = useState(false);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [isRequestCompleted, setIsRequestCompleted] = useState(false);

    const dispatch = useDispatch();

    const handleOnSubmitBatch = csv => {
        if (csv && csv.data && csv.data.length) {
            setIsRequesting(true);
            setIsRequestSuccess(false);
            setIsRequestCompleted(false);

            dispatch(addCorporateEntitiesBatch(csv.data))
                .then(batchResults => {
                    setIsRequestSuccess(true);
                    dispatch(showBatchResultsNotification(batchResults));
                })
                .catch(() => {
                    setIsRequestSuccess(false);
                    dispatch(showFailedNotification());
                })
                .finally(() => {
                    setIsRequesting(false);
                    setIsRequestCompleted(true);
                });
        }
    };

    return (
        <ImportRecordsInput
            label="Archivo"
            placeholder="Carga masiva de datos"
            schema={importSchema}
            onComplete={data => handleOnSubmitBatch(data)}
            sampleFile={importSample}
            samplefileName="entidades-corporativas-ejemplo-importable"
            batchLoader={
                <RenderContentWhen isTrue={isRequestSuccess} showSpinnerIf={isRequesting} stopSpinnerIf={isRequestCompleted} />
            }
        />
    );
};

CorporateEntitiesBatchUploader.propTypes = {};

CorporateEntitiesBatchUploader.defaultProps = {};

export default CorporateEntitiesBatchUploader;
