import React, { useEffect, useState } from 'react';
import { isNumber } from '../helpers';
import { Textarea, ThemeWrapper } from '../components';

export default {
    title: 'Components/Textarea',
    component: Textarea,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = ({ ...args }) => {
    const [value, setValue] = useState('');

    return <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} />;
};
Default.args = {
    label: 'Default',
};

export const Required = ({ ...args }) => {
    const [value, setValue] = useState('');

    return <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} />;
};
Required.args = {
    label: 'Required text area',
    required: true,
};

export const ErrorMessage = ({ ...args }) => {
    const [value, setValue] = useState();
    const [error, setError] = useState('The value cannot be empty');

    const [value2, setValue2] = useState();
    const [error2, setError2] = useState('The value must be a number');

    useEffect(() => {
        const isValid = value && value.trim() !== '';

        if (isValid) {
            setError('');
        } else {
            setError('The value cannot be empty');
        }
    }, [value]);

    useEffect(() => {
        const isNotEmpty = value2 && value2.trim() !== '';
        const isValid = !!(isNotEmpty && isNumber(value2));

        if (isValid) {
            setError2('');
        } else {
            setError2('The value must be a number');
        }
    }, [value2]);

    return (
        <div>
            <Textarea
                {...args}
                label="Text area with error message"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                error={error}
            />

            <br />

            <Textarea
                {...args}
                label="Text area with number error message"
                type="text"
                value={value2}
                onChange={e => setValue2(e.target.value)}
                error={error2}
            />
        </div>
    );
};

export const Placeholder = ({ ...args }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <Textarea {...args} label="Placeholder" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
};
Placeholder.args = {
    placeholder: 'placeholder example',
};

export const MaxLength = ({ ...args }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <Textarea
                {...args}
                label="Max Length allowed"
                value={value}
                maxLength={100}
                onChange={e => setValue(e.target.value)}
            />
            <Textarea
                {...args}
                label="Max Length allowed"
                value={value}
                maxLength={150}
                onChange={e => setValue(e.target.value)}
            />
            <Textarea
                {...args}
                label="Max Length allowed"
                value={value}
                maxLength={300}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
};
MaxLength.args = {
    placeholder: 'Max Length allowed',
};

export const OnChange = () => {
    const [value, setValue] = useState('');

    const handleOnChange = e => {
        setValue(e.target.value);

        // eslint-disable-next-line
        alert('Text area changed');
    };

    return (
        <div>
            <Textarea label="On change event" value={value} onChange={handleOnChange} />
        </div>
    );
};
