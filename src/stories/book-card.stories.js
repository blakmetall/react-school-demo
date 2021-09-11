import React from 'react';
import { BookCard, ThemeWrapper } from '../components';

export default {
    title: 'Presentational/BookCard',
    component: BookCard,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = ({ ...args }) => <BookCard {...args} hasView hasEdit hasDelete />;
Default.args = {
    title: 'Default',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    portraitUrl: 'https://via.placeholder.com/200x300',
};

export const Events = ({ ...args }) => (
    <BookCard
        {...args}
        hasView
        hasEdit
        hasDelete
        onViewClick={() => {
            alert('VIEW action triggered');
        }}
        onEditClick={() => {
            alert('EDIT action triggered');
        }}
        onDeleteClick={() => {
            alert('DELETE action triggered');
        }}
    />
);
Events.args = {
    title: 'Default',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    portraitUrl: 'https://via.placeholder.com/200x300',
};

export const BookOptions = ({ ...args }) => <BookCard {...args} hasView hasEdit />;
BookOptions.args = {
    title: 'Not allowed to delete',
    description: 'This item does NOT have the DELETE action',
    portraitUrl: 'https://via.placeholder.com/200x300',
};
