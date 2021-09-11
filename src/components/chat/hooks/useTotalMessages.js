import { useMemo } from 'react';

export default function useTotalMessages(chatRoomConversation) {
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

        return counter;
    }, [chatRoomConversation]);
}
