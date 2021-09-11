import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SimpleModal } from '../../../../../components';
import AvatarSelectable from './selectable';

const AvatarInput = ({ avatar, onChange, className }) => {
    const [displayAvatarModal, setDisplayAvatarModal] = useState();

    const handleOnChange = selectedAvatar => {
        setDisplayAvatarModal(false);
        onChange(selectedAvatar);
    };

    return (
        <div className={className}>
            {/* modal trigger */}
            <a href="#/" onClick={() => setDisplayAvatarModal(true)} className="font-weight-bold my-auto">
                Seleccionar un avatar.
            </a>

            {/* avatar modal selection */}
            <SimpleModal showIf={displayAvatarModal} onHide={() => setDisplayAvatarModal(false)}>
                <AvatarSelectable avatar={avatar} onChange={handleOnChange} />
            </SimpleModal>
        </div>
    );
};

AvatarInput.propTypes = {
    avatar: PropTypes.any,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

AvatarInput.defaultProps = {
    avatar: undefined,
    onChange: () => {},
    className: undefined,
};
export default AvatarInput;
