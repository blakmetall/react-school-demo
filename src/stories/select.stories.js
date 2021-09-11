import React, { useEffect, useState } from 'react';
import { Select, ThemeWrapper } from '../components';

export default {
    title: 'Components/Select',
    component: Select,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

const selectOptions = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
];

export const Default = ({ ...args }) => {
    const [value, setValue] = useState();

    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
};
Default.args = {
    label: 'Default select',
    options: selectOptions,
};

export const Selected = ({ ...args }) => <Select {...args} />;
Selected.args = {
    label: 'Selected by default',
    options: selectOptions,
    value: 'option-3',
};

export const Required = ({ ...args }) => {
    const [value, setValue] = useState();

    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} required />;
};
Required.args = {
    label: 'Required select',
    options: selectOptions,
};

export const Placeholder = ({ ...args }) => {
    const [value, setValue] = useState();

    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} />;
};
Placeholder.args = {
    label: 'Custom placeholder',
    options: selectOptions,
    placeholder: 'Choose one of the options below',
};

export const ErrorMessage = ({ ...args }) => {
    const [value, setValue] = useState();
    const [selectError, setSelectError] = useState();

    const handleOnValueChange = () => {
        const isEmpty = !value || (value && value.trim() === '');
        const selectMessage = isEmpty ? 'The item is mandatory.' : '';
        setSelectError(selectMessage);
    };

    useEffect(() => {
        handleOnValueChange();

        // eslint-disable-next-line
    }, [value]);

    return <Select {...args} value={value} onChange={e => setValue(e.target.value)} error={selectError} required />;
};
ErrorMessage.args = {
    label: 'Error message select',
    options: selectOptions,
};

export const OnChange = ({ ...args }) => {
    const [value, setValue] = useState();

    const handleOnValueChange = e => {
        setValue(e.target.value);

        // eslint-disable-next-line
        alert('Change');
    };

    return <Select {...args} value={value} onChange={handleOnValueChange} />;
};
OnChange.args = {
    label: 'On change event',
    options: selectOptions,
};
