import React, { useState } from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';
import { PreviewImage, PreviewPdf, RenderIf } from '..';
import { PreviewIcon, PdfIcon } from '../icons';
import { StyledPreviewIconWrapper } from './styled';

function Preview({ src, type }) {
    const [isOpen, setIsOpen] = useState();

    if (src) {
        return (
            <>
                <StyledPreviewIconWrapper onClick={() => setIsOpen(!isOpen)}>
                    {/* preview img icon */}
                    <RenderIf isTrue={type === 'image'}>
                        <PreviewIcon color={theme.bootstrap.appBlue4} size="xs-2" />
                    </RenderIf>

                    {/* preview pdf icon */}
                    <RenderIf isTrue={type === 'pdf'}>
                        <PdfIcon color={theme.bootstrap.appBlue4} size="xs-2" />
                    </RenderIf>
                </StyledPreviewIconWrapper>

                {/* preview content: image */}
                <RenderIf isTrue={type === 'image'}>
                    <PreviewImage show={isOpen} onHide={() => setIsOpen()} src={src} />
                </RenderIf>

                {/* preview content: pdf */}
                <RenderIf isTrue={type === 'pdf'}>
                    <PreviewPdf show={isOpen} onHide={() => setIsOpen()} src={src} />
                </RenderIf>
            </>
        );
    }

    return <></>;
}

Preview.propTypes = {
    src: PropTypes.string,
    type: PropTypes.oneOf(['image', 'pdf']),
};

Preview.defaultProps = {
    src: undefined,
    type: 'image',
};

export default Preview;
