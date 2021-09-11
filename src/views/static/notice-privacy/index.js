import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeading from '../../../components/page-heading';
import PageContainer from '../../../components/page-container';

const NoticePrivacyPage = () => {
    return (
        <div className="flex-grow-1 h-100">
            <PageHeading />
            <PageContainer contentPaddingClass="px-4 py-5">
                <div className="p-4 text-gray-500 bg-white">
                    <Container>
                        <h1 className="app-font-28 font-weight-600 text-primary my-5 text-center">Aviso de privacidad</h1>

                        <h3 className="app-font-18 font-weight-600 text-primary mb-3">Lorem Title</h3>
                        <p className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex modi veritatis expedita numquam,
                            voluptate ad distinctio pariatur accusamus temporibus error facilis voluptates mollitia repellendus
                            eaque! Veniam doloribus libero nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex
                            modi veritatis expedita numquam, voluptate ad distinctio pariatur accusamus temporibus error facilis
                            voluptates mollitia repellendus eaque! Veniam doloribus libero nemo! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eum ex modi veritatis expedita numquam, voluptate ad distinctio pariatur
                            accusamus temporibus error facilis voluptates mollitia repellendus eaque! Veniam doloribus libero
                            nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex modi veritatis expedita numquam,
                            voluptate ad distinctio pariatur accusamus temporibus error facilis voluptates mollitia repellendus
                            eaque! Veniam doloribus libero nemo!
                        </p>
                        <h3 className="app-font-18 font-weight-600 text-primary mb-3">Lorem Title</h3>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex modi veritatis expedita numquam,
                            voluptate ad distinctio pariatur accusamus temporibus error facilis voluptates mollitia repellendus
                            eaque! Veniam doloribus libero nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex
                            modi veritatis expedita numquam, voluptate ad distinctio pariatur accusamus temporibus error facilis
                            voluptates mollitia repellendus eaque! Veniam doloribus libero nemo! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eum ex modi veritatis expedita numquam, voluptate ad distinctio pariatur
                            accusamus temporibus error facilis voluptates mollitia repellendus eaque! Veniam doloribus libero
                            nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ex modi veritatis expedita numquam,
                            voluptate ad distinctio pariatur accusamus temporibus error facilis voluptates mollitia repellendus
                            eaque! Veniam doloribus libero nemo!
                        </p>
                    </Container>
                </div>
            </PageContainer>
        </div>
    );
};

export default NoticePrivacyPage;
