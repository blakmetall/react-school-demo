import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Button } from '../../../components';
import { StyledNotFoundWrapper, StyledIcon404, StyledTitle, StyledParagraph } from './style';

const NotFoundPage = () => {
    const history = useHistory();
    const canReturn = !!history.length;

    const handleOnReturn = e => {
        e.preventDefault();

        if (canReturn) {
            history.goBack();
        } else {
            history.push('/');
        }
    };

    return (
        <StyledNotFoundWrapper className="d-flex bg-white justify-content-center">
            <div className="col py-5 my-auto p-0 m-0">
                {/* title */}
                <Col className="col-12 mb-4">
                    <StyledTitle className="text-gray-500 font-weight-700 text-center ">Error 404</StyledTitle>
                </Col>

                {/* icon */}
                <div className="d-flex justify-content-center mb-4">
                    <Col className="col-10 col-lg-6">
                        <StyledIcon404 />
                    </Col>
                </div>

                {/* button */}
                <div className="d-flex justify-content-center mb-4">
                    <Col className="col-10 col-lg-5">
                        <Button label="Regresar" type="submit" size="xs" onClick={handleOnReturn} fullWidth />
                    </Col>
                </div>

                {/* info */}
                <Col className="col-12 text-center mb-3">
                    <StyledParagraph className="text-center text-gray-600 font-weight-500 ">
                        Lo sentímos, no se encontró la página
                    </StyledParagraph>
                    <span className="app-font-22 text-center text-gray-500">Por favor inténtalo más tarde</span>
                </Col>
            </div>
        </StyledNotFoundWrapper>
    );
};

export default NotFoundPage;
