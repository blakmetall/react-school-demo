import React from 'react';
import PropTypes from 'prop-types';
import { StyledCircle } from './styled';

const ColorCircle = ({ index }) => {
    const colors = ['#d90024', '#d3264b', '#88BDDA', '#6b9DBF', '#d6cbb9', '#efefef', '#757575'];
    const colorIndex = index % colors.length;
    const color = colors[colorIndex];

    return <StyledCircle className=" rounded-circle mx-auto flex-shrink-1" color={color} />;
};

ColorCircle.propTypes = {
    index: PropTypes.number,
};

ColorCircle.defaultProps = {
    index: 0,
};

export default ColorCircle;
