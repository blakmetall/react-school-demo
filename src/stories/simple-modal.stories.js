import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { SimpleModal, ThemeWrapper } from '../components';

export default {
    title: 'Components/SimpleModal',
    component: SimpleModal,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Title = ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button className="btn-sm" onClick={() => setIsOpen(!isOpen)}>
                Open Modal
            </Button>

            <SimpleModal {...args} showIf={isOpen} onHide={() => setIsOpen(!isOpen)}>
                <div>...</div>
            </SimpleModal>
        </div>
    );
};
Title.args = {
    showIf: true,
    title: 'Custom Modal Title',
};

export const VariantModals = ({ ...args }) => {
    const [isOpenBlue, setIsOpenBlue] = useState(false);
    const [isOpenRed, setIsOpenRed] = useState(false);

    return (
        <>
            <div className="pl-3">
                <Button className="btn-sm mr-4" onClick={() => setIsOpenBlue(!isOpenBlue)} variant="success">
                    Open Blue Modal
                </Button>

                <SimpleModal {...args} showIf={isOpenBlue} onHide={() => setIsOpenBlue(!isOpenBlue)}>
                    <div>...</div>
                </SimpleModal>

                <Button className="btn-sm" onClick={() => setIsOpenRed(!isOpenRed)}>
                    Open Red Modal
                </Button>

                <SimpleModal {...args} showIf={isOpenRed} onHide={() => setIsOpenRed(!isOpenRed)} variant="red" size="md">
                    <div>...</div>
                </SimpleModal>
            </div>
        </>
    );
};
VariantModals.args = {
    showIf: true,

    title: 'Variant Modals',
};

export const Sizes = ({ ...args }) => {
    const [isOpenLG, setIsOpenLG] = useState(false);
    const [isOpenSM, setIsOpenSM] = useState(false);

    return (
        <div>
            <Button className="btn-sm mr-4" onClick={() => setIsOpenLG(!isOpenLG)}>
                Open large modal
            </Button>
            <SimpleModal {...args} title="Modal large" showIf={isOpenLG} onHide={() => setIsOpenLG(!isOpenLG)} size="lg">
                <div>...</div>
            </SimpleModal>

            <Button className="btn-sm" onClick={() => setIsOpenSM(!isOpenSM)}>
                Open small modal
            </Button>

            <SimpleModal {...args} title="Modal small" showIf={isOpenSM} onHide={() => setIsOpenSM(!isOpenSM)} size="sm">
                <div>...</div>
            </SimpleModal>
        </div>
    );
};

export const CustomContent = ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button className="btn-sm" onClick={() => setIsOpen(!isOpen)}>
                View custom content
            </Button>

            <SimpleModal {...args} title="Modal custom content" showIf={isOpen} onHide={() => setIsOpen(!isOpen)}>
                <div>
                    <ul className="list-group mb-1">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </SimpleModal>
        </div>
    );
};

export const OnHideEvent = ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button className="btn-sm" onClick={() => setIsOpen(!isOpen)}>
                Open Modal
            </Button>

            <SimpleModal
                {...args}
                title="Modal custom content"
                showIf={isOpen}
                onHide={() => {
                    setIsOpen(!isOpen);

                    // eslint-disable-next-line
                    alert('Modal closed');
                }}
            >
                <div>...</div>
            </SimpleModal>
        </div>
    );
};
