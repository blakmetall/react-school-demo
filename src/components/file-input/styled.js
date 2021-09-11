import styled from 'styled-components';
import { FileSelector } from 'react-rainbow-components';
import theme from '../../theme';

const StyledFileInputOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    z-index: 1;

    &:hover {
        cursor: pointer;
    }
`;

const StyledFileSelector = styled(FileSelector)`
    padding: 0 2px;
    margin: 0;
    margin-top: 3px;

    & > div {
        height: 3rem;
        border-radius: 3px;
        background-color: #f2f7fb;
    }

    span {
        color: #bbbbbb;
    }

    span svg {
        color: #bbbbbb;
    }

    ${props =>
        props.isOverlayHovered &&
        `        
        > div {
            border-color: ${theme.bootstrap.primary};
        }
    `}
`;

export { StyledFileInputOverlay, StyledFileSelector };
