import React from 'react';
import { AvatarGroup, ThemeWrapper } from '../components';

export default {
    title: 'Components/Avatar Group',
    component: AvatarGroup,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

const avatars = [
    {
        imgSrc: 'https://picsum.photos/200',
        name: 'Lorem Name',
    },
    {
        name: 'Joe Doe',
    },
    {
        imgSrc: 'https://picsum.photos/200',
    },
    {
        name: 'Albert Einstein',
    },
    {
        name: 'Albert Einstein',
    },
    {
        name: 'Albert Einstein',
    },
    {
        name: 'Albert Einstein',
    },
];

export const Default = () => {
    return <AvatarGroup avatars={avatars} />;
};

export const MaxAvatars = () => {
    return <AvatarGroup avatars={avatars} maxAvatars={4} />;
};

export const Sizes = () => {
    return (
        <div>
            <AvatarGroup size="x-small" avatars={avatars} />
            <AvatarGroup size="small" avatars={avatars} />
            <AvatarGroup size="medium" avatars={avatars} />
            <AvatarGroup size="large" avatars={avatars} />
        </div>
    );
};
