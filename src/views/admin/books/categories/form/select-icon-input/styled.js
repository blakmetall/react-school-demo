import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { CheckIcon } from '../../../../../../components/icons';

const StyledCheckIcon = styled(CheckIcon)`
    position: absolute;
    top: -75px;
    left: 50px;
`;

const StyledContainer = styled.div`
    position: relative;
`;

const StyledIcon = styled(Image)`
    height: 30px;
    width: auto;
`;

const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    width: 65px;
    height: 65px;
    cursor: pointer;
    border-radius: 9px;
    background: #d6cbb9;
`;

export { StyledCheckIcon, StyledContainer, StyledIcon, StyledIconWrapper };
