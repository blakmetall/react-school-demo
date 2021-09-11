import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIconSrc } from '../../helpers';
import { RenderIf } from '..';
import { StyledContainer, StyledIcon, StyledIconWrapper } from './styled';

const ListItem = ({ icon, to, className, children, onClick }) => {
    const iconSrc = getIconSrc(icon);
    const hasIcon = !!iconSrc;
    const hasRedirectEvent = !!to;

    const handleOnItemClick = e => {
        e.stopPropagation();
        if (hasRedirectEvent) {
            onClick();
        }
    };

    const renderIcon = () => (
        <StyledIconWrapper className="d-flex align-items-center justify-content-center h-100">
            <StyledIcon src={iconSrc} />
        </StyledIconWrapper>
    );

    return (
        <StyledContainer className={className}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center w-100">
                    {/* category icon */}
                    <RenderIf isTrue={hasIcon && hasRedirectEvent}>
                        <Link className="align-self-stretch" to={to} onClick={e => handleOnItemClick(e)} role="presentation">
                            {renderIcon()}
                        </Link>
                    </RenderIf>
                    <RenderIf isTrue={hasIcon && !hasRedirectEvent}>
                        <div className="align-self-stretch">{renderIcon()}</div>
                    </RenderIf>

                    {/* content */}
                    <RenderIf isTrue={hasIcon}>
                        <div className="flex-grow-1 h-100 px-3 px-md-5 py-2 py-md-0">
                            <div className="app-font-16 text-app-gray-2">{children}</div>
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={!hasIcon}>
                        <div className="flex-grow-1 h-100 px-3 px-md-4 py-3 py-md-4">
                            <div className="app-font-16 text-app-gray-2">{children}</div>
                        </div>
                    </RenderIf>
                </div>
            </div>
        </StyledContainer>
    );
};

ListItem.propTypes = {
    icon: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    onClick: PropTypes.func,
};

ListItem.defaultProps = {
    icon: '',
    to: undefined,
    className: '',
    children: [],
    onClick: () => {},
};

export default ListItem;
