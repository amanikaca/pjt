"use client";

import React from 'react';

interface Schedule {
  time: string;
  subject: string;
}

interface DayData {
  day: string;
  schedule: Schedule[];
}

interface TimeTableDayProps {
  day: DayData;
}

export const TimeTableDay = ({ day }: TimeTableDayProps) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-xl font-bold text-white text-center mb-4">
        {day.day}
      </h3>
      <div className="flex-1 space-y-3">
        {day.schedule.map((period, index) => (
          <div 
            key={index}
            className="bg-gray-700 rounded-lg p-3 flex justify-between items-center"
          >
            <span className="text-white font-medium">{period.time}</span>
            <span className="text-gray-300">{period.subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};