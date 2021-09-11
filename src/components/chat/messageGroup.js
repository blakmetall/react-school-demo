import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../render-if';
import { useOrderedMessages, useMessageGroupProfile } from './hooks';
import { StyledMessageAvatar, StyledMessageGroup } from './styled';
import ChatMessage from './message';

function ChatMessageGroup({ messageGroup, chatParticipants }) {
    const messages = !!messageGroup && !!messageGroup.messages ? messageGroup.messages : [];
    const orderedMessages = useOrderedMessages(messages);
    const mesageGroupProfile = useMessageGroupProfile(messageGroup, chatParticipants);

    if (messageGroup && mesageGroupProfile) {
        const { name, photoUrl, isSender } = mesageGroupProfile;

        return (
            <>
                <StyledMessageGroup className="d-flex" sender={isSender}>
                    <div>
                        <StyledMessageAvatar name={name} imgSrc={photoUrl} sender={isSender} size="small" />
                    </div>

                    {/* messages */}
                    <RenderIf isTrue={!!orderedMessages.length}>
                        <div>
                            {orderedMessages.map((m, index) => {
                                const key = `chat-message-${index}`;
                                const { message, date } = m;

                                return <ChatMessage key={key} isSender={isSender} message={message} date={date} />;
                            })}
                        </div>
                    </RenderIf>
                </StyledMessageGroup>
            </>
        );
    }

    return <></>;
}

ChatMessageGroup.propTypes = {
    messageGroup: PropTypes.any,
    chatParticipants: PropTypes.any,
};

ChatMessageGroup.defaultProps = {
    messageGroup: undefined,
    chatParticipants: undefined,
};

export default ChatMessageGroup;
