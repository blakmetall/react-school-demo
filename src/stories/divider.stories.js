import React from 'react';
import { Divider, ThemeWrapper } from '../components';

export default {
    title: 'Components/Divider',
    component: Divider,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Vertical = () => (
    <div>
        <div className="mb-3">
            Vertical spacing: <b>xxs</b>, <b>xs</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, <b>xl</b> and <b>xxl</b>
        </div>

        <Divider size="xxs" className="bg-success mb-3" />
        <Divider size="xs" className="bg-success mb-3" />
        <Divider size="sm" className="bg-success mb-3" />
        <Divider size="md" className="bg-success mb-3" />
        <Divider size="lg" className="bg-success mb-3" />
        <Divider size="xl" className="bg-success mb-3" />
        <Divider size="xxl" className="bg-success mb-3" />
    </div>
);
