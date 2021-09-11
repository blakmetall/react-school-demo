import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dataset, RadioButtonGroup } from 'react-rainbow-components';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { getUniqueId } from '../../../helpers';
import { RenderIf } from '../..';
import { StyledCard, StyledChart, StyledChartHeading } from './styled';

const chartOptions = [
    { value: 'line', label: 'Lines' },
    { value: 'bar', label: 'Bars' },
];

const labelOptions = {
    line: 'Lineas',
    bars: 'Barras',
};

const InteractiveChart = ({ title, data, months }) => {
    const [chartType, setChartType] = useState('line');
    const [saved, setSaved] = useState('line');
    const id = getUniqueId('chart');

    const ui = useSelector(state => state.ui);
    const { isMenuOpen, isMobileMenuOpen } = ui;
    const shouldRenderChart = chartType !== 're-render';

    useEffect(() => {
        setSaved(chartType);

        const t = setTimeout(() => {
            setChartType('re-render');
        }, 450);

        return () => {
            clearTimeout(t);
        };

        // eslint-disable-next-line
    }, [isMenuOpen, isMobileMenuOpen]);

    useEffect(() => {
        if (chartType === 're-render') {
            setChartType(saved);
            setSaved();
        }

        // eslint-disable-next-line
    }, [chartType]);

    return (
        <Row className="mx-0 px-0 w-100 justify-content-center">
            <StyledCard className=" flex-grow-1 rainbow-m-top_x-large rainbow-m-bottom_x-large rainbow-p-around_large">
                {/* chart title  and selection */}
                <StyledChartHeading className="d-flex align-items-center justify-content-between mb-5">
                    <div>{title}</div>

                    <RadioButtonGroup
                        id={id}
                        options={chartOptions}
                        value={chartType}
                        variant="brand"
                        onChange={e => setChartType(e.target.value)}
                    />
                </StyledChartHeading>

                {/* selected chart type */}
                <span className="rainbow-flex rainbow-align-content_center rainbow-m-bottom_medium">
                    {labelOptions[chartType]}
                </span>

                {/* chart dataset */}
                <RenderIf isTrue={shouldRenderChart}>
                    <StyledChart labels={months} type={chartType} maintainAspectRatio={false}>
                        {data.map((v, index) => {
                            const key = `dataset-${index}`;

                            return (
                                <Dataset
                                    key={key}
                                    title={v.title}
                                    values={v.values}
                                    backgroundColor={v.backgroundColor}
                                    borderColor={v.borderColor}
                                />
                            );
                        })}
                    </StyledChart>
                </RenderIf>
            </StyledCard>
        </Row>
    );
};

InteractiveChart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.any,
    months: PropTypes.array,
};

InteractiveChart.defaultProps = {
    title: undefined,
    data: undefined,
    months: undefined,
};

export default InteractiveChart;
