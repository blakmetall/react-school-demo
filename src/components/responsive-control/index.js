import React from 'react';
import PropTypes from 'prop-types';
import { getHiddenClass, getVisibilityClass } from './helpers';

const ResponsiveControl = ({ visibleOn, hiddenOn, children, className }) => {
    const visibilityClass = getVisibilityClass(visibleOn);
    const hiddenClass = getHiddenClass(hiddenOn);

    return <div className={`${className} ${visibilityClass} ${hiddenClass}`}>{children}</div>;
};

ResponsiveControl.propTypes = {
    visibleOn: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    hiddenOn: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    className: PropTypes.string,
};

ResponsiveControl.defaultProps = {
    visibleOn: undefined,
    hiddenOn: undefined,
    children: undefined,
    className: '',
};

export default ResponsiveControl;
