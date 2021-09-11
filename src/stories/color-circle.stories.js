import React from 'react';
import { ColorCircle, ThemeWrapper } from '../components';

export default {
    title: 'Components/ColorCircle',
    component: ColorCircle,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const ColorByIndexValue = () => (
    <div>
        <div className="mb-3">
            <ColorCircle index={0} />
        </div>
        <div className="mb-3">
            <ColorCircle index={1} />
        </div>
        <div className="mb-3">
            <ColorCircle index={2} />
        </div>
        <div className="mb-3">
            <ColorCircle index={3} />
        </div>
        <div className="mb-3">
            <ColorCircle index={4} />
        </div>
        <div className="mb-3">
            <ColorCircle index={5} />
        </div>
        <div className="mb-3">
            <ColorCircle index={6} />
        </div>
        <div className="mb-3">
            <ColorCircle index={7} />
        </div>
        <div className="mb-3">
            <ColorCircle index={8} />
        </div>
        <div className="mb-3">
            <ColorCircle index={9} />
        </div>
        <div className="mb-3">
            <ColorCircle index={10} />
        </div>
        <div className="mb-3">
            <ColorCircle index={11} />
        </div>
        <div className="mb-3">
            <ColorCircle index={12} />
        </div>
        <div className="mb-3">
            <ColorCircle index={13} />
        </div>
        <div className="mb-3">
            <ColorCircle index={14} />
        </div>
        <div className="mb-3">
            <ColorCircle index={15} />
        </div>
    </div>
);
