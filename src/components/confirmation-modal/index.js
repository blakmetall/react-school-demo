import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal } from './styled';
import { Button, RenderIf } from '..';
import getIconSrc from './helpers/getIconSrc';

const ConfirmationModal = ({
    show,
    onHide,
    icon,
    title,
    subtitle,
    description,
    cancelLabel,
    confirmLabel,
    onConfirm,
    onCancel,
}) => {
    const hasTitle = !!title;
    const hasIcon = !!icon;
    const hasSubTitle = !!subtitle;
    const hasDescription = !!description;
    const hasConfirmLabel = !!confirmLabel;
    const hasCancelLabel = !!cancelLabel;

    const handleOnConfirm = () => {
        onConfirm();
        onHide();
    };

    const handleOnCancel = () => {
        onCancel();
        onHide();
    };

    // console.log('description', description);

    return (
        <StyledModal
            onRequestClose={handleOnCancel}
            isOpen={show}
            footer={
                <div className="d-flex justify-content-center align-items-center pt-1">
                    {/* cancel label */}
                    <RenderIf isTrue={hasCancelLabel}>
                        <Button className="mx-2" size="xs" label={cancelLabel} onClick={handleOnCancel} variant="secondary" />
                    </RenderIf>

                    {/* confirm label */}
                    <RenderIf isTrue={hasConfirmLabel}>
                        <Button label={confirmLabel} className="mx-2" size="xs" onClick={handleOnConfirm} variant="success" />
                    </RenderIf>
                </div>
            }
        >
            <RenderIf isTrue={hasIcon}>
                <div className="d-flex justify-content-center mb-4">
                    <img width="150px" height="150px" src={getIconSrc(icon)} alt="icon" />
                </div>
            </RenderIf>

            <RenderIf isTrue={hasTitle}>
                <h2 className=" app-font-25 text-center text-gray-600 mb-2">{title}</h2>
            </RenderIf>
            <RenderIf isTrue={hasSubTitle}>
                <p className={`app-font-19 text-center text-gray-500 ${hasDescription ? 'mb-2' : ''}`}>{subtitle}</p>
            </RenderIf>

            <RenderIf isTrue={hasDescription}>
                <p className="app-font-14 text-center text-gray-600">{description}</p>
            </RenderIf>
        </StyledModal>
    );
};

ConfirmationModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    cancelLabel: PropTypes.any,
    confirmLabel: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
};

ConfirmationModal.defaultProps = {
    show: false,
    onHide: () => {},
    icon: undefined,
    title: '',
    subtitle: '',
    description: '',
    cancelLabel: 'Cancelar',
    confirmLabel: 'Aceptar',
    onConfirm: () => {},
    onCancel: () => {},
};

export default ConfirmationModal;
