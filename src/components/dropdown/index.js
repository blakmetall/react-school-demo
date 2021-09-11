import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RenderIf from '../render-if';
import { StyledAccordion, StyledAccordionTitle, StyledAddIcon, StyledHeader, StyledHeaderChildren } from './style';

const Dropdown = ({
    title,
    icon,
    color,
    isOpenByDefault,
    children,
    childrenClassName,
    headerChildren,
    headerReplacer,
    centered,
    className,
}) => {
    const hasIcon = !!icon;

    const hasValidIcon = () => {
        if (hasIcon && icon === 'add') {
            return true;
        }

        return false;
    };

    const getIconImage = () => {
        if (hasIcon && icon === 'add') {
            return <StyledAddIcon alt="" className="mr-4" />;
        }

        return undefined;
    };

    const hadleOnChildrenHeaderClick = e => {
        e.stopPropagation();
    };

    const defaultOpenStatusKey = isOpenByDefault ? '0' : undefined;

    return (
        <>
            <StyledAccordion defaultActiveKey={defaultOpenStatusKey} color={color} className={className}>
                <Card className="rounded-15">
                    {/* toggle */}
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <StyledHeader
                            className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between py-2 px-3 px-md-4"
                            centered={centered}
                        >
                            {/** //! limpiar */}
                            <RenderIf isTrue={!!title}>
                                <div className="d-flex align-items-center">
                                    {/* modal header icon */}
                                    <RenderIf isTrue={hasValidIcon()}>{getIconImage()}</RenderIf>

                                    {/* modal header title */}
                                    <StyledAccordionTitle className="app-font-19 font-weight-500 title mb-0">
                                        {title}
                                    </StyledAccordionTitle>
                                </div>

                                {/* eslint-disable-next-line */}
                                <StyledHeaderChildren onClick={hadleOnChildrenHeaderClick}>
                                    {headerChildren()}
                                </StyledHeaderChildren>
                            </RenderIf>

                            {/* header replacer */}
                            <RenderIf isTrue={!!headerReplacer}>{headerReplacer()}</RenderIf>
                        </StyledHeader>
                    </Accordion.Toggle>

                    {/* collapsable  */}
                    <Accordion.Collapse eventKey="0">
                        <div className={childrenClassName}>{children}</div>
                    </Accordion.Collapse>
                </Card>
            </StyledAccordion>
        </>
    );
};

Dropdown.propTypes = {
    /* título de la barra superior */
    title: PropTypes.string,
    /* icono del dropdown */
    icon: PropTypes.oneOf(['add', '']),
    /* color de barra superior */
    color: PropTypes.string,
    /* default open status for accordeon */
    isOpenByDefault: PropTypes.bool,
    /* elementos children */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /* className para los children */
    childrenClassName: PropTypes.string,
    /* children de la barra superior */
    headerChildren: PropTypes.any,
    /* children de la barra superior */
    headerReplacer: PropTypes.any,
    /* centrar titulo */
    centered: PropTypes.bool,
    /* className */
    className: PropTypes.string,
};

Dropdown.defaultProps = {
    title: '',
    icon: '',
    color: '#6fb2da',
    isOpenByDefault: true,
    children: [],
    childrenClassName: 'p-3 p-md-4 py-4 py-md-5',
    headerChildren: () => {},
    headerReplacer: () => {},
    centered: false,
    className: undefined,
};

export default Dropdown;
