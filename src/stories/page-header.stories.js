import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button, PageHeading, ThemeWrapper } from '../components';

export default {
    title: 'Components/PageHeading',
    component: PageHeading,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => (
    <div className="bg-success p-3">
        <PageHeading label="Page heading title" />
    </div>
);

export const WithReturnUrl = () => (
    <div className="bg-success p-3">
        <BrowserRouter>
            <PageHeading label="Return url link" returnEnabled />
        </BrowserRouter>
    </div>
);

export const ChildrenSample1 = () => (
    <div className="bg-success p-3">
        <BrowserRouter>
            <PageHeading label="Children wrapper positioned to the right">custom content here</PageHeading>
        </BrowserRouter>
    </div>
);

export const ChildrenSample2 = () => (
    <div className="bg-success p-3">
        <BrowserRouter>
            <PageHeading label="Children wrapper positioned to the right">
                <Button onClick={() => alert('clicked')}>Sample btn</Button>
            </PageHeading>
        </BrowserRouter>
    </div>
);
