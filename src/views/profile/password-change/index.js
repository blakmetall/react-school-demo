import React from 'react';
import { Col } from 'react-bootstrap';
import PageContainer from '../../../components/page-container';
import Card from '../../../components/card';
import PasswordChangeForm from './form';

const PasswordChangePage = () => {
    return (
        <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
            <Col className="col-lg-4 col-12 mx-auto">
                <Card backgroundColor="white" className="p-5 rounded-15">
                    <PasswordChangeForm />
                </Card>
            </Col>
        </PageContainer>
    );
};

export default PasswordChangePage;
