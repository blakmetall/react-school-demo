import React, { useState, useEffect } from 'react';
import { Datetimepicker, ThemeWrapper } from '../components';

export default {
    title: 'Components/Datetimepicker',
    component: Datetimepicker,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => {
    const [value, setValue] = useState(new Date());

    return <Datetimepicker value={value} label="Choose a date" onChange={date => setValue(date)} />;
};

export const Required = () => {
    const [value, setValue] = useState();

    return <Datetimepicker value={value} label="The date is mandatory" onChange={date => setValue(date)} required />;
};

export const Error = () => {
    const [value, setValue] = useState();
    const [error, setError] = useState();

    const handleOnChange = date => {
        setValue(date);
    };

    useEffect(() => {
        if (!value) {
            setError('The date is required');
        } else {
            setError();
        }
    }, [value]);

    return <Datetimepicker value={value} error={error} label="Select a date" onChange={handleOnChange} required />;
};

export const OnChange = () => {
    const [value, setValue] = useState();

    const handleOnChange = date => {
        setValue(date);

        // eslint-disable-next-line
        alert(`New date: ${date}`);
    };

    return <Datetimepicker value={value} label="Select a date" onChange={handleOnChange} required />;
};
