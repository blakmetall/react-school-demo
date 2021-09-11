import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FileInput } from '../../../../../components';

const PhotoInput = ({ onChange, className }) => {
    const fileRef = useRef();

    const handleOnChangeFile = files => {
        if (files && files.length) {
            onChange(files[0], undefined);
        }
    };

    const handleOnUploadClick = () => {
        fileRef.current.click();
    };

    return (
        <div className={className}>
            <span className="d-flex app-font-10">
                {/* file input */}
                <FileInput inputRef={fileRef} onChange={handleOnChangeFile} className="d-none" />

                {/* label */}
                <a href="#/" onClick={handleOnUploadClick} className="font-weight-bold">
                    Subir foto nueva.
                </a>
            </span>
        </div>
    );
};

PhotoInput.propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
};

PhotoInput.defaultProps = {
    onChange: () => {},
    className: undefined,
};

export default PhotoInput;
