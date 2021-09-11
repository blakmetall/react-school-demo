import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../../../../../components/avatar';
import RenderIf from '../../../../../../../../components/render-if';
import { StyledCheckIcon, StyledButton } from './styled';

const AvatarGridOption = ({ avatarSlug, isSelected, onClick }) => {
    return (
        <StyledButton className="p-0 m-0" variant="" onClick={() => onClick(avatarSlug)}>
            <Avatar size="large" imgSrc={`/img/icons/avatars/${avatarSlug}.svg`} className="m-2" />

            <RenderIf isTrue={isSelected}>
                <StyledCheckIcon size="sm" />
            </RenderIf>
        </StyledButton>
    );
};

AvatarGridOption.propTypes = {
    avatarSlug: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
};
AvatarGridOption.defaultProps = {
    avatarSlug: undefined,
    isSelected: undefined,
    onClick: () => {},
};

export default AvatarGridOption;
