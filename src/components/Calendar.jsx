import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import React, { useState } from "react"
import DatePicker from "react-datepicker"

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

function MyCalendar() {
    return (
        <div className="calendar">
            <Calendar localizer={localizer} startAccessor="start" endAccessor="end" style={{height: 400, width: 450, margin: "50px"}} />
        </div>
    )
}

export default MyCalendar 