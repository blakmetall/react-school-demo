import React from 'react';
import { AvatarList, ThemeWrapper } from '../components';

export default {
    title: 'Components/AvatarList',
    component: AvatarList,
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
        name: 'Albert Einstein',
    },
    {
        name: 'Robert Einstein',
    },
    {
        imgSrc: 'https://picsum.photos/200',
        name: 'Albert Manson',
    },
    {
        name: 'Ana Einstein',
    },
    {
        name: 'Albert Robert',
    },
];

export const Default = () => (
    <>
        <AvatarList avatars={avatars} />
    </>
);

export const UnSeenList = () => (
    <>
        <AvatarList unSeenList avatars={avatars} size="medium" />
    </>
);

export const Sizes = () => (
    <div className="d-flex">
        <AvatarList avatars={avatars} size="x-small" className="mb-3 mr-2" />
        <AvatarList avatars={avatars} size="small" className="mb-3 mr-2" />
        <AvatarList avatars={avatars} size="medium" className="mb-3 mr-2" />
        <AvatarList avatars={avatars} size="large" className="mb-3" />
    </div>
);

export const MaxLenght = () => (
    <>
        <AvatarList maxLength={3} avatars={avatars} size="medium" />
    </>
);
