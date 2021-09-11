import React from 'react';
import PropTypes from 'prop-types';
import { StyledSidebarUser, StyledSidebarUserAvatar, StyledSidebarUsersList, StyledSidebarUsersListWrapper } from './styled';

function ChatParticipantsList({ currentParticipant, chatParticipants, onParticipantClick }) {
    if (currentParticipant && chatParticipants) {
        return (
            <StyledSidebarUsersListWrapper>
                <StyledSidebarUsersList>
                    {/* user to chat */}
                    {chatParticipants
                        .filter(participant => participant.profileId !== currentParticipant.profileId)
                        .map((participant, index) => {
                            const key = `chat-participant-${index}`;
                            const { name, photoUrl } = participant;

                            return (
                                <StyledSidebarUser key={key} onClick={() => onParticipantClick(participant)}>
                                    <StyledSidebarUserAvatar imgSrc={photoUrl} name={name} size="small" />
                                    <div className="pl-3">{name}</div>
                                </StyledSidebarUser>
                            );
                        })}
                </StyledSidebarUsersList>
            </StyledSidebarUsersListWrapper>
        );
    }

    return (
        <StyledSidebarUsersListWrapper>
            <StyledSidebarUsersList />
        </StyledSidebarUsersListWrapper>
    );
}

ChatParticipantsList.propTypes = {
    currentParticipant: PropTypes.any,
    chatParticipants: PropTypes.any,
    onParticipantClick: PropTypes.func,
};

ChatParticipantsList.defaultProps = {
    currentParticipant: undefined,
    chatParticipants: undefined,
    onParticipantClick: () => {},
};

export default ChatParticipantsList;
