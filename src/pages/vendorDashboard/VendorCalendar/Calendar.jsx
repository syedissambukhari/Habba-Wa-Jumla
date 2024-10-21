import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import {LuSettings2} from "react-icons/lu";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(2); //new Date().getMonth() + 1
  const [currentYear, setCurrentYear] = useState(2024); //new Date().getFullYear()
  const [view, setView] = useState("Month");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    day: 1,
    month: 0, 
    year: 2024,
  });

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const events = [
    {
      date: new Date(2024, 1, 1),
      time: "3:30p",
      title: "Visit Riyadh",
      color: "bg-red-400",
    },
    {
      date: new Date(2024, 1, 5),
      time: "8a",
      title: "scrum Planning",
      color: "bg-green-600",
    },
    {
      date: new Date(2024, 1, 3),
      time: "7:30a",
      title: "Fire John",
      color: "bg-orange-400",
    },
    {
      date: new Date(2024, 1, 2),
      time: "12p",
      title: "Meet with BM",
      color: "bg-teal-600",
    },
  ];

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 1) {
        setCurrentYear((year) => year - 1); // Decrease year if going to January
        return 12; // Go to December
      }
      return prevMonth - 1; // Go to previous month
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 12) {
        setCurrentYear((year) => year + 1); // Increase year if going to January
        return 1; // Go to January
      }
      return prevMonth + 1; // Go to next month
    });
  };

  const handleEventSave = () => {
    const eventDate = new Date(newEvent.year, newEvent.month, newEvent.day);
    const newEventData = {
      date: eventDate,
      time: "All Day",
      title: newEvent.title,
      color: "bg-blue-400",
    };
    events.push(newEventData); // Adding event to events list
    setIsModalOpen(false);
  };

  const renderDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay(); // Adjust for 0-indexed months

    const previousMonthDays = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    const calendarDays = [];

    // Add days from previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarDays.push(
        <div
          key={`prev-${i}`}
          className="h-[123.8px] relative opacity-30 gap-0 " // Shaded styling for previous month
        >
          <span className="text-[#6C737F] top-3 py-[4px] absolute font-[Inter] font-[400px] size-[16px] right-2">
            {previousMonthDays - i}
          </span>
        </div>
      );
    }

    // Get today's date
    const today = new Date();

    for (let day = 1; day <= daysInMonth; day++) {
      const event = events.find(
        (e) =>
          e.date.getDate() === day && e.date.getMonth() === currentMonth - 1
      );

      const isToday = day === 1 && currentMonth === 2 && currentYear === 2024; //for designing purpose current date
      // day === today.getDate() &&
      // currentMonth - 1 === today.getMonth() &&
      // currentYear === today.getFullYear();

      calendarDays.push(
        <div
          key={day}
          className={`h-[123.8px] relative gap-0 ${
            isToday ? " bg-[#6366F140] " : ""
          }`} // Add background color for today's date
        >
          <span className="text-[#111927]  top-3 font-[Inter] font-[400px] size-[16px]  absolute right-3">
            {day}
          </span>
          {event && (
            <div
              className={`absolute top-10 mx-[6px] left-1 right-1  font-[Inter] font-[500px] text-[12px] text-white  p-1 rounded-[8px] ${event.color}`}
            >
              {event.time} {event.title}
            </div>
          )}
        </div>
      );
    }

    // Calculate remaining slots for the next month
    const totalSlots = 42; // Full 6-week grid (7 days x 6 rows)
    const remainingSlots = totalSlots - calendarDays.length;
    for (let i = 1; i <= remainingSlots; i++) {
      calendarDays.push(
        <div
          key={`next-${i}`}
          className="opacity-30 h-[123.8px] relative gap-0"
        >
          <span className="text-[#6C737F] font-[Inter] font-[400px] size-[16px] top-3 py-[4px] absolute right-2">
            {i}
          </span>
        </div>
      );
    }

    return calendarDays;
  };

  const handleDayChange = (e) =>
    setNewEvent({ ...newEvent, day: Number(e.target.value) });
  const handleMonthChange = (e) =>
    setNewEvent({ ...newEvent, month: Number(e.target.value) });
  const handleYearChange = (e) =>
    setNewEvent({ ...newEvent, year: Number(e.target.value) });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mt-4 mb-6 px-[15px]">
        <div>
          <h2 className="text-lg font-semibold">
            <span className="font-[700] text-[23.3px] leading-[28px] text-[#111927] font-plusJakartaSans">
              {monthNames[currentMonth - 1]}
            </span>{" "}
            <span className="font-[400] text-[23.3px] leading-[28px] text-[#111927] font-plusJakartaSans">
              {currentYear}
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePrevMonth} className="text-gray-600">
            <img src="/left.svg" alt="Dropdown Arrow" />
          </button>
          <button onClick={handleNextMonth} className="text-gray-600">
            <img src="/right.svg" alt="Dropdown Arrow" />
          </button>

          <div className="relative block ">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between border border-[#E5E7EB] w-[120px] h-[47.33px] rounded-[8px] px-2 py-1 ml-[6px]"
            >
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[12px] text-[#6C737F]">
                  View
                </span>
                <span className="font-inter font-medium text-[14px] text-[#111927]">
                  {view}
                </span>
              </div>
              <img src="/dropcalendar.svg" alt="Dropdown Arrow" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-[120px] z-50 bg-white border border-gray-300 rounded-md shadow-md">
                <ul className="text-gray-700">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setView("Month");
                      setDropdownOpen(false);
                    }}
                  >
                    Month
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setView("Week");
                      setDropdownOpen(false);
                    }}
                  >
                    Week
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setView("Day");
                      setDropdownOpen(false);
                    }}
                  >
                    Day
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button onClick={() => setIsModalOpen(true)}>
            <Link
              to="/vendor/Calendar/new-event"
              className="flex items-center text-[14px] font-[600px] w-[136.28px] h-[40.45px] gap-2 bg-[#0B5D51] text-white px-4 py-2 rounded-[12px]"
            >
              <FiPlus className="w-[20px] h-[20px] " /> New Event
            </Link>
          </button>
        </div>
      </div>
      <div class="relative">
        <div className=" h-[800px] border gap-0 border-transparent shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.03),_0px_3px_10px_0px_rgba(11,93,81,0.5)] rounded-[20px] bg-white overflow-hidden">
          <div className="grid grid-cols-7 gap-0 mb-0 text-center h-[51.9px] font-[600px] text-[#111927]  text-[12px] font-[Inter] border border-transparent">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className={`border-b border-r border-[#F2F4F7] p-4 ${
                  index === 6 ? "border-r-0" : "" // Remove right border on the last item of the row
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          <div class="grid grid-cols-7 gap-0 h-[706.68px] mt-0 border border-transparent ">
            {renderDays().map((dayContent, index) => (
              <div
                key={index}
                className={`border-b border-r border-[#F2F4F7]   ${
                  (index + 1) % 7 === 0 ? "border-r-0" : "" // Remove right border on the last item of each row
                } ${index >= 35 ? "border-b-0" : ""}`} // Remove bottom border on the last row
              >
                {dayContent}
              </div>
            ))}
            {Array.from({ length: 42 - renderDays().length }, (_, i) => (
              <div
                key={`empty-${i}`}
                className={`border-b border-r border-[#F2F4F7]  h-[123.8px]  ${
                  (renderDays().length + i + 1) % 7 === 0 ? "border-r-0" : ""
                } ${renderDays().length + i >= 35 ? "border-b-0" : ""}`}
              />
            ))}
          </div>
        </div>
        {/* <img
          src="/icon.svg"
          alt="SVG Icon"
          className="absolute bottom-7 right-0  w-[93.99px] h-[93.99px]"
        /> */}
         <div className="bg-[#0B5D51] p-3 rounded-3xl absolute top-[696px] right-0 mt-2 ">
         <LuSettings2 size={28} color="white"/>
         </div>
      </div>
    </div>
  );
};

export default Calendar;
