import React from 'react';
import PageContainer from '../../../components/page-container';
import Card from '../../../components/card';
import SupportForm from './form';
import { StyledWrapper } from './styled';

const ContactSupportPage = () => {
    return (
        <PageContainer contentPaddingClass="d-flex px-0 px-lg-3 py-5">
            <StyledWrapper className="col-12 col-md-9 col-lg-5 mx-auto">
                <Card backgroundColor="white" className="p-4 rounded-15">
                    <SupportForm />
                </Card>
            </StyledWrapper>
        </PageContainer>
    );
};

export default ContactSupportPage;
