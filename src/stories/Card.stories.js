import React from 'react';
import { Card, ThemeWrapper } from '../components';

export default {
    title: 'Components/Card',
    component: Card,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

export const Default = () => {
    return (
        <Card>
            <h5>Card content</h5>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius distinctio
                magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus pariatur.
            </div>
        </Card>
    );
};

export const CustomColors = () => {
    return (
        <>
            <Card textColor="white" backgroundColor="black" className="mb-3">
                <h5>Background color and custom text color</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card textColor="gray" backgroundColor="orange" className="mb-3">
                <h5>Background color and custom text color</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>
        </>
    );
};

export const CustomPadding = () => {
    return (
        <>
            <Card paddingSize="sm" className="mb-3">
                <h5>Custom Padding - sm</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card paddingSize="md" className="mb-3">
                <h5>Custom Padding - md</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card paddingSize="lg" className="mb-3">
                <h5>Custom Padding - lg</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card paddingSize="lg" className="mb-3">
                <h5>Custom Padding - xl</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>
        </>
    );
};

export const MaxWidth = () => {
    return (
        <Card maxWidth="50%">
            <h5>Max. width</h5>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius distinctio
                magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus pariatur.
            </div>
        </Card>
    );
};

export const BootstrapSizes = () => {
    return (
        <div>
            <Card className="sm mb-3">
                <h5>Bootstrap sm</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card className="md mb-3">
                <h5>Bootstrap md</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card className="lg mb-3">
                <h5>Bootstrap lg</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>

            <Card className="xl mb-3">
                <h5>Bootstrap xl</h5>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis eveniet qui, odio, placeat ad eius
                    distinctio magni sit illum obcaecati debitis nesciunt quam suscipit, consequuntur facere cumque natus
                    pariatur.
                </div>
            </Card>
        </div>
    );
};
