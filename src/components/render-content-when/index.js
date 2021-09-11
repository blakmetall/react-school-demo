import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import RenderIf from '../render-if';
import { StyledContainer, StyledTdContainer } from './styled';

function RenderContentWhen({ size, isTrue, showSpinnerIf, stopSpinnerIf, wrapElem, className, children }) {
    const contentLoaded = isTrue;
    const shouldStart = showSpinnerIf;
    const shouldStop = stopSpinnerIf;
    const shouldShowSpinner = shouldStart && !shouldStop;

    const getContent = () => {
        return (
            <>
                <RenderIf isTrue={shouldStart && !shouldStop}>
                    <div className={`w-100 h-100 ${className}`}>
                        <Spinner size={size} />
                    </div>
                </RenderIf>

                <RenderIf isTrue={contentLoaded}>{children}</RenderIf>
            </>
        );
    };

    if (!shouldShowSpinner && wrapElem === 'td') {
        return <td style={{ height: 0, overflow: 'hidden' }} />;
    }

    if (wrapElem === 'td') {
        return <StyledTdContainer hasStarted={shouldStart || contentLoaded}>{getContent()}</StyledTdContainer>;
    }

    return <StyledContainer hasStarted={shouldStart || contentLoaded}>{getContent()}</StyledContainer>;
}

RenderContentWhen.propTypes = {
    size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large']),
    isTrue: PropTypes.bool,
    showSpinnerIf: PropTypes.bool,
    stopSpinnerIf: PropTypes.bool,
    wrapElem: PropTypes.oneOf(['div', 'td']),
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RenderContentWhen.defaultProps = {
    size: 'x-small',
    isTrue: false,
    showSpinnerIf: false,
    stopSpinnerIf: false,
    wrapElem: 'div',
    className: '',
    children: [],
};

export default RenderContentWhen;
