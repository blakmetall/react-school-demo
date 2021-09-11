import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ListItem, Button } from '../../../../../components';

const ClassesList = ({ recordedClasses }) => {
    const history = useHistory();
    const { courseId } = useParams();

    const renderRecordedClasses = recordedClasses.map(({ id: recordedClassId, title }) => {
        return (
            <ListItem className="mb-3" key={recordedClassId} to={`/curso/${courseId}/clases-grabadas/${recordedClassId}`}>
                <Row className="justify-content-center  justify-content-lg-between align-items-center  px-lg-5 px-0">
                    <p className="app-font-20 font-weight-600 mb-2 mb-lg-0">{title}</p>
                    <Col className="d-flex justify-content-center justify-content-lg-end col-12 col-lg-4">
                        <Button
                            label="Ver"
                            onClick={() => history.push(`/curso/${courseId}/clases-grabadas/${recordedClassId}`)}
                            size="xs"
                        />
                    </Col>
                </Row>
            </ListItem>
        );
    });

    return <>{renderRecordedClasses}</>;
};

ClassesList.propTypes = {
    recordedClasses: PropTypes.array,
};

ClassesList.defaultProps = {
    recordedClasses: [],
};

export default ClassesList;
