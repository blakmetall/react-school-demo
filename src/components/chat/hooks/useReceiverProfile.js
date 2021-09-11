import { useMemo } from 'react';

export default function useReceiverProfile(currentParticipant, chatRoom, chatParticipants, isIndividualChat) {
    return useMemo(() => {
        if (currentParticipant && isIndividualChat && chatRoom && chatRoom.ref && chatParticipants && chatParticipants.length) {
            if (isIndividualChat && chatRoom && currentParticipant) {
                const { ref } = chatRoom;
                const refSplit = ref.split('-');
                const receiverProfileId = refSplit
                    .filter(profileId => profileId !== currentParticipant.profileId)
                    .join('')
                    .trim('');

                if (receiverProfileId) {
                    const found = chatParticipants.filter(participant => participant.profileId === receiverProfileId);

                    if (found && found.length === 1) {
                        return found[0];
                    }
                }
            }
        }

        return {};
    }, [currentParticipant, chatRoom, chatParticipants, isIndividualChat]);
}
