import React from 'react';
import PropTypes from 'prop-types';
import { useTime } from 'react-timer-hook';
import { useMessageDate } from './hooks';
import { StyledMessageTime, StyledMessage } from './styled';

function ChatMessage({ isSender, message, date }) {
    const { minutes } = useTime();
    const messageDate = useMessageDate(date, minutes);

    if (message && date) {
        return (
            <StyledMessage sender={isSender}>
                <div>{message}</div>
                <StyledMessageTime sender={isSender}>{messageDate}</StyledMessageTime>
            </StyledMessage>
        );
    }

    return <></>;
}

ChatMessage.propTypes = {
    isSender: PropTypes.bool,
    message: PropTypes.string,
    date: PropTypes.any,
};

ChatMessage.defaultProps = {
    isSender: undefined,
    message: undefined,
    date: undefined,
};

export default ChatMessage;
