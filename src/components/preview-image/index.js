import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg, StyledModal } from './styled';
import { Button } from '..';

const PreviewImage = ({ show, onHide, src }) => {
    return (
        <StyledModal
            onRequestClose={onHide}
            isOpen={show}
            footer={
                <div className="d-flex justify-content-center align-items-center">
                    <Button className="mx-2" size="xs" label="Cerrar" onClick={onHide} variant="secondary" />
                </div>
            }
        >
            <div className="w-100">
                <StyledImg src={src} className="mb-3" />

                <a href={src} className="d-block text-primary text-center" download target="_blank" rel="noopener noreferrer">
                    Descargar archivo
                </a>
            </div>
        </StyledModal>
    );
};

PreviewImage.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    src: PropTypes.string,
};

PreviewImage.defaultProps = {
    show: false,
    onHide: () => {},
    src: undefined,
};

export default PreviewImage;
