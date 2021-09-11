import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonIcon } from 'react-bootstrap';
import { FileIcon, DeleteIcon, DownloadIcon } from '../../../../../../components/icons';
import theme from '../../../../../../theme'; 

// todo component
const FileItem = ({ className, taskName }) => {
    return (
        <div className={`${className} d-flex justify-content-between`}>
            <div className="d-flex align-items-start">
                <ButtonIcon variant="" className="p-0 mr-2">
                    <FileIcon size="xs" />
                </ButtonIcon>
                <h1 className="app-font-14 text-gray-500 mr-2 align-self-end">{taskName}</h1>
            </div>

            <div className="d-flex align-items-start flex-nowrap">
                <ButtonIcon variant="" className="p-0">
                    <DownloadIcon size="xs" color={theme.bootstrap.appBlue2} />
                </ButtonIcon>
                <ButtonIcon variant="" className="p-0 ml-3">
                    <DeleteIcon size="xs" color={theme.bootstrap.primary} />
                </ButtonIcon>
            </div>
        </div>
    );
};

FileItem.propTypes = {
    className: PropTypes.string,
    taskName: PropTypes.string,
};

FileItem.defaultProps = {
    className: undefined,
    taskName: '',
};

export default FileItem;
