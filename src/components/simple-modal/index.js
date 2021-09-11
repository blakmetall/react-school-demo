import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import getTypeOfModal from './helpers/getTypeOfModal';
import { StyledModal } from './styled';

function SimpleModal({ title, size, showIf, onHide, children, variant }) {
    const shouldShow = !!showIf;
    const hasTitle = !!title;

    return (
        <StyledModal show={shouldShow} onHide={() => onHide()} size={size}>
            {getTypeOfModal(title, hasTitle, variant)}
            <Modal.Body>{children}</Modal.Body>
        </StyledModal>
    );
}

SimpleModal.propTypes = {
    title: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    showIf: PropTypes.any,
    onHide: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    variant: PropTypes.oneOf(['blue', 'red']),
};

SimpleModal.defaultProps = {
    title: '',
    size: 'xl',
    showIf: undefined,
    onHide: () => {},
    children: undefined,
    variant: 'blue',
};

export default SimpleModal;
