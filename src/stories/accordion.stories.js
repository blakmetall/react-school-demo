import React from 'react';
import { Accordion, ThemeWrapper } from '../components';

export default {
    title: 'Presentational/Accordion',
    component: Accordion,
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
        <Accordion title="Lorem Title">
            <h5>Background color and custom text color</h5>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius distinctio
                magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus pariatur.
            </div>
        </Accordion>
    </>
);
