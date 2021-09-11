import { useMemo } from 'react';

export default function useMessageGroupProfile(messageGroup, chatParticipants) {
    return useMemo(() => {
        if (messageGroup && chatParticipants && chatParticipants.length) {
            const { profileId } = messageGroup;
            const found = chatParticipants.filter(participant => participant.profileId === profileId);

            if (found && found.length === 1) {
                return found[0];
            }
        }

        return {};
    }, [messageGroup, chatParticipants]);
}
