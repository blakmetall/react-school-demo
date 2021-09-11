import { Textarea } from 'react-rainbow-components';
import styled from 'styled-components';
import theme from '../../theme';

const StyledFooter = styled.div`
    font-size: 12px;
    color: ${theme.bootstrap.appGray};
    text-align: right;
    padding: 10px;
    border-radius: 0 0 0.875rem 0.875rem;
    background-color: #eaeaea;
    padding: 16px;
`;

const StyledTextarea = styled(Textarea).attrs(props => ({
    hasFooter: !!props.footer,
}))`
    textarea {
        color: #343537;
        font-size: 14px;
        background-color: #f2f7fb;
        border-radius: 0px;
        border-top-left-radius: 1.2rem;
        border-top-right-radius: 1.2rem;

        ${props => `border-radius: ${!props.hasFooter && '1.2rem'} !important;`}

        &::placeholder {
            font-size: 14px;
        }

        &:focus,
        &:active {
            padding: 0.625rem 1rem;
        }
    }

    > div {
        border: 1px solid transparent;

        &:focus-within {
            border: solid 1px rgba(217, 0, 36, 1);
            box-shadow: 0 0 0 0.2rem rgba(217, 0, 36, 0.25);
        }
    }
`;

export { StyledFooter, StyledTextarea };
