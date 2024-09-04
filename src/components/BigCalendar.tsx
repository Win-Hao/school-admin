'use client'
import React, {useState} from 'react';
import {Calendar, dayjsLocalizer, View, Views} from 'react-big-calendar'
import {calendarEvents} from "@/lib/data";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs)
const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)
    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView)
    }
    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            toolbar={true}
            views={['work_week', 'day']}
            view={view}
            onView={handleOnChangeView}
            style={{height: '98%'}}
            formats={{
                dayHeaderFormat: date => {
                    return dayjs(date).format("YYYY/MM/DD")
                }
            }}
            min={new Date(2024, 1, 0, 8, 0, 0)}
            max={new Date(2024, 1, 0, 17, 0, 0)}
        />
    );
};

export default BigCalendar;
