
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Calendar from "./AdminCalendar";

const PopUp = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    day: 1,
    month: 0, // January (0-indexed)
    year: 2024,
  });

  const navigate = useNavigate();

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

  const handleDayChange = (e) =>
    setNewEvent({ ...newEvent, day: Number(e.target.value) });
  const handleMonthChange = (e) =>
    setNewEvent({ ...newEvent, month: Number(e.target.value) });
  const handleYearChange = (e) =>
    setNewEvent({ ...newEvent, year: Number(e.target.value) });

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Calendar />
      </div>
      <div className="fixed inset-0 flex items-center justify-center bg-[#000000D9] z-50">
        <div className="bg-white w-[398px] rounded-[15px] p-[28px] w-96 shadow-lg">
          <h2 className="text-[12px] font-[Inter] text-black font-normal mb-1">
            Event Title
          </h2>
          <input
            type="text"
            placeholder="Enter event Title"
            className="w-full mb-3 p-2 border border-[#E5E7EB] rounded-[8px] placeholder:text-[12px] placeholder:font-light placeholder:font-inter placeholder:text-[#6C737F]"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <h2 className="text-[12px] font-[Inter] text-black font-[400px] mb-1">
            Date
          </h2>
          <div className="flex gap-[23px] mb-4">
            <select
              className="p-2 border border-[#E5E7EB] rounded-[8px] w-[93px] outline-none font-[Inter] font-[400px] text-[12px] text-black"
              value={newEvent.day}
              onChange={handleDayChange}
            >
              {[...Array(31).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </select>

            <select
              className="p-2 border border-[#E5E7EB] rounded-[8px] w-[93px] outline-none font-[Inter] font-[400px] text-[12px] text-black"
              value={newEvent.month}
              onChange={handleMonthChange}
            >
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="p-2 border border-[#E5E7EB] rounded-[8px] w-[93px] outline-none font-[Inter] font-[400px] text-[12px] text-black"
              value={newEvent.year}
              onChange={handleYearChange}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={2020 + i} value={2020 + i}>
                  {2020 + i}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-start gap-[15px]">
            <button
              className="flex items-center gap-3 bg-[#0B5D51] w-[94.36px] h-[40.45] text-white px-4 py-2 rounded-[12px] mr-2"
              onClick={handleEventSave}
            >
              <FaPlus /> Add
            </button>
            <button
              className="text-[#0B5D51] border border-[#0B5D51] px-4 py-2 rounded-[12px]"
              onClick={() => navigate(-1)} // Navigate back
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
