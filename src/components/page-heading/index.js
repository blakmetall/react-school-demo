import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { RenderIf } from '..';
import {
    StyledBackLinkContainer,
    StyledChildrenContainer,
    StyledContainer,
    StyledInnerContainer,
    StyledLabel,
    StyledLeftArrowImg,
} from './styled';

function PageHeading({ label, content, returnEnabled, type, className, children }) {
    const history = useHistory();
    const canReturn = returnEnabled && !!history.length;

    const handleOnReturnClick = e => {
        e.preventDefault();

        if (canReturn) {
            history.goBack();
        }
    };

    return (
        <StyledContainer className={className} type={type}>
            <StyledInnerContainer className="d-flex align-items-center">
                {/* return link control */}
                <RenderIf isTrue={canReturn}>
                    <StyledBackLinkContainer>
                        {/* //'todo: Custom size */}
                        <a href="#!" onClick={handleOnReturnClick}>
                            <StyledLeftArrowImg src="/img/icons/general/left-arrow-blue.svg" alt="" />
                        </a>
                    </StyledBackLinkContainer>
                </RenderIf>

                {/* content */}
                <RenderIf isTrue={!!content}>
                    <div>{!!content && content()}</div>
                </RenderIf>

                {/* heading label */}
                <RenderIf isTrue={!!label}>
                    <StyledLabel className="text-bold-700 app-font-25">{label}</StyledLabel>
                </RenderIf>

                {/* children */}
                <RenderIf isTrue={!!children}>
                    <StyledChildrenContainer>
                        <div>{children}</div>
                    </StyledChildrenContainer>
                </RenderIf>
            </StyledInnerContainer>
        </StyledContainer>
    );
}

PageHeading.propTypes = {
    label: PropTypes.string,
    content: PropTypes.func,
    returnEnabled: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'secondary']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

PageHeading.defaultProps = {
    label: '',
    content: undefined,
    returnEnabled: true,
    type: 'default',
    className: undefined,
    children: undefined,
};

export default PageHeading;
