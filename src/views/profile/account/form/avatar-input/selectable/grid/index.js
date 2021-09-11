import React from 'react';
import PropTypes from 'prop-types';
import AvatarGridOption from './grid-option';

const avatarList = [
    'avatar-1',
    'avatar-2',
    'avatar-3',
    'avatar-4',
    'avatar-5',
    'avatar-6',
    'avatar-7',
    'avatar-8',
    'avatar-9',
    'avatar-10',
    'avatar-11',
    'avatar-12',
];

const AvatarsGrid = ({ selectedAvatar, onAvatarSelection }) => {
    const handleOnClick = avatarSelected => {
        onAvatarSelection(avatarSelected);
    };

    return avatarList.map((avatarSlug, i) => {
        const key = `avatar-${i}`;
        const isSelected = selectedAvatar === avatarSlug;

        return <AvatarGridOption key={key} avatarSlug={avatarSlug} isSelected={isSelected} onClick={handleOnClick} />;
    });
};

AvatarsGrid.propTypes = {
    selectedAvatar: PropTypes.string,
    onAvatarSelection: PropTypes.func,
};

AvatarsGrid.defaultProps = {
    selectedAvatar: undefined,
    onAvatarSelection: () => {},
};

export default AvatarsGrid;
