import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getUniqueId } from '../../../../helpers';
import { Avatar, RenderIf } from '../../..';
import { CancelIcon, MenuIcon, School DemoIcon, QuestionMarksIcon, LeaveIcon, EngineIcon, EmailIcon } from '../../../icons';
import { StyledContainer, StyledDropdownItemIconWrapper, StyledMenuOptionIcon, StyledMobileMenuTrigger } from './styled';
import { setMobileMenuOpenStatus } from '../../../../store/actions/ui';

const MenuDropdowns = ({ auth, isMobile, isMobileMenuOpen, className }) => {
    const [isUpdatingMobileMenu, setIsUpdatingMobileMenu] = useState(false);
    const helpDropdownId = getUniqueId('dropdown-help');
    const profileDropdownId = getUniqueId('dropdown-profile');
    const showRoleName = !isMobile;

    const dispatch = useDispatch();

    useEffect(() => {
        setIsUpdatingMobileMenu(false);
    }, [isMobileMenuOpen]);

    const toggleMenu = () => {
        if (!isUpdatingMobileMenu) {
            setIsUpdatingMobileMenu(true);
            dispatch(setMobileMenuOpenStatus(!isMobileMenuOpen));
        }
    };

    const getMobileMenuIcon = () => {
        if (isMobileMenuOpen) {
            return <CancelIcon size="sm" />;
        }

        return <MenuIcon size="sm" />;
    };

    const getProfilePhoto = () => {
        if (auth.profile && auth.profile.photo && auth.profile.photo) {
            return auth.profile.photo.storageUrl;
        }

        return '';
    };

    const getProfileName = () => {
        if (auth.profile && auth.profile.firstName && auth.profile.lastName) {
            return `${auth.profile.firstName} ${auth.profile.lastName}`;
        }

        if (auth.profile && auth.profile.name) {
            return auth.profile.name;
        }

        return '';
    };

    return (
        <StyledContainer className={className} isMobile={isMobile}>
            {/* help dropdown */}
            <div className={`h-100 ${isMobile ? 'mr-3' : 'mr-5'}`}>
                {/* TODO : custom-size prop in ICONS components */}
                <Dropdown className="h-100">
                    <Dropdown.Toggle as="a" id={helpDropdownId} className="d-flex align-items-center h-100">
                        <StyledMenuOptionIcon src="/img/icons/general/help-white.svg" alt="" isMobile={isMobile} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="pb-0" alignRight>
                        <LinkContainer to="/como-funciona">
                            <Dropdown.Item>
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper>
                                        <School DemoIcon />
                                    </StyledDropdownItemIconWrapper>
                                    <div className="align-self-stretch">¿Cómo funciona School Demo?</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/preguntas-frecuentes">
                            <Dropdown.Item>
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper>
                                        <QuestionMarksIcon />
                                    </StyledDropdownItemIconWrapper>
                                    <div className="align-self-stretch">Preguntas frecuentes</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/terminos-condiciones">
                            <Dropdown.Item>
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper />
                                    <div className="align-self-stretch">Términos y condiciones</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/aviso-privacidad">
                            <Dropdown.Item>
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper />
                                    <div className="align-self-stretch">Política de privacidad</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/contacto-soporte">
                            <Dropdown.Item className="last">
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper>
                                        <EmailIcon src="/img/icons/general/email.svg" alt="" />
                                    </StyledDropdownItemIconWrapper>
                                    <div className="align-self-stretch">Contactar a soporte School Demo</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* profile dropdown */}
            <div className={`h-100 ${isMobile ? 'mr-3' : ''}`}>
                <Dropdown className="h-100">
                    <Dropdown.Toggle as="a" id={profileDropdownId} className="d-flex align-items-center h-100">
                        <div className="d-flex align-items-center h-100">
                            <RenderIf isTrue={showRoleName && !!auth.role}>
                                <div className="app-font-12 text-white pr-3">{auth.role.name}</div>
                            </RenderIf>
                            <Avatar imgSrc={getProfilePhoto()} name={getProfileName()} size="x-small" />
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu alignRight>
                        <LinkContainer to="/cuenta">
                            <Dropdown.Item>
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper>
                                        <EngineIcon />
                                    </StyledDropdownItemIconWrapper>
                                    <div className="align-self-stretch">Configuración</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/salir">
                            <Dropdown.Item>
                                <div className="d-flex align-items-center">
                                    <StyledDropdownItemIconWrapper>
                                        <LeaveIcon />
                                    </StyledDropdownItemIconWrapper>
                                    <div className="align-self-stretch">Cerrar sesión</div>
                                </div>
                            </Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* profile dropdown */}
            <RenderIf isTrue={isMobile}>
                <div className="h-100">
                    <StyledMobileMenuTrigger
                        className="d-flex justify-content-center align-items-center h-100"
                        onClick={toggleMenu}
                    >
                        {getMobileMenuIcon()}
                    </StyledMobileMenuTrigger>
                </div>
            </RenderIf>
        </StyledContainer>
    );
};

const storeInjectedProps = state => ({
    auth: state.auth,
    isMobileMenuOpen: state.ui.isMobileMenuOpen,
});

MenuDropdowns.propTypes = {
    auth: PropTypes.any,
    isMobile: PropTypes.bool,
    isMobileMenuOpen: PropTypes.bool,
    className: PropTypes.string,
};

MenuDropdowns.defaultProps = {
    auth: undefined,
    isMobile: false,
    isMobileMenuOpen: false,
    className: '',
};

export default connect(storeInjectedProps)(MenuDropdowns);
