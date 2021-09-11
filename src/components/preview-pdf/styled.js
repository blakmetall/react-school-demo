import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';
import theme from '../../theme';

const StyledIframe = styled.iframe`
    max-width: 100%;
    width: 1400px;
    height: 650px;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.md}) {
        width: 600px;
        height: 300px;
    }

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.sm}) {
        width: 300px;
        height: 200px;
    }
`;

const StyledModal = styled(Modal)`
    width: auto;
    max-width: 1400px;
    max-height: 95vh;
    padding-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
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

export { StyledIframe, StyledModal };
