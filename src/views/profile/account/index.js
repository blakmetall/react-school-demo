import React from 'react';
import { Col } from 'react-bootstrap';
import { Card, PageContainer, PageHeading } from '../../../components';
import AccountSettingsForm from './form';

const AccountSettingsPage = () => {
    return (
        <div className="flex-grow-1 h-100">
            {/* heading */}
            <PageHeading label="Configuración" className="pr-5 pt-4 pb-3" />

            {/* content */}
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                <Col className="col-12 col-md-12 col-lg-10 mx-auto">
                    <Card backgroundColor="white" className="p-5 rounded-15">
                        <AccountSettingsForm />
                    </Card>
                </Col>
            </PageContainer>
        </div>
    );
};

export default AccountSettingsPage;
