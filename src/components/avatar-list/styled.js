import styled from 'styled-components';

const StyledParagraph = styled.p.attrs(props => {
    const setFonsizeLabel = () => {
        switch (props.size) {
            case 'x-small':
                return '14px';

            case 'small':
                return '16px';

            case 'medium':
                return '18px';

            case 'large':
                return '21px';

            case 'x-large':
                return '25px';

            default:
                return null;
        }
    };
    return { fontSize: setFonsizeLabel() };
})`
    font-size: ${props => props.fontSize};
`;

export { StyledParagraph };
