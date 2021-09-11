import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect, useDispatch } from 'react-redux';
import { ConfirmationModal, RenderIf, Spinner } from '..';
import { hideSuccessNotification, hideFailedNotification, hideBatchResultsNotification } from '../../store/actions/notifications';
import { StyledChildrenContainer, StyledContainer, StyledMobileSidebarContainer, StyledSidebarContainer } from './styled';
import Header from './header';
import MobileSidebar from './mobile-sidebar';
import Sidebar from './desktop-sidebar';

function Layout(props) {
    const { component, isMenuOpen, isMobileMenuOpen, urlParams, notifications,auth } = props;

    const [headerHeight, setHeaderHeight] = useState();

    console.log('auth', auth);

    const {
        showSuccess: showSuccessNotification,
        showFailed: showFailedNotification,
        failedMsg,
        showBatchResults: showBatchResultsNotification,
        batchResults: batchResultsNotificationData,
    } = notifications;

    const dispatch = useDispatch();

    const getBatchResultsNotificationDescription = () => {
        if (batchResultsNotificationData) {
            const { completed, failed, invalid } = batchResultsNotificationData;

            return `Completados: ${completed} / Fallidos: ${failed} / Inválidos: ${invalid}`;
        }

        return 'Error en los resultados...';
    };

    const fallbackLoadingScreen = () => {
        return (
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <Spinner size="xx-small" />
            </div>
        );
    };

    return (
        <>
            <div className="d-flex">
                <StyledSidebarContainer isMenuOpen={isMenuOpen}>
                    <Sidebar isMenuOpen={isMenuOpen} urlParams={urlParams} />
                </StyledSidebarContainer>

                <StyledContainer className="d-flex flex-column flex-grow-1">
                    <Header onHeightUpdate={height => setHeaderHeight(height)} />
                    <StyledChildrenContainer headerHeight={headerHeight} className="flex-grow-1">
                        <PerfectScrollbar>
                            <Suspense fallback={fallbackLoadingScreen()}>{React.createElement(component, props)}</Suspense>
                        </PerfectScrollbar>
                    </StyledChildrenContainer>
                </StyledContainer>

                <StyledMobileSidebarContainer headerHeight={headerHeight} isMobileMenuOpen={isMobileMenuOpen}>
                    <MobileSidebar urlParams={urlParams} />
                </StyledMobileSidebarContainer>
            </div>

            {/* generic success modal */}
            <RenderIf isTrue={!!showSuccessNotification}>
                <ConfirmationModal
                    show
                    onHide={() => dispatch(hideSuccessNotification())}
                    icon="success"
                    title="Perfecto!"
                    subtitle="Datos guardados con éxito!"
                    cancelLabel=""
                />
            </RenderIf>

            {/* generic failed modal */}
            <RenderIf isTrue={!!showFailedNotification}>
                <RenderIf isTrue={!failedMsg}>
                    <ConfirmationModal
                        show
                        onHide={() => dispatch(hideFailedNotification())}
                        icon="danger"
                        title="OH NO!"
                        subtitle="Algo salío mal"
                        description="Por favor inténtalo de nuevo más tarde"
                        cancelLabel=""
                    />
                </RenderIf>

                <RenderIf isTrue={!!failedMsg}>
                    <ConfirmationModal
                        show
                        onHide={() => dispatch(hideFailedNotification())}
                        icon="danger"
                        title="OH NO!"
                        subtitle="Algo salío mal"
                        description={failedMsg}
                        cancelLabel=""
                    />
                </RenderIf>
            </RenderIf>

            {/* generic failed modal */}
            <RenderIf isTrue={!!showBatchResultsNotification}>
                <ConfirmationModal
                    show
                    onHide={() => dispatch(hideBatchResultsNotification())}
                    title="Carga por lote completada"
                    subtitle="--"
                    description={getBatchResultsNotificationDescription()}
                    cancelLabel=""
                />
            </RenderIf>
        </>
    );
}

Layout.propTypes = {
    component: PropTypes.any,
    isMenuOpen: PropTypes.any,
    isMobileMenuOpen: PropTypes.any,
    urlParams: PropTypes.any,
    notifications: PropTypes.any,
    // auth: PropTypes.any,
};

Layout.defaultProps = {
    component: undefined,
    isMenuOpen: true,
    isMobileMenuOpen: false,
    urlParams: undefined,
    notifications: {},
    auth: undefined,
};

const mapStateToProps = (state, props) => ({
    isMenuOpen: state.ui.isMenuOpen,
    isMobileMenuOpen: state.ui.isMobileMenuOpen,
    urlParams: props.match && props.match.params ? props.match.params : undefined,
    notifications: state.notifications,
    auth: state.auth,
});

export default connect(mapStateToProps)(Layout);
