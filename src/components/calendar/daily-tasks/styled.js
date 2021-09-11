import styled from 'styled-components';
import theme from '../../../theme';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: start;
    justify-content: flex-end;
    padding: 4px;
`;

export const StyledLabel = styled.div.attrs(props => {
    const setColor = () => {
        switch (props.type) {
            case 'tasks':
                return theme.bootstrap.success;

            case 'projects':
                return theme.bootstrap.success;

            case 'teamwork':
                return theme.bootstrap.appBrown;

            case 'consultancies':
                return theme.bootstrap.primary;

            case 'exam':
                return theme.bootstrap.primary;

            default:
                return null;
        }
    };
    return { color: setColor() };
})`
    /* traer type , de acuerdo a su string definir el color... */
    text-transform: uppercase;
    font-size: 10px;
    cursor: pointer;
    margin: 4px 0 2px;
    padding: 2px 10px 3px 9px;
    color: white;
    border-radius: 1rem;
    background: ${props => props.color};
`;
