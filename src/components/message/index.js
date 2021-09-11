import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';
import { StyledErrorMessage } from '../input/styled';

const Message = ({ showIf, message, duration, color, variant, onComplete, className }) => {
    const [isRendered, setIsRendered] = useState();
    const shouldShow = !!showIf;
    const hasDuration = !!duration;

    const setTimer = timerDuration => {
        const timeout = setTimeout(() => {
            setIsRendered(false);
            onComplete();
        }, timerDuration);

        return timeout;
    };

    useEffect(() => {
        setIsRendered(true);

        const shouldSetDuration = hasDuration && duration > 0;
        const timeoutControl = shouldSetDuration ? setTimer(duration) : undefined;

        // stop timeout if component is unmounted
        return () => {
            clearTimeout(timeoutControl);
        };

        // eslint-disable-next-line
    }, [showIf, duration]);

    if (shouldShow && isRendered) {
        const hasVariant = !!variant;

        if (hasVariant && variant === 'error') {
            return <StyledErrorMessage className={className}>{message}</StyledErrorMessage>;
        }

        return (
            <StyledContainer className={className} color={color} variant={variant} hasVariant={hasVariant}>
                {message}
            </StyledContainer>
        );
    }

    return <></>;
};

Message.propTypes = {
    /** controla si el mensaje se depliega */
    showIf: PropTypes.bool,
    /** contenido del mensaje */
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** duración máxima del mensaje en milisegundos */
    duration: PropTypes.number,
    /** color del texto */
    color: PropTypes.string,
    /** sobreescribe estilos de color y posiblemente otros más adelante */
    variant: PropTypes.oneOf(['error']),
    /** evento al finalizar el mensaje en caso que tuviese temporizador */
    onComplete: PropTypes.func,
    /** classname */
    className: PropTypes.string,
};

Message.defaultProps = {
    showIf: false,
    message: undefined,
    duration: undefined,
    color: '#6b9dbf',
    variant: undefined,
    onComplete: () => {},
    className: undefined,
};

export default Message;
