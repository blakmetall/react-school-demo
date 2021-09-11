import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../render-if';
import { StyledParagraph, StyledWrapper, StyledAvatar } from './styled';
import { getInitials } from '../../helpers';

const Avatar = ({ label, imgSrc, size, className, tooltip, name, labelColor }) => {
    const hasUrlImage = imgSrc && true;
    const haslabel = !!label;

    return (
        <StyledWrapper className={`${className}`}>
            <StyledAvatar src={hasUrlImage && imgSrc} title={tooltip} size={size} initials={getInitials(name)} />
            {/* label */}
            <RenderIf isTrue={haslabel}>
                <StyledParagraph size={size} labelColor={labelColor} className="ml-3 mb-0 align-self-center">
                    {label}
                </StyledParagraph>
            </RenderIf>
        </StyledWrapper>
    );
};

Avatar.propTypes = {
    imgSrc: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    name: PropTypes.string,
    tooltip: PropTypes.string,
    className: PropTypes.string,
    labelColor: PropTypes.string,
};
Avatar.defaultProps = {
    label: '',
    imgSrc: undefined,
    size: 'medium',
    name: 'User',
    tooltip: '',
    className: '',
    labelColor: '#adb5bd',
};

export default Avatar;
