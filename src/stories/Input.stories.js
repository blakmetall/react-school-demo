import React, { useEffect, useState } from 'react';
import { isNumber } from '../helpers';
import { Input, ThemeWrapper } from '../components';

export default {
    title: 'Components/Input',
    component: Input,
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

    return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;
};
Default.args = {
    label: 'Custom label',
};

export const Required = ({ ...args }) => {
    const [value, setValue] = useState('');

    return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;
};
Required.args = {
    label: 'Required input',
    required: true,
};

export const CustomTypes = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <div className="mb-2">
                <Input label="Email input" type="email" value={value} onChange={e => setValue(e.target.value)} />
            </div>

            <div>
                <Input label="Password input" type="password" value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </div>
    );
};

export const OnChange = () => {
    const [value, setValue] = useState('');

    const handleOnChange = e => {
        setValue(e.target.value);

        // eslint-disable-next-line
        alert('Input changed');
    };

    return (
        <div>
            <Input label="On change event" type="text" value={value} onChange={handleOnChange} />
        </div>
    );
};

export const Placeholder = ({ ...args }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <Input {...args} label="On change event" type="text" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
};
Placeholder.args = {
    placeholder: 'placeholder example',
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
            <Input
                {...args}
                label="Input with error message"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                error={error}
            />

            <br />

            <Input
                {...args}
                label="Input with number error message"
                type="text"
                value={value2}
                onChange={e => setValue2(e.target.value)}
                error={error2}
            />
        </div>
    );
};
