'use client';

import React from 'react';

type Schedule = {
  time: string;
  subject: string;
};

type DayData = {
  day: string;
  schedule: Schedule[];
};

type TimeTableDayProps = {
  day: DayData;
};

export const TimeTableDay = ({ day }: TimeTableDayProps) => {
  return (
    <div className="flex size-full flex-col">
      <h3 className="mb-4 text-center text-xl font-bold text-white">
        {day.day}
      </h3>
      <div className="flex-1 space-y-3">
        {day.schedule.map(period => (
          <div
            key={`${period.time}-${period.subject}`} // Unique composite key
            className="flex items-center justify-between rounded-lg bg-gray-700 p-3"
          >
            <span className="font-medium text-white">{period.time}</span>
            <span className="text-gray-300">{period.subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
