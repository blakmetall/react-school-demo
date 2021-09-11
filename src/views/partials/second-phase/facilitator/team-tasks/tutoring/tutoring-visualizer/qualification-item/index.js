import React from 'react';
import { Avatar, Input } from '../../../../../../../../components';
import { StyledInputWrapper, StyledQualificationWrapper } from './styled';

const QualificationItemList = () => {
    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <Avatar size="small" label="Lorem Participant Large Full Name" />
                </div>
                {/* qualification section */}
                <StyledQualificationWrapper className="d-flex rounded-pill justify-content-end">
                    <StyledInputWrapper className="my-auto">
                        <Input value="9" maxLength="2" type="number" className="my-auto mr-2" />
                    </StyledInputWrapper>
                    <h2 className="text-gray-500 text-nowrap my-auto">/ 10</h2>
                </StyledQualificationWrapper>
            </div>
        </div>
    );
};

export default QualificationItemList;
