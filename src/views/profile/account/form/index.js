import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import { hasValidMimeType } from '../../../../helpers';
import { Datepicker, Button, Input, Textarea } from '../../../../components';
import { StyledAvatar } from './styled';
import PhotoInput from './photo-input';
import AvatarInput from './avatar-input';

const AccountSettingsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [aboutMe, setAboutMe] = useState('');
    const [photo, setPhoto] = useState();
    const [avatar, setAvatar] = useState();

    // const [photoErrorMsg, setPhotoErrorMsg] = useState();

    // const clearForm = () => {
    //     setName('');
    //     setEmail('');
    //     setAboutMe('');
    //     setBirthDate('');
    // };

    // onSubmit
    const handleOnSubmit = e => {
        e.preventDefault();

        const item = {
            name,
            email,
            aboutMe,
            photo,
            avatar,
        };

        console.log('item', item);
    };

    // detect photo and set the proper validation message
    useEffect(() => {
        if (photo) {
            if (!hasValidMimeType(photo, ['image/jpeg', 'image/png'])) {
                // setPhotoErrorMsg('Archivos permitidos: jpg, png');
            } else {
                // setPhotoErrorMsg();
            }
        }

        // eslint-disable-next-line
    }, [photo]);

    return (
        <Form noValidate onSubmit={handleOnSubmit}>
            <div className="app-font-20 text-app-gray-2 mb-5">Ajustes de mi cuenta.</div>

            {/* avatar section */}
            <Form.Row className="mb-4">
                <Col>
                    <div className="d-flex align-content-center flex-column flex-lg-row">
                        <div className="mb-4 mr-3">
                            {/* profile photo */}
                            <StyledAvatar
                                imgSrc="https://via.placehold.it/200x200"
                                size="large"
                                className="rounded-circle mr-lg-3"
                            />
                        </div>

                        <div className="mb-4">
                            <span className="d-flex align-items-center mb-2 app-font-10">
                                {/* photo input */}
                                <PhotoInput photo={photo} onChange={file => setPhoto(file)} />

                                {/* dot separator  */}
                                <span className="app-font-15 mx-3 my-auto">&bull;</span>

                                {/* avatar input */}
                                <AvatarInput avatar={avatar} onChange={avatarSlug => setAvatar(avatarSlug)} />
                            </span>

                            {/* disclaimer */}
                            <p className="text-app-gray-2">
                                <i>Las fotos ayudan a que los demás usuarios te reconozcan en la plataforma.</i>
                            </p>
                        </div>
                    </div>
                </Col>
            </Form.Row>

            {/* inputs & textarea Section */}
            <Form.Row>
                <Col className="col-12 col-lg-6">
                    {/* user name */}
                    <Col className="col-12 p-0">
                        <Input label="Nombre" value={name} onChange={e => setName(e.target.value)} required />
                    </Col>

                    {/* email */}
                    <Col className="col-12 p-0">
                        <Input label="Correo" value={email} type="email" onChange={e => setEmail(e.target.value)} required />
                    </Col>

                    {/* fecha de nacimiento */}
                    <Col className="col-12 mb-4 p-0">
                        <Datepicker label="Fecha de Nacimiento: " value={birthDate} onChange={date => setBirthDate(date)} />
                    </Col>
                </Col>

                <Col className="col-12 col-lg-6">
                    {/* about me */}
                    <Textarea
                        label="Acerca de mi:"
                        className="ml-0 ml-lg-2"
                        rows={13}
                        value={aboutMe}
                        onChange={e => setAboutMe(e.target.value)}
                    />
                </Col>
            </Form.Row>

            {/* button submit */}
            <Form.Row className="align-items-center">
                <Col className="col-12 col-lg-6 order-0 order-lg-1 mb-4 mb-lg-0">
                    <Button type="submit" fullWidth size="xs" label="Guardar los cambios" />
                </Col>

                <Col className=" d-flex ">
                    <Link to="/cuenta/contrasena" className="app-font-10 font-weight-bold ml-auto ml-lg-0">
                        Cambiar Contraseña
                    </Link>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default AccountSettingsForm;
