import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';
import theme from '../../theme';

export const StyledModal = styled(Modal)`
    width: 100%;
    max-width: 390px;
    max-height: 600px;
    padding-top: 60px;
    border-radius: 0.875rem;
    position: relative;
    overflow: hidden;

    footer {
        border-top: 0;
        padding-top: 15px;
        padding-bottom: 25px;
    }

    p:last-child {
        margin-bottom: 0 !important;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        width: 100%;
        background-color: ${theme.bootstrap.primary};
    }

    #modal-close-button {
        display: none;
    }
`;
