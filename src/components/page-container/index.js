import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../divider';
import { StyledContainer, StyledContainerInner, StyledChildrenContainer } from './styled';

function PageContainer({ contentPaddingClass, className, children }) {
    return (
        <StyledContainer className={className}>
            <Divider size="xs" className="bg-white" />
            <StyledContainerInner>
                <StyledChildrenContainer className={contentPaddingClass}>{children}</StyledChildrenContainer>
            </StyledContainerInner>
        </StyledContainer>
    );
}

PageContainer.propTypes = {
    contentPaddingClass: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

PageContainer.defaultProps = {
    contentPaddingClass: 'p-5',
    className: '',
    children: [],
};

export default PageContainer;
