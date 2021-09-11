import styled from 'styled-components';
import theme from '../../../../theme';

const StyledContainer = styled.div`
    .dropdown-toggle {
        &:hover {
            text-decoration: none;
        }
    }

    .dropdown-menu {
        background: ${theme.bootstrap.primary};
        font-size: 11px;
        border: 0;
        border-radius: 14px;
        top: -2px !important;

        ${props =>
            props.isMobile &&
            `
            top: 8px !important;
        `}

        .dropdown-item {
            font-weight: 500;
            color: white;
            padding: 6px 18px;

            &:hover {
                color: #dddddd;
                background: transparent;
            }

            &.last {
                margin-top: 10px;
                padding-top: 8px;
                padding-bottom: 8px;
                background: #d6cbb9;
                color: white;
                border-bottom-left-radius: 14px;
                border-bottom-right-radius: 14px;
            }
        }
    }
`;

const StyledDropdownItemIcon = styled.img`
    width: 100%;
`;

const StyledDropdownItemIconWrapper = styled.div`
    width: 17px;
    margin-right: 14px;
`;

const StyledMenuOptionIcon = styled.img`
    width: 24px;
    height: auto;

    ${props =>
        props.isMobile &&
        `
        width: 22px;
    `}
`;

const StyledMobileMenuTrigger = styled.a`
    width: 22px;
`;

export { StyledContainer, StyledDropdownItemIcon, StyledDropdownItemIconWrapper, StyledMenuOptionIcon, StyledMobileMenuTrigger };
