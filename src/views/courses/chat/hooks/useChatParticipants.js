import { useMemo } from 'react';

export default function useChatParticipants(profiles, participants, currentProfile) {
    return useMemo(() => {
        if (profiles && participants && currentProfile) {
            return (
                Object.keys(participants)
                    // ensures the profiles loaded for the participants
                    .filter(key => {
                        const participant = participants[key];
                        return participant && participant.profileId && !!profiles[participant.profileId];
                    })
                    // prepares the chat fields
                    .map(key => {
                        const participant = participants[key];
                        const profile = profiles[participant.profileId];
                        const { firstName, lastName, email, photoUrl, dateOfBirth } = profile;

                        return {
                            participantId: key,
                            profileId: participant.profileId,
                            name: `${firstName} ${lastName}`,
                            email,
                            photoUrl,
                            dateOfBirth,
                            isSender: participant.profileId === currentProfile.id,
                        };
                    })
            );
        }

        return [];
    }, [profiles, participants, currentProfile]);
}
