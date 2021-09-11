import React from 'react';
import { Spinner, ThemeWrapper } from '../components';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = ({ ...args }) => (
    <ThemeWrapper>
        <Spinner {...args} />
    </ThemeWrapper>
);
Default.args = {};

export const Sizes = ({ ...args }) => (
    <ThemeWrapper>
        <Spinner {...args} size="x-small" className="mb-3" />
        <Spinner {...args} size="small" className="mb-3" />
        <Spinner {...args} size="medium" className="mb-3" />
        <Spinner {...args} size="large" className="mb-3" />
    </ThemeWrapper>
);
Sizes.args = {};
