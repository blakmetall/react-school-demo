import { useMemo } from 'react';

export default function useLastMessageIndex(chatRoom) {
    return useMemo(() => {
        if (chatRoom && chatRoom.conversation && chatRoom.conversation.length) {
            const { length } = chatRoom.conversation;

            const tmp = { foundIndex: undefined };

            chatRoom.conversation.forEach((v, index) => {
                if (index === length - 1) {
                    tmp.foundIndex = index;
                }
            });

            if (tmp.foundIndex) {
                return tmp.foundIndex;
            }
        }

        return undefined;
    }, [chatRoom]);
}
