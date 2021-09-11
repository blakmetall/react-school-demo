import React, { useState } from 'react';
import { Button, PreviewImage, ThemeWrapper } from '../components';

export default {
    title: 'Components/PreviewImage',
    component: PreviewImage,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => {
    const [isVisible, setIsVisible] = useState();

    return (
        <div>
            <Button label="View image" size="xs" onClick={() => setIsVisible(true)} />
            <PreviewImage show={isVisible} onHide={() => setIsVisible()} imgUrl="https://via.placeholder.com/800x450" />
        </div>
    );
};
