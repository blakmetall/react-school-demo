import React from 'react';
import PropTypes from 'prop-types';
import Avatars from './avatars';
import RenderIf from '../render-if';
import { StyledParagraph } from './styled';

const AvatarLists = ({ avatars, size, className, maxLength, unSeenList }) => {
    const peopleSawThis = !unSeenList;

    return (
        <div className={className}>
            <StyledParagraph size={size} className="text-app-gray mb-2">
                <RenderIf isTrue={peopleSawThis}>
                    <>Visto por...</>
                </RenderIf>
                <RenderIf isTrue={unSeenList}>
                    <>No lo han visto...</>
                </RenderIf>
            </StyledParagraph>
            <Avatars avatars={avatars} size={size} className="pb-2" maxLength={maxLength} />
        </div>
    );
};

AvatarLists.propTypes = {
    avatars: PropTypes.array,
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    unSeenList: PropTypes.bool,
    maxLength: PropTypes.number,
    className: PropTypes.string,
};

AvatarLists.defaultProps = {
    avatars: [],
    size: 'medium',
    unSeenList: false,
    maxLength: 6,
    className: '',
};

export default AvatarLists;
