import React from 'react';
import { Dropdown, ThemeWrapper } from '../components';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Title = ({ ...args }) => (
    <Dropdown {...args}>
        <div>...</div>
    </Dropdown>
);
Title.args = {
    title: 'Custom Title',
};

export const Icon = ({ ...args }) => (
    <Dropdown title="Custom Icon" {...args}>
        <div>...</div>
    </Dropdown>
);
Icon.args = {
    icon: 'add',
};

export const TitlePosition = ({ ...args }) => (
    <>
        <Dropdown title="Default title position" className="mb-5">
            <div>...</div>
        </Dropdown>
        <Dropdown title="Centered title position" {...args} centered>
            <div>...</div>
        </Dropdown>
    </>
);

export const CustomContent = () => (
    <Dropdown title="Custom Content">
        <div>
            <h3 className="app-font-21">Lorem ipsum</h3>
            <p className="mb-0 app-font-11">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio necessitatibus minus id odio,
                voluptatibus natus. Ipsa, enim. Explicabo sint quis sunt eum cupiditate minus rerum labore quam, magnam nam?
            </p>
        </div>
    </Dropdown>
);

export const Color = ({ ...args }) => (
    <Dropdown title="Bar Color" icon="add" {...args}>
        <div>...</div>
    </Dropdown>
);
Color.args = {
    color: 'orange',
};

export const HeaderReplacer = () => (
    <Dropdown
        icon="add"
        headerReplacer={() => (
            <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row w-100">
                <div className="app-font-19 font-weight-500 text-center mb-3 mb-lg-0">Some title Content</div>
                <div className="app-font-19 font-weight-500 text-center mb-3 mb-lg-0">
                    Asesoría de la tarea: <span> investigación lorem large text</span>
                </div>
                <div className="app-font-19 text-center font-weight-500">Viernes, 10/05/2020, 10:44 am</div>
            </div>
        )}
    />
);
