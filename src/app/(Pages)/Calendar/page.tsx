"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
// import { H1 } from "../design-system/formatting";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
};

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(
    null
  );

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      date: new Date(clickInfo.event.start).toLocaleDateString(), // convert date object into string
      description: clickInfo.event.extendedProps.description,
    });
  };

  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <h1
        className="sm:pt-10 pt-4 sm:pb-0 pb-6
        text-center text-3xl
        lg:text-2xl
        lg:text-4xl
        font-semibold tracking-wide
        text-blue-900"
      >
        Upcoming Events
      </h1>

        <div className="flex flex-col md:flex-row gap-4 p-3 sm:p-20">
          {/* Calendar with all events */}
          <div className="w-full md:w-2/3">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                listPlugin,
                interactionPlugin,
              ]}
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

          {/* Event details on the right side (or on the bottom) */}
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg">
            {selectedEvent ? (
              <div>
                <h2 className="text-xl font-bold text-black">{selectedEvent.title}</h2>
                <p className="text-black">{selectedEvent.date}</p>
                <p className="mt-2 text-black">{selectedEvent.description}</p>
              </div>
            ) : (
              <p className="text-gray-500">Click on an event to see details.</p>
            )}
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Calendar;
