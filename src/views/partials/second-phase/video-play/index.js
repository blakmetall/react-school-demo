import React from 'react';
import { PageContainer, PageHeading } from '../../../../components';
import { StyledIframe } from './styled';

const WatchClass = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Class Lorem Name" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <div>
                    {/* recibe  url de youtube y vimeo */}
                    <StyledIframe
                        title="video-title"
                        // src="https://www.youtube.com/embed/Wimkqo8gDZ0"
                        src="https://player.vimeo.com/video/243244233"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </PageContainer>
        </div>
    );
};

export default WatchClass;
