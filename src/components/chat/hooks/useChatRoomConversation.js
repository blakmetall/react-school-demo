import { useMemo } from 'react';
import { compareUpdatedAt } from '../helpers';

export default function useChatRoomConversation(chatRoom) {
    return useMemo(() => {
        if (chatRoom && chatRoom.conversation) {
            const clonedConversation = [...chatRoom.conversation];
            const orderedConversation = clonedConversation.sort(compareUpdatedAt);
            return orderedConversation;
        }

        return [];
    }, [chatRoom]);
}
