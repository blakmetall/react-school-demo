import React from 'react';
import PropTypes from 'prop-types';
import { StyledIframe, StyledModal } from './styled';
import { Button } from '..';

const PreviewPdf = ({ show, onHide, src }) => {
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
                <StyledIframe src={src} className="mb-3" />
            </div>
        </StyledModal>
    );
};

PreviewPdf.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    src: PropTypes.string,
};

PreviewPdf.defaultProps = {
    show: false,
    onHide: () => {},
    src: undefined,
};

export default PreviewPdf;
