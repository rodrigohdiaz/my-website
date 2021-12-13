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

const events = ""

function MyCalendar() {

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }


    return (
        <div className="calendar">
        <h1>Calendar</h1>
        <h2>Add New Event</h2>
        <div>
            <input 
                type="text" 
                placeholder="Add Title" 
                style={{width: "20%", marginRight: "10px"}}
                value={newEvent.title} 
                onChante={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
        </div>
            <Calendar 
                localizer={localizer} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                style={{height: 400, width: 350, margin: "50px"}} 
                />
        </div>
    )
}

export default MyCalendar 