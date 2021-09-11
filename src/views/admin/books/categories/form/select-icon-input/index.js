import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { StyledCheckIcon, StyledContainer, StyledIcon, StyledIconWrapper } from './styled';
import { getIconSrc } from '../../../../../../helpers';
import { RenderIf } from '../../../../../../components';
import { getAvailableIcons } from './helpers';

const SelectIconInput = ({ value, onChange, className }) => {
    const iconsList = getAvailableIcons();

    const handleOnClickIcon = selectedIconSlug => {
        iconsList.forEach(iconSlug => {
            if (iconSlug === selectedIconSlug) {
                onChange(selectedIconSlug);
            }
        });
    };

    return (
        <div className={className}>
            <Row className="justify-content-center align-items-center">
                {iconsList.map((iconSlug, index) => {
                    const key = `key-${index}`;
                    const isSelected = value === iconSlug;
                    const iconSrc = getIconSrc(iconSlug);

                    return (
                        <StyledContainer key={key}>
                            <StyledIconWrapper onClick={() => handleOnClickIcon(iconSlug)} className="mx-1 my-1">
                                <StyledIcon src={iconSrc} />
                            </StyledIconWrapper>
                            <RenderIf isTrue={isSelected}>
                                <StyledCheckIcon size="sm" />
                            </RenderIf>
                        </StyledContainer>
                    );
                })}
            </Row>
        </div>
    );
};

SelectIconInput.propTypes = {
    value: PropTypes.any,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

SelectIconInput.defaultProps = {
    value: undefined,
    className: undefined,
    onChange: () => {},
};

export default SelectIconInput;
