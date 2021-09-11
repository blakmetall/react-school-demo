import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledAvatar from './styled';
import { getInitials } from '../../helpers';
import { RenderIf } from '..';

const AvatarGroup = ({ size, className, avatars, maxAvatars, to }) => {
    const [morePeopleSawThis, setMorePeopleSawThis] = useState(false);
    let avatarsMap = [];

    // replace keys for avatr rainbow component
    if (avatars) {
        avatarsMap = avatars.map(avatar => {
            return { src: avatar.imgSrc, initials: getInitials(avatar.name) };
        });
    }

    const getTheRest = () => {
        const allPersons = avatarsMap.length;
        const PersonInScene = maxAvatars;
        if (allPersons > PersonInScene) {
            setTimeout(() => {
                setMorePeopleSawThis(true);
            }, 10);
            const more = Number(allPersons - PersonInScene);
            return more;
        }
        return null;
    };

    const avatarGroup = (
        <>
            <StyledAvatar avatars={avatarsMap} maxAvatars={maxAvatars} size={size} />
            <RenderIf isTrue={morePeopleSawThis}>
                <p className="align-self-center"> +{getTheRest()}...</p>
            </RenderIf>
        </>
    );

    const classNames = `d-flex text-decoration-none text-gray-500 ${className}`;

    if (to) {
        return (
            <Link to={to} className={classNames}>
                {avatarGroup}
            </Link>
        );
    }

    return <div className={classNames}>{avatarGroup}</div>;
};

AvatarGroup.propTypes = {
    avatars: PropTypes.array,
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    className: PropTypes.string,
    maxAvatars: PropTypes.number,
    to: PropTypes.string,
};

AvatarGroup.defaultProps = {
    avatars: [],
    size: 'medium',
    className: '',
    maxAvatars: 3,
    to: undefined,
};

export default AvatarGroup;
