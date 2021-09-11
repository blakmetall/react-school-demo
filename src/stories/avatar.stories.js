import React from 'react';
import { Avatar, ThemeWrapper } from '../components';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => <Avatar />;

export const Label = () => <Avatar label="Avatar Name" />;

export const NoDeformationsTest = () => (
    <Avatar label="Lorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large TextLorem Ipsum Large Text" />
);

export const Sizes = () => (
    <>
        <Avatar size="x-small" label="Custom size 'x-small'" className="mb-3" />
        <Avatar size="small" label="Custom size 'small'" className="mb-3" />
        <Avatar size="medium" label="Custom size 'medium'" className="mb-3" />
        <Avatar size="large" label="Custom size 'large" className="mb-3" />
        <Avatar size="x-large" label="Custom size 'x-large" className="mb-3" />
    </>
);

export const Image = () => <Avatar imgSrc="https://picsum.photos/300" />;

export const Initials = () => (
    <>
        <Avatar name="John Doe" label="John Doe" className="mb-3" />
        <Avatar name="Mary" label="Mary" className="mb-3" />
        <Avatar name="" label="No name passed" className="mb-3" />
        <Avatar name="Large Name Example Test" label="Large Name Example Test" className="mb-3" />
    </>
);

export const LabelColor = () => {
    return (
        <>
            <Avatar name="John Doe" label="John Doe" className="mb-3" labelColor="red" />
            <Avatar name="Mary" label="Mary" className="mb-3" labelColor="blue" />
            <Avatar name="" label="No name passed" className="mb-3" labelColor="#3285f1" />
        </>
    );
};
