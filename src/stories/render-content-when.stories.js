import React, { useState } from 'react';
import { Button, RenderContentWhen, RenderIf, ThemeWrapper } from '../components';

export default {
    title: 'Components/RenderContentWhen',
    component: RenderContentWhen,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => {
    const [shouldShow, setShouldShow] = useState();
    const [shouldStop, setShouldStop] = useState();
    const [contentLoaded, setContentLoaded] = useState();

    return (
        <div>
            <Button label="Show spinner" onClick={() => setShouldShow(true)} className="mr-3" />

            <RenderIf isTrue={shouldShow}>
                <Button
                    label="Load content"
                    onClick={() => {
                        setContentLoaded(true);
                        setShouldStop(true);
                    }}
                />
            </RenderIf>

            <div className="pb-3" />

            <RenderContentWhen isTrue={contentLoaded} showSpinnerIf={shouldShow} stopSpinnerIf={shouldStop}>
                <div>Conditional content with spinner</div>
            </RenderContentWhen>
        </div>
    );
};
