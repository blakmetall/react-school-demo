import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import theme from '../../theme';

const StyledIconWrapper = styled.div`
    width: 15px;
`;

const StyledCSVLink = styled.div`
    padding-left: 4px;
    position: relative;
    top: -15px;

    a {
        color: ${theme.bootstrap.success} !important;
    }
`;

const StyledFileInputContainer = styled.div`
    position: relative;
    width: auto;
    height: auto;
`;

const StyledFileInputWrapper = styled.div`
    min-width: 0px;
`;

const StyledSendBtn = styled(Button)`
    color: white !important;
    height: auto;
    position: relative;
    top: 4px;
    padding: 11px 10px !important;
    border-radius: 4px !important;
`;

const StyledCancelBtn = styled(Button)`
    color: white !important;
    height: auto;
    position: relative;
    top: 4px;
    padding: 11px 10px !important;
    border-radius: 4px !important;
`;

export { StyledIconWrapper, StyledCSVLink, StyledFileInputContainer, StyledFileInputWrapper, StyledSendBtn, StyledCancelBtn };
