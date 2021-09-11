import React from 'react';
import Button from '../components/button';
import { DownloadIcon } from '../components/icons';
import { ThemeWrapper } from '../components';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Text = () => <Button label="Button custom label" />;

export const Disabled = () => <Button disabled label="Button custom label" />;

export const Variants = () => {
    return (
        <div>
            <Button label="Lorem Label" className="m-2" variant="success" />
            <Button label="Lorem Label" className="m-2" variant="secondary" />
            <Button label="Lorem Label" className="m-2" variant="info" />
            <Button label="Lorem Label" className="m-2" variant="primary" />
            <Button label="Lorem Label" className="m-2" variant="warning" />
            <Button label="Lorem Label" className="m-2" variant="danger" />
        </div>
    );
};

export const Sizes = () => {
    return (
        <div>
            <Button label="xs" className="m-2" size="xs" />
            <Button label="sm" className="m-2" size="sm" variant="warning" />
            <Button label="md" className="m-2" size="md" variant="secondary" />
            <Button label="lg" className="m-2" size="lg" variant="info" />
            <Button label="xlg" className="m-2" size="xl" variant="primary" />
        </div>
    );
};

export const FullWidth = () => {
    return (
        <div className="col">
            <Button fullWidth label="xs FullWitdh Btn" className="m-2" size="xs" />
            <Button fullWidth label="sm FullWitdh Btn" className="m-2" size="sm" variant="warning" />
            <Button fullWidth label="md FullWitdh Btn" className="m-2" size="md" variant="secondary" />
            <Button fullWidth label="lg FullWitdh Btn" className="m-2" size="lg" variant="info" />
            <Button fullWidth label="xl FullWitdh Btn" className="m-2" size="xl" variant="primary" />
        </div>
    );
};

export const Icons = () => {
    return (
        <div className="col">
            <div className="mb-3">
                <Button label="Icon xs" icon={<DownloadIcon />} size="xs" iconPosition="right" />
            </div>
            <div className="mb-3">
                <Button label="Icon sm" icon={<DownloadIcon />} size="sm" iconPosition="right" />
            </div>
            <div className="mb-3">
                <Button label="Icon md" icon={<DownloadIcon />} size="md" iconPosition="right" />
            </div>
            <div className="mb-3">
                <Button label="Icon lg" icon={<DownloadIcon />} size="lg" iconPosition="right" />
            </div>
            <div className="mb-3">
                <Button label="Icon xl" icon={<DownloadIcon />} size="xl" iconPosition="right" />
            </div>
        </div>
    );
};

export const IconPosition = () => {
    return (
        <div className="col">
            <Button size="xs" className="m-2" label="Icon xs" iconPosition="left" icon={<DownloadIcon />} />
            <Button size="sm" className="m-2" label="Icon sm" iconPosition="left" icon={<DownloadIcon />} />
            <Button size="md" className="m-2" label="Icon md" iconPosition="right" icon={<DownloadIcon />} />
            <Button size="lg" className="m-2" label="Icon lg" iconPosition="right" icon={<DownloadIcon />} />
            <Button size="xl" className="m-2" label="icon xl " iconPosition="right" icon={<DownloadIcon />} />
        </div>
    );
};
