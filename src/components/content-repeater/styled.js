import styled from 'styled-components';
import theme from '../../theme';

const StyledRepeatContent = styled.div``;

const StyledRepeatIconWrapper = styled.div`
    width: 18px;
    margin-right: 14px;

    svg {
        width: 100%;
    }

    &:hover {
        cursor: pointer;
    }
`;

const StyledRepeaterIconsWrapper = styled.div`
    margin-left: 5px;
    flex-shrink: 0;
`;

const StyledRepeatItem = styled.div`
    border-bottom: 1px solid ${theme.bootstrap.appGray4};
    padding-bottom: 1rem;

    ${props =>
        props.isDinamic &&
        `
        margin-bottom: 1.25rem;
    `}
`;

export { StyledRepeatContent, StyledRepeatIconWrapper, StyledRepeaterIconsWrapper, StyledRepeatItem };
