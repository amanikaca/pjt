'use client';

import React, { useState } from 'react';
import { QuickActions } from './QuickActions';
// import Header from '@/components/topNavbar';
// import BottomNavBar from '@/components/bottemNavbar';
import { TimeTableSlider } from './TimeTableSlider';

const ResponsiveDashboard = () => {
  const [currentDay, setCurrentDay] = useState(0);

  const nextDay = () => {
    setCurrentDay(prev => (prev === 4 ? 0 : prev + 1));
  };

  const prevDay = () => {
    setCurrentDay(prev => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl">
        {/* < Header /> */}

        <main className="px-3 pb-24">
          <div className="md:flex md:h-[calc(100vh-12rem)] md:gap-6 lg:gap-8">
            <section className="h-[50vh] w-full md:h-full md:w-1/2">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Time Table
              </h2>
              <div className="h-[calc(100%-2rem)] rounded-xl bg-gray-800 p-4">
                <TimeTableSlider
                  currentDay={currentDay}
                  onPrevDay={prevDay}
                  onNextDay={nextDay}
                />
              </div>
            </section>

            <QuickActions />
          </div>
        </main>

        {/* < BottomNavBar /> */}
      </div>
    </div>
  );
};

export default ResponsiveDashboard;
