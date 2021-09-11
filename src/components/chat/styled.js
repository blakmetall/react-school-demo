import styled from 'styled-components';
import { Avatar } from '..';
import theme from '../../theme';
import { SendChatIcon } from '../icons';

const StyledContainer = styled.div`
    background: #f9f9f9;
    color: #a1a1a1;
    font-size: 13px;
    max-width: 1000px;
`;

const StyledChatContainer = styled.div`
    background: #fff;
    width: 100%;
`;

const StyledChatContainerWrapper = styled.div`
    height: 480px;
    border-bottom: 2px solid ${theme.bootstrap.appGray};
`;

const StyledChatForm = styled.form`
    textarea {
        box-sizing: border-box;
        border-color: transparent;
        outline: 0;
        box-shadow: none;
        width: 100%;
        resize: none;
        font-size: 13px;
        padding: 20px 20px 5px 20px;

        &::placeholder {
            color: #a1a1a1;
        }
    }
`;

const StyledChatFormSubmitBtn = styled.button`
    background: transparent;
    border: transparent;

    &:hover,
    &:active,
    &:focus {
        outline: none;
    }
`;

const StyledChatFormBtnIcon = styled(SendChatIcon)`
    width: 50px;
    height: auto;
    position: relative;
    top: -35px;

    &:hover {
        cursor: pointer;
    }
`;

const StyledMessage = styled.div`
    padding: 0.5rem 1.3rem;
    background: #efefef;
    border-radius: 12px;
    margin-bottom: 1em;
    word-wrap: break-word;
    font-size: 13px;
    white-space: pre-line;

    ${props =>
        props.sender &&
        `
        color: white;
        background: #4fa9ed;
    `}
`;

const StyledMessageAvatar = styled(Avatar)`
    margin-right: 1rem;

    ${props =>
        props.sender &&
        `
        margin-right: 0;
        margin-left: 1rem;
    `}
`;

const StyledMessageGroup = styled.div`
    max-width: 70%;
    margin-bottom: 7px;
    display: flex;

    ${props =>
        props.sender &&
        `
        flex-direction: row-reverse;
        margin-left: auto;
    `}
`;

const StyledMessageTime = styled.div`
    color: #ccc;
    text-align: right;
    font-size: 11px;

    ${props =>
        props.sender &&
        `
        color: #eee;
    `}
`;

const StyledChatSidebar = styled.div`
    width: 100%;
    max-width: 480px;
    border-right: 2px solid ${theme.bootstrap.appGray};

    @media (max-width: 1050px) {
        max-width: 330px;
    }

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.lg}) {
        max-width: 100%;
        border-right: 0;
        border-bottom: 2px solid ${theme.bootstrap.appGray};
    }
`;

const StyledChatTitle = styled.div`
    border-bottom: 2px solid ${theme.bootstrap.appGray};
`;

const StyledChatWindowContent = styled.div`
    padding: 1.5em;
`;

const StyledChatWindowTitle = styled.div`
    height: 69px;
    padding-left: 25px;
    border-bottom: 2px solid ${theme.bootstrap.appGray};
`;

const StyledSidebarAvatar = styled(Avatar)``;

const StyledSidebarInfoWrapper = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2rem;
    height: 550px;
    overflow-y: auto;

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.lg}) {
        height: auto;
    }
`;

const StyledSidebarUser = styled.div`
    padding: 0.5em 1.5em;
    border-bottom: 2px solid ${theme.bootstrap.appGray};
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
        background: #ffffff;
    }
`;

const StyledSidebarUserAvatar = styled(Avatar)``;

const StyledSidebarUsersList = styled.div`
    height: 550px;
    overflow-y: auto;
    border-left: 2px solid ${theme.bootstrap.appGray};

    @media (max-width: ${theme.bootstrap.gridBreakpointsPx.lg}) {
        border-left: 0;
        border-top: 2px solid ${theme.bootstrap.appGray};

        height: 256px;
    }
`;

const StyledSidebarUsersListWrapper = styled.div`
    max-height: 100%;
    overflow: hidden;
`;

export {
    StyledChatContainer,
    StyledChatContainerWrapper,
    StyledChatForm,
    StyledChatFormSubmitBtn,
    StyledChatFormBtnIcon,
    StyledChatSidebar,
    StyledChatTitle,
    StyledChatWindowContent,
    StyledChatWindowTitle,
    StyledMessage,
    StyledMessageAvatar,
    StyledMessageGroup,
    StyledMessageTime,
    StyledContainer,
    StyledSidebarAvatar,
    StyledSidebarInfoWrapper,
    StyledSidebarUser,
    StyledSidebarUserAvatar,
    StyledSidebarUsersList,
    StyledSidebarUsersListWrapper,
};
