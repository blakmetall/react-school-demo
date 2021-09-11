import React from 'react';
import { Modal } from 'react-bootstrap';
import RenderIf from '../../render-if';

const getTypeOfModal = (title, hasTitle, variant) => {
    return (
        <>
            {variant === 'blue' && (
                <Modal.Header closeButton className="bg-app-blue-2">
                    <RenderIf isTrue={hasTitle}>
                        <Modal.Title>{title}</Modal.Title>
                    </RenderIf>
                </Modal.Header>
            )}

            {variant === 'red' && (
                <Modal.Header closeButton className="bg-primary modal-title-text-center">
                    <RenderIf isTrue={hasTitle}>
                        <Modal.Title className="modal-title-text-center">{title}</Modal.Title>
                    </RenderIf>
                </Modal.Header>
            )}
        </>
    );
};

export default getTypeOfModal;
