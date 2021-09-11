import styled from 'styled-components';
import { ProgressBar } from 'react-rainbow-components';

const StyledIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;

const StyledIframeContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`;

const StyledProgressBar = styled(ProgressBar)``;

export { StyledIframe, StyledIframeContainer, StyledProgressBar };
