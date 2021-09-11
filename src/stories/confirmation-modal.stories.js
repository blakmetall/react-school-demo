import React, { useState } from 'react';
import { Button, ConfirmationModal, Select, ThemeWrapper } from '../components';

export default {
    title: 'Components/ConfirmationModal',
    component: ConfirmationModal,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => {
    const [isVisible, setIsVisible] = useState();

    return (
        <div>
            <Button label="Open modal" size="xs" onClick={() => setIsVisible(true)} />
            <ConfirmationModal
                show={isVisible}
                onHide={() => setIsVisible()}
                title="Default confirmation modal"
                subtitle="Subtitle confirmation modal"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facilis eveniet in optio, illo molestias. Quaerat inventore praesentium aut voluptate molestias quia, corporis iure eveniet voluptates recusandae laudantium odio facilis."
            />
        </div>
    );
};

export const Icons = () => {
    const [isVisible, setIsVisible] = useState();
    const [icon, setIcon] = useState('success');

    const options = [
        { value: 'success', label: 'success' },
        { value: 'danger', label: 'danger' },
        { value: 'error', label: 'error' },
        { value: 'warning', label: 'warning' },
    ];

    return (
        <div>
            <Select options={options} label="Select icon type" value={icon} onChange={e => setIcon(e.target.value)} />

            <Button label="Open modal" size="xs" onClick={() => setIsVisible(true)} />

            <ConfirmationModal
                show={isVisible}
                onHide={() => setIsVisible()}
                icon={icon}
                title="Icons types:"
                subtitle=" success, danger, error, warning"
            />
        </div>
    );
};

export const Labels = ({ ...args }) => {
    const [isVisible, setIsVisible] = useState();

    return (
        <div>
            <Button label="Open modal" size="xs" onClick={() => setIsVisible(true)} />

            <ConfirmationModal {...args} show={isVisible} onHide={() => setIsVisible()} />
        </div>
    );
};
Labels.args = {
    title: 'Im a title',
    subtitle: "I'm a subtitle",
    description: "I'm a description ",
    cancelLabel: 'Reverse',
    confirmLabel: 'Accept',
};

export const HideButtons = ({ ...args }) => {
    const [isVisible, setIsVisible] = useState();

    return (
        <div>
            <Button label="Open modal" size="xs" onClick={() => setIsVisible(true)} />
            <ConfirmationModal
                show={isVisible}
                {...args}
                title="Custom confirmation modal"
                subtitle="Cancel button removed"
                onConfirm={() => setIsVisible(false)}
            />
        </div>
    );
};
HideButtons.args = {
    cancelLabel: false,
};

export const Events = () => {
    const [isVisible, setIsVisible] = useState();

    return (
        <div>
            <Button label="Open modal" size="xs" onClick={() => setIsVisible(true)} />
            <ConfirmationModal
                show={isVisible}
                title="Modal events"
                onConfirm={() => {
                    setIsVisible(false);
                    // eslint-disable-next-line
                    alert('Confirm clicked!');
                }}
                onCancel={() => {
                    setIsVisible(false);
                    // eslint-disable-next-line
                    alert('Cancel clicked!');
                }}
            />
        </div>
    );
};
