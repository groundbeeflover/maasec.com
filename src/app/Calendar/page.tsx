"use client";

 import React, { useState } from "react";
import {H1 } from "../design-system/formatting";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CALENDARDATA = [
  {
    id: "0",
    title: "Exciting Event",
    start: "2025-02-27",
    description: "Join us for an amazing event!",
  },
  {
    id: "1",
    title: "Other Event",
    start: "2025-02-15",
    description: "This is another cool event happening soon.",
  },
  {
    id: "2",
    title: "Pipi popo",
    start: "2025-03-10",
    description: "The most exiting of all",
  },
];

type SelectedEvent = {
    title: string;
    date: string;
    description: string;
}

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      date: new Date(clickInfo.event.start).toLocaleDateString(), // convert date object into string
      description: clickInfo.event.extendedProps.description,
    });
  };

  return (
    <div className="flex gap-4 p-4">
        <Navbar />
      {/* Calendar with all events */}
      <div className="w-3/4">
        <H1>Upcoming Events</H1>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          events={CALENDARDATA}
          eventClassNames={() => "cursor-pointer"}
          eventClick={handleEventClick}
          height="auto"
          buttonText={{
            listMonth: "🚨 Upcoming",
          }}
        />
      </div>

      {/* Event details on the right side */}
      <div className="w-1/4 p-4 border-l bg-gray-100 rounded-xl">
        <h2 className="text-xl font-bold">Event Information</h2>
        {selectedEvent ? (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-700">{selectedEvent.date}</p>
            <p className="mt-2">{selectedEvent.description}</p>
          </div>
        ) : (
          <p className="text-gray-500">Click on an event to see details</p>
        )}
      </div>
        <Footer/>
    </div>
  );
};

export default Calendar;
