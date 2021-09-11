import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { RenderIf } from '..';
import { StyledCard, StyledIconWrapper, StyledLabel, StyledProgressBar, StyledValue } from './styled';

const DashBoardCard = ({ value, label, icon, progress, variant, className }) => {
    const hasIcon = !!icon;
    const IconElem = icon;
    const iconColor = variant === 'brown' ? '#fff' : '#a1a1a1';

    return (
        <div className={className}>
            <StyledCard variant={variant}>
                <Card.Body>
                    <div className="d-flex justify-content-between mx-0 px-0 mb-3">
                        {/* value and title */}
                        <div>
                            <StyledValue className="font-weight-bold line-height-0 mb-1" variant={variant}>
                                {value}
                            </StyledValue>
                            <StyledLabel className="line-height-0" variant={variant}>
                                {label}
                            </StyledLabel>
                        </div>

                        {/* icon */}
                        <RenderIf isTrue={hasIcon}>
                            <StyledIconWrapper variant={variant}>
                                <IconElem size="xs" color={iconColor} />
                            </StyledIconWrapper>
                        </RenderIf>
                    </div>

                    {/* progress */}
                    <StyledProgressBar now={progress} variant={variant} />
                </Card.Body>
            </StyledCard>
        </div>
    );
};

DashBoardCard.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    icon: PropTypes.any,
    progress: PropTypes.number,
    variant: PropTypes.oneOf(['light', 'brown']),
    className: PropTypes.string,
};

DashBoardCard.defaultProps = {
    value: undefined,
    label: undefined,
    icon: undefined,
    progress: 0,
    variant: 'light',
    className: undefined,
};

export default DashBoardCard;
