import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { RenderIf } from '..';
import { useHaveNewMessage, useLastMessageIndex, useReceiverProfile, useTotalMessages } from './hooks';
import { StyledChatContainerWrapper, StyledChatWindowTitle, StyledSidebarUserAvatar } from './styled';
import ChatWindowContent from './windowContent';
import 'react-perfect-scrollbar/dist/css/styles.css';

function ChatWindow({ currentParticipant, chatRoom, chatParticipants, chatRoomConversation, isIndividualChat }) {
    const [userHasScrolled, setUserHasScrolled] = useState(false);
    const [prevTotalMessages, setPrevTotalMessages] = useState(0);
    const haveNewMessage = useHaveNewMessage(chatRoomConversation, prevTotalMessages);
    const totalMessages = useTotalMessages(chatRoomConversation);
    const lastMessageIndex = useLastMessageIndex(chatRoom);

    const receiverProfile = useReceiverProfile(currentParticipant, chatRoom, chatParticipants, isIndividualChat);
    const { name: receiverName, photoUrl: receiverPhotoUrl } = receiverProfile;

    const scrollRef = useRef();

    const scrollBottom = () => {
        // eslint-disable-next-line
        scrollRef.current._container.scrollTop = 999999999;
    };

    const handleOnYReachEnd = () => {
        setPrevTotalMessages(totalMessages);
        setUserHasScrolled(false);
    };

    const handleOnScrollY = () => {
        setUserHasScrolled(true);
    };

    const handleOnViewNewMessages = e => {
        e.preventDefault();
        scrollBottom();
    };

    useEffect(() => {
        if (haveNewMessage && scrollRef) {
            if (!userHasScrolled) {
                scrollBottom();
            }

            if (lastMessageIndex && chatRoomConversation[lastMessageIndex].profileId === currentParticipant.profileId) {
                scrollBottom();
            }
        }

        // eslint-disable-next-line
    }, [haveNewMessage, scrollRef]);

    useEffect(() => {
        return () => {
            setPrevTotalMessages(totalMessages);
        };
    }, [totalMessages]);

    return (
        <>
            <StyledChatWindowTitle className="d-flex align-items-center justify-content-between">
                {/* profile photo and name */}
                <RenderIf isTrue={!!receiverName}>
                    <div className="d-flex align-items-center">
                        <StyledSidebarUserAvatar name={receiverName} size="small" srcImg={receiverPhotoUrl} className="mr-3" />
                        <div>{receiverName}</div>
                    </div>
                </RenderIf>

                <RenderIf isTrue={haveNewMessage}>
                    <div className="pl-3 pr-3">
                        <a href="#!" className="text-success" onClick={handleOnViewNewMessages}>
                            Leer mensajes nuevos.
                        </a>
                    </div>
                </RenderIf>
            </StyledChatWindowTitle>

            <StyledChatContainerWrapper>
                <PerfectScrollbar ref={scrollRef} onYReachEnd={handleOnYReachEnd} onScrollY={handleOnScrollY}>
                    <ChatWindowContent chatRoomConversation={chatRoomConversation} chatParticipants={chatParticipants} />
                </PerfectScrollbar>
            </StyledChatContainerWrapper>
        </>
    );
}

ChatWindow.propTypes = {
    currentParticipant: PropTypes.any,
    chatRoom: PropTypes.any,
    chatParticipants: PropTypes.array,
    chatRoomConversation: PropTypes.array,
    isIndividualChat: PropTypes.bool,
};

ChatWindow.defaultProps = {
    currentParticipant: undefined,
    chatRoom: undefined,
    chatParticipants: undefined,
    chatRoomConversation: undefined,
    isIndividualChat: undefined,
};

export default ChatWindow;
