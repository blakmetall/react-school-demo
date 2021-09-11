import React from 'react';
import { ResponsiveControl, ThemeWrapper } from '../components';

export default {
    title: 'Components/ResponsiveControl',
    component: ResponsiveControl,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const VisibleOn = () => (
    <div>
        <ResponsiveControl visibleOn="xs">
            <div className="mb-3">
                Visible on <b>xs</b> and below
            </div>
        </ResponsiveControl>

        <ResponsiveControl visibleOn="sm">
            <div className="mb-3">
                Visible on <b>sm</b> and below
            </div>
        </ResponsiveControl>

        <ResponsiveControl visibleOn="md">
            <div className="mb-3">
                Visible on <b>md</b> and below
            </div>
        </ResponsiveControl>

        <ResponsiveControl visibleOn="lg">
            <div className="mb-3">
                Visible on <b>lg</b> and below
            </div>
        </ResponsiveControl>
    </div>
);

export const HiddenOn = () => (
    <div>
        <ResponsiveControl hiddenOn="xs">
            <div className="mb-3">
                Hidden on <b>xs</b> and below
            </div>
        </ResponsiveControl>

        <ResponsiveControl hiddenOn="sm">
            <div className="mb-3">
                Hidden on <b>sm</b> and below
            </div>
        </ResponsiveControl>

        <ResponsiveControl hiddenOn="md">
            <div className="mb-3">
                Hidden on <b>md</b> and below
            </div>
        </ResponsiveControl>

        <ResponsiveControl hiddenOn="lg">
            <div className="mb-3">
                Hidden on <b>lg</b> and below
            </div>
        </ResponsiveControl>
    </div>
);
