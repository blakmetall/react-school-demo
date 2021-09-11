import styled from 'styled-components';
import { Avatar } from 'react-rainbow-components';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledAvatar = styled(Avatar).attrs(props => {
    const setIconSize = () => {
        switch (props.size) {
            case 'x-small':
                return '27px';

            case 'small':
                return '36px';

            case 'medium':
                return '45px';

            case 'large':
                return '90px';

            case 'x-large':
                return '120px';

            default:
                return null;
        }
    };
    return { iconSize: setIconSize() };
})`
    /* default background color */
    background-color: gray;
    width: ${props => props.iconSize};
    height: ${props => props.iconSize};
    flex-shrink: 0;

    /* fix internal font-size avatar */
    ${props => props.size === 'large' && `font-size: 40px !important;`}
    ${props => props.size === 'x-large' && `font-size: 60px !important;`}
`;

const StyledParagraph = styled.p.attrs(props => {
    const setFonsizeLabel = () => {
        switch (props.size) {
            case 'x-small':
                return '12px';

            case 'small':
                return '14px';

            case 'medium':
                return '16px';

            case 'large':
                return '18px';

            case 'x-large':
                return '21px';

            default:
                return null;
        }
    };
    return { fontSize: setFonsizeLabel() };
})`
    color: ${props => props.labelColor};
    font-size: ${props => props.fontSize};
`;

export { StyledParagraph, StyledWrapper, StyledAvatar };
