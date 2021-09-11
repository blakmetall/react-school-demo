import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactJsonView from 'react-json-view';
import { ContentRepeater, Input, Textarea, ThemeWrapper } from '../components';
import { arrayReplacePropValue } from '../helpers';

export default {
    title: 'Components/ContentRepeater',
    component: ContentRepeater,
    decorators: [
        Story => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
};

const baseData = [
    { name: 'hello', age: 21 },
    { name: 'world', age: 25 },
    { name: 'world3', age: 29 },
];

const dataBlueprint = {
    name: '',
    age: 0,
};

export const Content = () => {
    return (
        <div>
            <ContentRepeater
                data={baseData}
                render={(renderItem, renderIndex) => (
                    <>
                        <div>
                            {renderIndex}: {renderItem.name}, {renderItem.age} years
                        </div>
                    </>
                )}
            />
        </div>
    );
};

export const DinamicRepeater = () => {
    const [data, setData] = useState(baseData);

    return (
        <div>
            <ContentRepeater
                addLabel="Add new item"
                dinamic
                data={data}
                dataBlueprint={dataBlueprint}
                onAddItem={values => setData(values)}
                onRemoveItem={(values, removedItem) => {
                    console.log('removedItem', removedItem);
                    setData(values);
                }}
                render={(renderItem, renderIndex) => (
                    <>
                        <div>
                            {renderIndex}: {renderItem.name}, {renderItem.age}
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi odit magnam voluptatibus, suscipit
                            recusandae, voluptates deleniti culpa nobis perspiciatis, tenetur magni! Sapiente, voluptates
                            asperiores eos suscipit expedita dignissimos magnam id.
                        </div>
                    </>
                )}
            />
        </div>
    );
};

export const FormGroupRepeater = () => {
    const [data, setData] = useState([]);

    const blueprint = {
        firstNameLabel: 'Firstname',
        firstNameValue: '',
        firstNameProp: 'firstNameValue',

        lastNameLabel: 'Lastname',
        lastNameValue: '',
        lastNameProp: 'lastNameValue',

        descriptionLabel: 'Description',
        descriptionValue: '',
        descriptionProp: 'descriptionValue',
    };

    const handleOnChangeRepeater = (e, dataIndex, replaceProp) => {
        const replaceValue = e.target.value;
        setData(arrayReplacePropValue(data, dataIndex, replaceProp, replaceValue));
    };

    return (
        <div>
            <ContentRepeater
                dinamic
                data={data}
                dataBlueprint={blueprint}
                onAddItem={values => setData(values)}
                onRemoveItem={values => setData(values)}
                render={(renderItem, renderIndex) => {
                    if (renderItem) {
                        const {
                            firstNameLabel,
                            firstNameValue,
                            firstNameProp,

                            lastNameLabel,
                            lastNameValue,
                            lastNameProp,

                            descriptionLabel,
                            descriptionValue,
                            descriptionProp,
                        } = renderItem;

                        return (
                            <>
                                <Row className="no-gutters">
                                    <Col className="col-sm-6">
                                        <Input
                                            label={firstNameLabel}
                                            value={firstNameValue}
                                            onChange={e => handleOnChangeRepeater(e, renderIndex, firstNameProp)}
                                        />
                                    </Col>

                                    <Col className="col-sm-6">
                                        <Input
                                            label={lastNameLabel}
                                            value={lastNameValue}
                                            onChange={e => handleOnChangeRepeater(e, renderIndex, lastNameProp)}
                                        />
                                    </Col>

                                    <div className="w-100" />

                                    <Col>
                                        <Textarea
                                            label={descriptionLabel}
                                            value={descriptionValue}
                                            onChange={e => handleOnChangeRepeater(e, renderIndex, descriptionProp)}
                                        />
                                    </Col>
                                </Row>
                            </>
                        );
                    }

                    return <></>;
                }}
            />

            <div className="pt-5">
                <ReactJsonView src={data} />
            </div>
        </div>
    );
};
