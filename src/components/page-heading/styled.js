import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import theme from '../../theme';

const StyledBackLinkContainer = styled.div`
    padding-right: 1.5rem;
`;

const StyledChildrenContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const StyledContainer = styled.div.attrs(props => {
    const backgroundColor = props.type === 'default' ? '#ffffff' : '#efefef';
    const textColor = props.type === 'default' ? theme.bootstrap.appGray : '#6b6b6b';

    return {
        backgroundcolor: backgroundColor,
        textcolor: textColor,
    };
})`
    padding: 3rem 1rem 2.5rem 1rem;

    background: ${props => props.backgroundcolor};
    color: ${props => props.textcolor};

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.sm}) {
        padding-top: 2rem;
        padding-bottom: 1.4rem;
    }
`;

const StyledInnerContainer = styled.div`
    padding-left: 1.5rem;

    @media (max-width: ${theme.bootstrap.menuBreakPointPx}) {
        padding-left: 0;
    }
`;

const StyledLabel = styled.div`
    line-height: 1.3em;
`;

const StyledLeftArrowImg = styled(Image)`
    width: 13px;
    height: auto;
`;

export {
    StyledBackLinkContainer,
    StyledChildrenContainer,
    StyledContainer,
    StyledInnerContainer,
    StyledLabel,
    StyledLeftArrowImg,
};
