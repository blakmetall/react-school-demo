import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../avatar';

const Avatars = ({ avatars, size, className, maxLength }) => {
    const avatarsListSplited = avatars.slice(0, maxLength);

    return avatarsListSplited.map((v, i) => {
        const key = `key-${i}`;
        return (
            <div key={key} className={`d-flex flex-column ${className}`}>
                <Avatar label={v.name} name={v.name} size={size} imgSrc={v.imgSrc} />
            </div>
        );
    });
};

Avatars.propTypes = {
    avatars: PropTypes.array,
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    className: PropTypes.string,
    maxLength: PropTypes.number,
};

Avatars.defaultProps = {
    avatars: [],
    size: 'medium',
    className: 'pb-2',
    maxLength: 6,
};

export default Avatars;
