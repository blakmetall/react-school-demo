import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form } from 'react-bootstrap';
import { Button } from '../../../../../../components';
import AvatarsGrid from './grid';

const AvatarSelectionModal = ({ avatar, onChange }) => {
    const [selectedAvatar, setSelectedAvatar] = useState('');

    useEffect(() => {
        setSelectedAvatar(avatar);

        // eslint-disable-next-line
    }, [avatar]);

    return (
        <>
            <div className="app-font-20 text-app-gray-2 text-center">Selecciona tu nuevo Avatar</div>

            {/* Avatars Section */}
            <Form.Row className="py-5  justify-content-center align-items-center">
                <Col className="col-12 col-lg-10 d-flex flex-wrap justify-content-center">
                    <AvatarsGrid selectedAvatar={selectedAvatar} onAvatarSelection={v => setSelectedAvatar(v)} />
                </Col>
            </Form.Row>

            {/* Submit Section */}
            <Form.Row className="justify-content-center">
                <Col className="col-12 col-lg-6 px-2">
                    <Button
                        type="submit"
                        fullWidth
                        label="Seleccionar"
                        onClick={() => onChange(selectedAvatar)}
                        disabled={!selectedAvatar}
                    />
                </Col>
            </Form.Row>
        </>
    );
};

AvatarSelectionModal.propTypes = {
    avatar: PropTypes.string,
    onChange: PropTypes.func,
};
AvatarSelectionModal.defaultProps = {
    avatar: PropTypes.undefined,
    onChange: () => {},
};

export default AvatarSelectionModal;
