import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, MonthlyCalendar } from 'react-rainbow-components';
import DailyTasks from './daily-tasks';
import { getTasks } from './helpers';
import { StyledContainer } from './styled';

const Calendar = ({ activitiesList }) => {
    const [datesHandle, setDatesHandle] = useState({ currentMonth: new Date(), selectedDate: undefined });

    return (
        <StyledContainer className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap">
            <Card className="rainbow-p-horizontal_medium rainbow-p-vertical_large">
                <MonthlyCalendar
                    currentMonth={datesHandle.currentMonth}
                    selectedDate={datesHandle.selectedDate}
                    onMonthChange={({ month }) => setDatesHandle({ currentMonth: month })}
                    minDate={new Date('01/04/2020')} // props , default props ?
                    maxDate={new Date('01/04/3020')} // props , default props ?
                    dateComponent={date => <DailyTasks labels={getTasks(date, activitiesList)} />}
                />
            </Card>
        </StyledContainer>
    );
};

Calendar.propTypes = {
    activitiesList: PropTypes.array,
};
Calendar.defaultProps = {
    activitiesList: [],
};

export default Calendar;
