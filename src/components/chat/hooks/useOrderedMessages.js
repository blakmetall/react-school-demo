import { useMemo } from 'react';
import { compareDate } from '../helpers';

export default function useOrderedMessages(messages) {
    return useMemo(() => {
        if (messages && messages.length) {
            const clonedMessages = [...messages];
            const orderedMessages = clonedMessages.sort(compareDate);
            return orderedMessages;
        }

        return [];
    }, [messages]);
}
