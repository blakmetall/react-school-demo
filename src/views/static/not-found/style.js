import styled from 'styled-components';
import { Icon404 } from '../../../components/icons';

const StyledNotFoundWrapper = styled.div`
    height: 100vh;
`;

const StyledIcon404 = styled(Icon404)`
    width: 100%;
`;

const StyledTitle = styled.div`
    font-size: calc(50px + 0.5vw);
    font-family: sans-serif;
`;

const StyledParagraph = styled.div`
    font-size: calc(16px + 0.8vw);
    line-height: 20px;
`;

export { StyledNotFoundWrapper, StyledIcon404, StyledTitle, StyledParagraph };
