import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';
import theme from '../../theme';

const StyledImg = styled.img`
    width: 100%;
`;

const StyledModal = styled(Modal)`
    width: auto;
    max-width: 1100px;
    max-height: 90vh;
    padding-top: 40px;
    border-radius: 0.875rem;
    position: relative;
    overflow: hidden;

    footer {
        border-top: 0;
        padding-top: 15px;
        padding-bottom: 25px;
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

export { StyledImg, StyledModal };
