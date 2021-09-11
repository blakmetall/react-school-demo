import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Message, ThemeWrapper } from '../components';

export default {
    title: 'Components/Message',
    component: Message,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = ({ ...args }) => <Message {...args} showIf />;
Default.args = {
    message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit sunt consectetur rerum neque repellendus eum molestias obcaecati facilis illum distinctio, voluptates ab, provident architecto omnis nesciunt. Quaerat, porro doloribus.',
};

export const Color = ({ ...args }) => <Message {...args} showIf />;
Color.args = {
    message: 'Colored message',
    color: 'orange',
};

export const Duration = ({ ...args }) => {
    return (
        <>
            <Message {...args} showIf message="Static message" />
            <Message {...args} showIf color="blue" message="Timer 3000ms" duration={1500} />
            <Message {...args} showIf color="orange" message="Timer 3000ms" duration={3000} />
            <Message {...args} showIf color="green" message="Timer 5000ms" duration={5000} />
        </>
    );
};

export const DisplayControl = ({ ...args }) => {
    const [isDisplayed, setIsDisplayed] = useState(true);

    return (
        <>
            <Button className="btn-sm" onClick={() => setIsDisplayed(!isDisplayed)}>
                Toggle message
            </Button>
            <br />
            <br />
            <Message {...args} showIf={isDisplayed} message="Message content" />
        </>
    );
};
