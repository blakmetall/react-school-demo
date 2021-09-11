import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { RenderIf } from '..';
import ChatParticipantsList from './participantsList';
import ChatWindow from './window';
import theme from '../../theme';
import { getAge, getCurrentTimestamp } from './helpers';
import { useChatRoomConversation, useCurrentParticipant } from './hooks';
import { updateChatRoomConversation } from '../../store/actions/chat';
import {
    StyledChatContainer,
    StyledChatForm,
    StyledChatFormSubmitBtn,
    StyledChatFormBtnIcon,
    StyledChatSidebar,
    StyledChatTitle,
    StyledContainer,
    StyledSidebarAvatar,
    StyledSidebarInfoWrapper,
} from './styled';

function Chat({
    chatParticipants,
    chatRoom,
    isIndividualChat,
    chatTitleLabel,
    chatTitle,
    chatDescription,
    className,
    onParticipantClick,
}) {
    const dispatch = useDispatch();
    const [messageInput, setMessageInput] = useState('');
    const chatRoomConversation = useChatRoomConversation(chatRoom);
    const formRef = useRef();

    const currentParticipant = useCurrentParticipant(chatParticipants);
    const { name, photoUrl, dateOfBirth, profileId } = currentParticipant;
    const dateOfBirthTimestamp = dateOfBirth && dateOfBirth.seconds ? dateOfBirth.seconds : undefined;

    const handleOnSendNewMessage = e => {
        e.preventDefault();

        const message = messageInput.trim();

        if (chatRoom && chatRoom.id && message) {
            const currentTimestamp = getCurrentTimestamp();

            const newMessage = {
                messages: [
                    {
                        date: currentTimestamp,
                        message,
                    },
                ],
                updatedAt: currentTimestamp,
                profileId,
            };

            const newConversation = [...chatRoomConversation, newMessage];

            setMessageInput('');
            formRef.current.reset();

            dispatch(updateChatRoomConversation(chatRoom.id, newConversation));
        }
    };

    const handleOnChangeMessage = e => {
        if (chatRoom) {
            setMessageInput(e.target.value);
        } else {
            setMessageInput('');
        }
    };

    const handleOnKeyDownMessage = e => {
        const shouldSubmit = e.keyCode === 13 && e.shiftKey === false;

        if (shouldSubmit) {
            e.preventDefault();
            formRef.current.dispatchEvent(new Event('submit'));
        }
    };

    return (
        <StyledContainer className={className}>
            <div className="d-flex flex-column flex-lg-row">
                {/* chat sidebar */}
                <StyledChatSidebar>
                    <StyledChatTitle className="p-4">Sala de Chat</StyledChatTitle>

                    <Row className="no-gutters">
                        {/* photo and description details */}
                        <Col className={`flex-grow-1 col-12 ${isIndividualChat && `col-lg-6`}`}>
                            <StyledSidebarInfoWrapper>
                                {/* account */}
                                <div className="d-flex flex-column align-items-center mb-3">
                                    {/* photo */}
                                    <StyledSidebarAvatar name={name} srcImg={photoUrl} size="large" className="mb-3" />

                                    {/* name */}
                                    <div className="font-weight-600 mb-2">{name}</div>

                                    {/* age */}
                                    <RenderIf isTrue={!!dateOfBirthTimestamp}>
                                        <div>{getAge(dateOfBirthTimestamp)} años</div>
                                    </RenderIf>
                                </div>

                                {/* title and description */}
                                <div className="px-4">
                                    <RenderIf isTrue={!!chatTitleLabel && !!chatTitle}>
                                        <div className="mb-2">
                                            <b>{chatTitleLabel}: </b> <span>{chatTitle}</span>
                                        </div>
                                    </RenderIf>

                                    <RenderIf isTrue={!chatTitleLabel && !!chatTitle}>
                                        <div className="mb-2">
                                            <span>{chatTitle}</span>
                                        </div>
                                    </RenderIf>

                                    <RenderIf isTrue={!!chatDescription}>
                                        <div>{chatDescription}</div>
                                    </RenderIf>
                                </div>
                            </StyledSidebarInfoWrapper>
                        </Col>

                        {/* participants list */}
                        <RenderIf isTrue={isIndividualChat}>
                            <Col className="flex-grow-1 col-12 col-lg-6">
                                <ChatParticipantsList
                                    currentParticipant={currentParticipant}
                                    chatParticipants={chatParticipants}
                                    onParticipantClick={onParticipantClick}
                                />
                            </Col>
                        </RenderIf>
                    </Row>
                </StyledChatSidebar>

                {/* chat content */}
                <StyledChatContainer>
                    {/* chat window */}
                    <ChatWindow
                        currentParticipant={currentParticipant}
                        chatRoom={chatRoom}
                        chatParticipants={chatParticipants}
                        chatRoomConversation={chatRoomConversation}
                        isIndividualChat={isIndividualChat}
                    />

                    {/* chat form */}
                    <StyledChatForm
                        ref={formRef}
                        className="d-flex justify-content-between align-items-center"
                        onSubmit={handleOnSendNewMessage}
                    >
                        {/* text input */}
                        <textarea
                            placeholder="Escribe..."
                            autoComplete="off"
                            value={messageInput}
                            onChange={handleOnChangeMessage}
                            onKeyDown={handleOnKeyDownMessage}
                        />

                        {/* chat submit */}
                        <div className="pr-3">
                            <StyledChatFormSubmitBtn type="submit">
                                <StyledChatFormBtnIcon size="lg" colorCircle={theme.bootstrap.success} color="white" />
                            </StyledChatFormSubmitBtn>
                        </div>
                    </StyledChatForm>
                </StyledChatContainer>
            </div>
        </StyledContainer>
    );
}

Chat.propTypes = {
    chatParticipants: PropTypes.array,
    chatRoom: PropTypes.any,
    isIndividualChat: PropTypes.bool,
    chatTitleLabel: PropTypes.string,
    chatTitle: PropTypes.string,
    chatDescription: PropTypes.string,
    className: PropTypes.string,
    onParticipantClick: PropTypes.func,
};

Chat.defaultProps = {
    chatParticipants: undefined,
    chatRoom: undefined,
    isIndividualChat: false,
    chatTitleLabel: undefined,
    chatTitle: undefined,
    chatDescription: undefined,
    className: '',
    onParticipantClick: () => {},
};

export default Chat;
