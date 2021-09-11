import React from 'react';
import PropTypes from 'prop-types';
import InteractiveChart from './interactive';

const Chart = ({ title, data, months }) => {
    return <InteractiveChart title={title} data={data} months={months} />;
};

Chart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.any,
    months: PropTypes.array,
};

Chart.defaultProps = {
    title: undefined,
    data: undefined,
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export default Chart;
