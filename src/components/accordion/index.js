import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as AcordionBs, Row, Col, Button as ButtonIcon } from 'react-bootstrap';
// import { Button } from '../button';
import ButtonArrowIcon from './buttonArrowIcon';
import Card from '../card';
import Button from '../button';
import { DeleteIcon, EditIcon } from '../icons';
import AvatarGroup from '../avatar-group';
import theme from '../../theme';
import StyledWrapper from './styled';

const Accordion = ({ children, avatars, title, onButtonClick, className, onEdit, onDelete, avatarsTo, to }) => {
    return (
        <AcordionBs className={className}>
            <Card>
                {/* row Header */}
                <Row>
                    {/* title */}
                    <Col className="d-flex align-items-center mb-3 mb-lg-0">
                        <h1 className="app-font-20 text-app-gray font-weight-bold">{title}</h1>
                    </Col>
                    {/* avatar, icons & buttons */}
                    <Col className="col-12 col-lg-10 ">
                        <StyledWrapper className="flex-column flex-sm-row justify-content-center justify-content-lg-end align-items-center">
                            <Button
                                size="xs"
                                label="Ver"
                                href={to}
                                onClick={onButtonClick}
                                className="mr-0 mr-lg-2 mb-2 mb-sm-0"
                            />

                            <AvatarGroup to={avatarsTo} avatars={avatars} className="mx-0 mx-sm-3 mb-2 mb-sm-0" />

                            <div className="d-flex justify-content-center p-0 mb-2 mb-sm-0">
                                <ButtonArrowIcon size="xs" eventKey="0" color={theme.bootstrap.appBlue4} />
                                <ButtonIcon onClick={onDelete} variant="" className="p-0 mx-0 mx-sm-2">
                                    <DeleteIcon size="xs" color={theme.bootstrap.appBlue4} />
                                </ButtonIcon>
                                <ButtonIcon onClick={onEdit} variant="" className="p-0">
                                    <EditIcon size="xs" color={theme.bootstrap.appBlue4} />
                                </ButtonIcon>
                            </div>
                        </StyledWrapper>
                    </Col>
                </Row>
                {/* accordion body */}
                <AcordionBs.Collapse eventKey="0" className="pt-4">
                    <div>{children}</div>
                </AcordionBs.Collapse>
            </Card>
        </AcordionBs>
    );
};

Accordion.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    avatars: PropTypes.array,
    title: PropTypes.string,
    onButtonClick: PropTypes.func,
    className: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    avatarsTo: PropTypes.string,
    to: PropTypes.string,
};

Accordion.defaultProps = {
    children: undefined,
    avatars: [],
    title: undefined,
    onButtonClick: () => {},
    className: undefined,
    onEdit: () => {},
    onDelete: () => {},
    avatarsTo: undefined,
    to: undefined,
};

export default Accordion;
