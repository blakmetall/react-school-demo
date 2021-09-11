import React from 'react';
import PropTypes from 'prop-types';
import getDividerBySize from './helpers/getDividerBySize';

function Divider({ size, className }) {
    return <div className={className}>{getDividerBySize(size)}</div>;
}

Divider.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    className: PropTypes.string,
};

Divider.defaultProps = {
    size: 'xs',
    className: '',
};

export default Divider;
