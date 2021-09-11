import React, { useState } from 'react';
import { Checkbox, ThemeWrapper } from '../components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Label = ({ ...args }) => <Checkbox {...args} checked />;
Label.args = {
    label: 'Custom checkbox label',
};

export const StatusChange = () => {
    const [isChecked, setIsChecked] = useState(false);

    return <Checkbox label="Status change on click" checked={isChecked} onClick={checked => setIsChecked(checked)} />;
};

export const OnChangeEvent = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Checkbox
            label="On change custom event"
            checked={isChecked}
            onChange={() => {
                // eslint-disable-next-line
                alert('Checkbox changed');
            }}
            onClick={checked => setIsChecked(checked)}
        />
    );
};
