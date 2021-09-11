import React from 'react';
import { PageContainer, ThemeWrapper } from '../components';

export default {
    title: 'Components/PageContainer',
    component: PageContainer,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => (
    <PageContainer>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam reiciendis corporis consectetur vitae illum non
            quisquam totam iure temporibus? Tempore dolore esse cupiditate delectus eveniet quasi labore totam aperiam impedit.
        </div>
    </PageContainer>
);

export const CustomContentPadding = ({ ...args }) => (
    <PageContainer {...args}>
        <div>
            Custom content padding:
            <br />
            <code>contentPaddingClass: `py-3 px-4`</code>
        </div>
    </PageContainer>
);
CustomContentPadding.args = {
    contentPaddingClass: 'py-3 px-4',
};
