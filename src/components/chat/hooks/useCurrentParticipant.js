import { useMemo } from 'react';

export default function useCurrentParticipant(chatParticipants) {
    return useMemo(() => {
        if (chatParticipants && chatParticipants.length) {
            const filtered = chatParticipants.filter(v => v.isSender);

            if (filtered.length === 1) {
                return filtered[0];
            }
        }

        return {};
    }, [chatParticipants]);
}
