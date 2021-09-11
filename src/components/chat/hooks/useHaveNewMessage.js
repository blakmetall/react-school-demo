import { useMemo } from 'react';

export default function useHaveNewMessage(chatRoomConversation, totalMessages) {
    return useMemo(() => {
        // eslint-disable-next-line
        let counter = 0;

        if (chatRoomConversation && chatRoomConversation.length) {
            chatRoomConversation.forEach(messageGroup => {
                if (messageGroup.messages && messageGroup.messages.length) {
                    // eslint-disable-next-line
                    counter += messageGroup.messages.length;
                }
            });
        }

        if (counter > totalMessages) {
            return true;
        }

        return false;
    }, [chatRoomConversation, totalMessages]);
}
