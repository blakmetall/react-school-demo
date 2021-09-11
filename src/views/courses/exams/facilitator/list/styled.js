import styled from 'styled-components';
import theme from '../../../../../theme';

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 300px) {
        flex-direction: column;
        justify-content: center;
        a {
            margin-bottom: 16px;
        }
    }
`;

export const StyledQualificationWrapper = styled.p`
    font-family: sans-serif;
    border: 1px solid ${theme.bootstrap.appGray3};
`;
