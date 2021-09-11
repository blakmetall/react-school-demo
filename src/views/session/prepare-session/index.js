import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link, Redirect } from 'react-router-dom';
import { getAfterSuccessLoginUrl } from '../../../helpers';
import { Card, RenderIf, RenderContentWhen, Select, Spinner } from '../../../components';
import { useCorporateEntitiesOptions } from '../../admin/corporate-entities/hooks';
import { StyledContainer, StyledSelectionBtn } from './styled';
import {
    findManagementIdsByProfileId,
    getAllowedCorporateEntities,
    getAllowedGroupsOptions,
    getAllowedLearningCommunitiesOptions,
    getCorporateEntityAllowedRoles,
    hasCountryRole,
    signOut,
} from '../../../store/actions/auth';
import {
    setCorporateEntitySession,
    setCountrySession,
    setGroupSession,
    setLearningCommunitySession,
    setRegionalEntitySession,
    setRoleSession,
} from '../../../store/actions/session';
import { getCountries } from '../../../store/actions/countries';
import { countriesSort } from '../../../helpers/sort';

const PrepareSessionPage = ({ auth, roles }) => {
    const [allowedCorporateEntities, setAllowedCorporateEntities] = useState();
    const [allowedRoles, setAllowedRoles] = useState([]);

    const corporateEntitiesOptions = useCorporateEntitiesOptions(allowedCorporateEntities);

    const [learningCommunities, setLearningCommunities] = useState([]);
    const [learningCommunitiesOptions, setLearningCommunitiesOptions] = useState([]);

    const [groups, setGroups] = useState([]);
    const [groupsOptions, setGroupsOptions] = useState([]);

    const [countries, setCountries] = useState([]);
    const [countriesOptions, setCountriesOptions] = useState([]);

    const [selectedRole, setSelectedRole] = useState();
    const [selectedCorporateEntity, setSelectedCorporateEntity] = useState();
    const [selectedLearningCommunity, setSelectedLearningCommunity] = useState();
    const [selectedGroup, setSelectedGroup] = useState();

    const [corporateEntitiesLoaded, setCorporateEntitiesLoaded] = useState(false);
    const [shouldLoadRoles, setShouldLoadRoles] = useState(false);

    const [showAdminButton, setShowAdminButton] = useState(false);
    const [enableCountryButton, setEnableCountryButton] = useState(false);

    const [requestCountryVerification, setRequestCountryVerification] = useState(true);
    const [requestingCountryVerification, setRequestingCountryVerification] = useState(true);

    const [requestManagementIds, setRequestManagementIds] = useState(true);
    const [managementIds, setManagementIds] = useState({});

    const { profile, role, learningCommunity, group, country } = auth;

    const isLoadindProfile = !profile;
    const isProfileLoaded = !isLoadindProfile;
    const hasLearningCommunityLoaded = !!learningCommunity;
    const hasGroupLoaded = !!group;
    const hasPendingRoleAssignation = !role;
    const hasCountryLoaded = !!country;
    const isRoleLoaded = !hasPendingRoleAssignation;

    const dispatch = useDispatch();

    const setupAdminRole = () => {
        roles.forEach(roleLoop => {
            if (roleLoop.slug === 'admin') {
                dispatch(setCountrySession());
                dispatch(setCorporateEntitySession());
                dispatch(setRegionalEntitySession());
                dispatch(setLearningCommunitySession());
                dispatch(setGroupSession());
                dispatch(setRoleSession(roleLoop));
            }
        });
    };

    const setupCountryRole = () => {
        roles.forEach(roleLoop => {
            if (roleLoop.slug === 'country') {
                dispatch(setRoleSession(roleLoop));
                setSelectedRole(roleLoop);
            }
        });
    };

    const handleOnCorporateEntitySelect = e => {
        const corporateEntityId = e.target.value;

        if (allowedCorporateEntities && allowedCorporateEntities.length) {
            allowedCorporateEntities.forEach(corporateEntity => {
                if (corporateEntity.id === corporateEntityId) {
                    dispatch(setRoleSession());
                    setSelectedRole();
                    setAllowedRoles([]);

                    setSelectedCorporateEntity(corporateEntity);

                    dispatch(setLearningCommunitySession());
                    setLearningCommunities([]);
                    setLearningCommunitiesOptions([]);
                    setSelectedLearningCommunity();

                    dispatch(setGroupSession());
                    setGroups([]);
                    setGroupsOptions([]);
                    setSelectedGroup();
                }
            });
        }
    };

    const handleOnLearningCommunitySelect = e => {
        dispatch(setGroupSession());

        const learningCommunityId = e.target.value;

        if (learningCommunities && learningCommunities.length) {
            learningCommunities.forEach(lc => {
                if (lc.id === learningCommunityId) {
                    setSelectedLearningCommunity(lc);
                    dispatch(setLearningCommunitySession(lc));
                }
            });
        }
    };

    const handleOnGroupSelect = e => {
        const groupId = e.target.value;

        if (groups && groups.length) {
            groups.forEach(group => {
                if (group.id === groupId) {
                    setSelectedGroup(group);
                    dispatch(setGroupSession(group));
                }
            });
        }
    };

    const handleOnCountrySelect = e => {
        const countryId = e.target.value;

        if (countries && countries.length) {
            countries.forEach(country => {
                if (country.id === countryId) {
                    dispatch(setCountrySession(country));
                    dispatch(setCorporateEntitySession());
                    dispatch(setRegionalEntitySession());
                    dispatch(setLearningCommunitySession());
                    dispatch(setGroupSession());
                    dispatch(setGroupSession());
                }
            });
        }
    };

    const renderRolesButtons = () => {
        if (selectedCorporateEntity && allowedRoles) {
            return allowedRoles
                .filter(allowedRole => allowedRole.slug !== 'country')
                .map((allowedRole, index) => {
                    const key = `btn-role-${index}`;

                    const isSelected = selectedRole && selectedRole.id === allowedRole.id;

                    const onClickSelection = roleSelected => {
                        setSelectedLearningCommunity();
                        dispatch(setLearningCommunitySession());
                        setLearningCommunities([]);
                        setLearningCommunitiesOptions([]);

                        setSelectedGroup();
                        dispatch(setGroupSession());
                        setGroups([]);
                        setGroupsOptions([]);

                        dispatch(setRoleSession());
                        setSelectedRole(roleSelected);
                    };

                    return (
                        <StyledSelectionBtn
                            key={key}
                            type="button"
                            className="btn btn-sm btn-light border-success mx-1 mb-3"
                            onClick={() => onClickSelection(allowedRole)}
                            active={isSelected}
                        >
                            {allowedRole.name}
                        </StyledSelectionBtn>
                    );
                });
        }

        return undefined;
    };

    useEffect(() => {
        dispatch(setCountrySession());
        dispatch(setCorporateEntitySession());
        dispatch(setLearningCommunitySession());
        dispatch(setRegionalEntitySession());
        dispatch(setRoleSession());
        dispatch(setGroupSession());

        // eslint-disable-next-line
    }, []);

    // load initial data
    useEffect(() => {
        if (isProfileLoaded) {
            if (!requestingCountryVerification) {
                dispatch(getAllowedCorporateEntities(auth.profile.id)).then(data => {
                    setAllowedCorporateEntities(data);
                    setCorporateEntitiesLoaded(true);

                    // automatic select corporate entity if there is only one assigned for the user
                    if (data.length === 1) {
                        setSelectedCorporateEntity(data[0]);
                    }
                });
            }

            if (requestCountryVerification) {
                setRequestCountryVerification(false);

                dispatch(hasCountryRole(auth.profile.id)).then(hasRole => {
                    setEnableCountryButton(hasRole);
                    setRequestingCountryVerification(false);
                });
            }

            if (requestManagementIds) {
                setRequestManagementIds(false);
                dispatch(findManagementIdsByProfileId(auth.profile.id)).then(values => {
                    setManagementIds(values);
                });
            }
        }

        // eslint-disable-next-line
    }, [auth, isProfileLoaded, requestCountryVerification, requestingCountryVerification]);

    // render admin button after events or logs automatically for admins
    useEffect(() => {
        if (isProfileLoaded && corporateEntitiesLoaded) {
            if (allowedCorporateEntities) {
                if (profile.isAdmin) {
                    setShowAdminButton(true);
                }
            } else if (profile.isAdmin) {
                setupAdminRole();
            } else {
                dispatch(signOut());
            }
        }

        // eslint-disable-next-line
    }, [isProfileLoaded, allowedCorporateEntities, corporateEntitiesLoaded]);

    // sets the available roles for selection acording to selected corporate entity
    useEffect(() => {
        if (roles && selectedCorporateEntity) {
            setShouldLoadRoles(true);

            dispatch(getCorporateEntityAllowedRoles(selectedCorporateEntity.id, auth.profile.id)).then(allowedList => {
                const allowed = [];

                if (allowedList.length) {
                    allowedList.forEach(allowedLoop => {
                        roles.forEach(roleLoop => {
                            if (allowedLoop === roleLoop.slug) {
                                allowed.push(roleLoop);
                            }
                        });
                    });
                }

                setAllowedRoles(allowed);

                // automatic select role if there is only one found assigned for the user
                const canAssignAutomaticRole = !enableCountryButton && !profile.isAdmin;

                if (allowed.length === 1 && canAssignAutomaticRole) {
                    setSelectedRole(allowed[0]);
                }
            });
        } else {
            setShouldLoadRoles(false);
        }

        // eslint-disable-next-line
    }, [roles, selectedCorporateEntity]);

    //
    useEffect(() => {
        if (selectedCorporateEntity && selectedRole && roles) {
            dispatch(setCorporateEntitySession(selectedCorporateEntity));
            dispatch(setRoleSession(selectedRole));

            if (selectedRole.slug !== 'country') {
                setCountries([]);
                setCountriesOptions([]);
            }

            if (
                selectedRole.slug === 'learning-community' ||
                selectedRole.slug === 'facilitator' ||
                selectedRole.slug === 'participant'
            ) {
                dispatch(getAllowedLearningCommunitiesOptions(selectedRole.slug, managementIds, selectedCorporateEntity)).then(
                    ({ options, learningCommunities: items }) => {
                        setLearningCommunities(items);
                        setLearningCommunitiesOptions(options);

                        // automatic selection of learning community if there is only one
                        const canAssignAutomaticLearningCommunity = !enableCountryButton && !profile.isAdmin;
                        if (options.length === 1 && items.length && canAssignAutomaticLearningCommunity) {
                            const lc = items[0];

                            setSelectedLearningCommunity(lc);
                            dispatch(setLearningCommunitySession(lc));
                        }
                    },
                );
            }
        }

        // eslint-disable-next-line
    }, [selectedCorporateEntity, selectedRole, roles]);

    // get allowed groups to login
    useEffect(() => {
        if (selectedLearningCommunity && selectedRole) {
            if (selectedRole.slug === 'facilitator' || selectedRole.slug === 'participant') {
                dispatch(
                    getAllowedGroupsOptions(selectedCorporateEntity, selectedLearningCommunity, selectedRole, managementIds),
                ).then(({ options, groups: items }) => {
                    setGroups(items);
                    setGroupsOptions(options);

                    // automatic selection of group if there is only one
                    const canAssignAutomaticGroup = !enableCountryButton && !profile.isAdmin;
                    if (options.length === 1 && items.length && canAssignAutomaticGroup) {
                        const g = items[0];
                        setSelectedGroup(g);
                        dispatch(setGroupSession(g));
                    }
                });
            }
        }

        // eslint-disable-next-line
    }, [selectedLearningCommunity, selectedRole, selectedCorporateEntity]);

    // get allowed countries to login
    useEffect(() => {
        if (selectedRole && selectedRole.slug === 'country') {
            dispatch(getCountries({ where: [['managerProfileId', '==', profile.id || '']] })).then(countries => {
                setCountries(countries);
                setCountriesOptions(
                    countries.sort(countriesSort).map(item => ({
                        label: item.name,
                        value: item.id,
                    })),
                );

                // automatic selection of learning community if there is only one
                const canAssignAutomaticCountry = !profile.isAdmin;
                if (countries.length === 1 && canAssignAutomaticCountry) {
                    setSelectedLearningCommunity(countries[0]);
                    dispatch(setLearningCommunitySession(countries[0]));
                }
            });
        }

        // eslint-disable-next-line
    }, [selectedRole]);

    // show spinner if loading profile
    if (isLoadindProfile) {
        return (
            <div className="vw-100 vh-100">
                <Spinner />
            </div>
        );
    }

    // if role is setup redirect to user dashboard
    if (isProfileLoaded && isRoleLoaded) {
        if (role.slug === 'admin' || (role.slug === 'country' && hasCountryLoaded)) {
            return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />;
        }

        if (role.slug !== 'admin' && role.slug !== 'country') {
            if (selectedCorporateEntity && role.slug === 'corporate-entity') {
                return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />;
            }

            if (selectedCorporateEntity && role.slug === 'regional-entity') {
                return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />;
            }

            if (selectedCorporateEntity && role.slug === 'learning-community' && hasLearningCommunityLoaded) {
                return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />;
            }

            if (selectedCorporateEntity && role.slug === 'facilitator' && hasLearningCommunityLoaded && hasGroupLoaded) {
                return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />;
            }

            if (selectedCorporateEntity && role.slug === 'participant' && hasLearningCommunityLoaded && hasGroupLoaded) {
                return <Redirect to={getAfterSuccessLoginUrl(role.slug)} />;
            }
        }
    }

    return (
        <StyledContainer className="vw-100 bg-app-light-gray">
            <div className="pt-5 pb-5" />

            <div className="vw-100 d-flex align-items-center justify-content-center">
                <Card backgroundColor="white" className="sm">
                    <div className="text-center pt-5">
                        {/* corporate entity selection for current session */}
                        <RenderContentWhen
                            isTrue={!!(corporateEntitiesLoaded && allowedCorporateEntities)}
                            showSpinnerIf
                            stopSpinnerIf={corporateEntitiesLoaded}
                            className="mb-4"
                        >
                            <RenderIf isTrue={!!allowedCorporateEntities}>
                                <h3 className="font-weight-500 app-font-16 mb-2">Seleccionar Entidad Corporativa</h3>

                                <Select
                                    label=""
                                    value={(selectedCorporateEntity && selectedCorporateEntity.id) || ''}
                                    options={corporateEntitiesOptions}
                                    onChange={handleOnCorporateEntitySelect}
                                />

                                <div className="pt-4 pb-4">
                                    <div className="app-line xxs" />
                                </div>
                            </RenderIf>
                        </RenderContentWhen>

                        {/* role selection for current session */}
                        <RenderContentWhen
                            isTrue={!!allowedRoles}
                            showSpinnerIf={shouldLoadRoles}
                            stopSpinnerIf={!!allowedRoles}
                            className="mb-4"
                        >
                            <RenderIf isTrue={!!selectedCorporateEntity}>
                                <h3 className="font-weight-500 app-font-16 mb-2">Seleccionar Rol</h3>

                                <div className="d-flex align-items-center justify-content-center flex-wrap">
                                    {renderRolesButtons()}
                                </div>

                                <div className="pt-4 pb-4">
                                    <div className="app-line xxs" />
                                </div>
                            </RenderIf>
                        </RenderContentWhen>

                        <RenderIf isTrue={!!learningCommunitiesOptions.length && role && role.slug !== 'country'}>
                            <h3 className="font-weight-500 app-font-16 mb-2">Seleccionar Comunidad</h3>

                            <Select
                                label=""
                                value={(selectedLearningCommunity && selectedLearningCommunity.id) || ''}
                                options={learningCommunitiesOptions}
                                onChange={handleOnLearningCommunitySelect}
                            />

                            <div className="pt-4 pb-4">
                                <div className="app-line xxs" />
                            </div>
                        </RenderIf>

                        <RenderIf isTrue={!!groupsOptions.length && role && role.slug !== 'country'}>
                            <h3 className="font-weight-500 app-font-16 mb-2">Seleccionar Grupo</h3>

                            <Select
                                label=""
                                value={(selectedGroup && selectedGroup.id) || ''}
                                options={groupsOptions}
                                onChange={handleOnGroupSelect}
                            />

                            <div className="pt-4 pb-4">
                                <div className="app-line xxs" />
                            </div>
                        </RenderIf>

                        {/* admin role selection (only admin)  */}
                        <RenderIf isTrue={enableCountryButton}>
                            <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-center">
                                    <StyledSelectionBtn
                                        type="button"
                                        className="btn btn-sm btn-success mx-1"
                                        onClick={setupCountryRole}
                                    >
                                        Ingresar como País
                                    </StyledSelectionBtn>
                                </div>
                                <div className="pt-4 pb-4">
                                    <div className="app-line xxs" />
                                </div>
                            </div>
                        </RenderIf>

                        {/* country selection */}
                        <RenderIf isTrue={!!countriesOptions.length}>
                            <h3 className="font-weight-500 app-font-16 mb-2">Seleccionar País</h3>

                            <Select
                                label=""
                                // value={(selectedCountry && selectedCountry.id) || ''}
                                options={countriesOptions}
                                onChange={handleOnCountrySelect}
                            />

                            <div className="pt-4 pb-4">
                                <div className="app-line xxs" />
                            </div>
                        </RenderIf>

                        {/* admin role selection (only admin)  */}
                        <RenderIf isTrue={profile.isAdmin && !!roles && showAdminButton}>
                            <div className="d-flex align-items-center justify-content-center">
                                <StyledSelectionBtn
                                    type="button"
                                    className="btn btn-sm btn-primary mx-1"
                                    onClick={setupAdminRole}
                                >
                                    Ingresar como Administrador
                                </StyledSelectionBtn>
                            </div>
                        </RenderIf>

                        <div className="mb-3" />

                        {/* signOut */}
                        <div className="text-center">
                            <Link to="/salir" className="text-app-gray-2">
                                <u>Salir</u>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="pb-5 pt-5" />
        </StyledContainer>
    );
};

PrepareSessionPage.propTypes = {
    auth: PropTypes.any,
    roles: PropTypes.array,
};

PrepareSessionPage.defaultProps = {
    auth: undefined,
    roles: [],
};

const mapStateToProps = state => ({
    auth: state.auth,
    roles: state.firestore.ordered.roles,
});

const enhance = compose(
    connect(mapStateToProps),
    firestoreConnect(() => [{ collection: 'roles' }]),
);

export default enhance(PrepareSessionPage);
