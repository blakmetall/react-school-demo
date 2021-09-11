import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ListItem, ThemeWrapper } from '../components';

export default {
    title: 'Components/ListItem',
    component: ListItem,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => (
    <>
        <ListItem className="mb-3">
            <div>List item default 1</div>
        </ListItem>
        <ListItem className="mb-3">
            <div>List item default 2</div>
        </ListItem>
    </>
);

export const WithIcon = () => (
    <>
        <ListItem icon="puzzle" className="mb-3">
            <div>List item default 1</div>
        </ListItem>
        <ListItem icon="puzzle" className="mb-3">
            <div>List item default 2</div>
        </ListItem>
    </>
);

export const WithUrlAction = () => (
    <>
        <BrowserRouter>
            <ListItem icon="puzzle" className="mb-3" to="/" onClick={() => alert('item 1 clicked')}>
                <div>List item default 1</div>
            </ListItem>
            <ListItem icon="puzzle" className="mb-3" to="/" onClick={() => alert('item 2 clicked')}>
                <div>List item default 2</div>
            </ListItem>
        </BrowserRouter>
    </>
);
