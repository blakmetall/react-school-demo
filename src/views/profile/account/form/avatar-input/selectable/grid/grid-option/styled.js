import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { CheckIcon } from '../../../../../../../../components/icons';

const StyledButton = styled(Button)`
    position: relative;
`;

const StyledCheckIcon = styled(CheckIcon)`
    position: absolute;
    top: -100px;
    left: 70px;
`;

export { StyledCheckIcon, StyledButton };
