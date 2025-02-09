"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TimeTableDay } from "./TimeTableDay";
import { timetableData } from "./TimeTableData";
import { DayData } from "@/types/types" // Ensure you import the correct type

interface TimeTableSliderProps {
  currentDay: number;
  onPrevDay: () => void;
  onNextDay: () => void;
}

// Default empty schedule to prevent errors
const defaultDayData: DayData = { day: "No Data", schedule: [] };

export const TimeTableSlider = ({
  currentDay,
  onPrevDay,
  onNextDay,
}: TimeTableSliderProps) => {
  // Ensure currentDay is within valid range
  const currentDayData: DayData = timetableData[currentDay] ?? defaultDayData;

  return (
    <div className="relative h-full group">
      <div className="h-full rounded-lg overflow-hidden">
        <TimeTableDay day={currentDayData} />
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={onPrevDay}
        disabled={currentDay <= 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={onNextDay}
        disabled={currentDay >= timetableData.length - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {timetableData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentDay === index ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
