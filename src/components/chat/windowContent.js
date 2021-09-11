import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from '..';
import ChatMessageGroup from './messageGroup';
import { StyledChatWindowContent } from './styled';

function ChatWindowContent({ chatParticipants, chatRoomConversation }) {
    const haveChatRoomConversation = !!chatRoomConversation;

    return (
        <StyledChatWindowContent>
            {/* conversation messages */}
            <RenderIf isTrue={!!haveChatRoomConversation && !!chatRoomConversation.length}>
                {chatRoomConversation.map((messageGroup, index) => {
                    const key = `chat-message-group-${index}`;

                    return (
                        <ChatMessageGroup
                            key={key}
                            index={index}
                            messageGroup={messageGroup}
                            chatParticipants={chatParticipants}
                        />
                    );
                })}
            </RenderIf>
        </StyledChatWindowContent>
    );
}

ChatWindowContent.propTypes = {
    chatParticipants: PropTypes.array,
    chatRoomConversation: PropTypes.array,
};

ChatWindowContent.defaultProps = {
    chatParticipants: undefined,
    chatRoomConversation: undefined,
};

export default ChatWindowContent;
