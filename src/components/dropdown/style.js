import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { AddIcon } from '../icons';

const StyledAccordion = styled(Accordion)`
    .card {
        border: 1px solid #efefef;
        overflow: hidden;

        .card-header {
            margin-bottom: 0;
            padding: 10px 0;
            color: white;

            &:hover {
                cursor: pointer;
            }

            ${props =>
                props.color &&
                `
                background-color: ${props.color};
            `}
        }

        .collapse {
            color: black;
        }
    }
`;

const StyledAccordionTitle = styled.p`
    padding-top: 5px;
    padding-bottom: 5px;
`;

const StyledAddIcon = styled(AddIcon)`
    width: 30px !important;
    height: 30px;
`;

const StyledHeader = styled.div.attrs(props => ({
    flexAlignment: props.centered ? 'center' : 'left',
}))`
    justify-content: ${props => props.flexAlignment};
`;

const StyledHeaderChildren = styled.div`
    &:hover {
        cursor: auto;
    }
`;

export { StyledAccordion, StyledAccordionTitle, StyledAddIcon, StyledHeader, StyledHeaderChildren };
