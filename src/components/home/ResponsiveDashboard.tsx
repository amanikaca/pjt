"use client";

import React, { useState } from 'react';
// import Header from '@/components/topNavbar';
// import BottomNavBar from '@/components/bottemNavbar';
import { TimeTableSlider } from './TimeTableSlider';
import { QuickActions } from './QuickActions';

const ResponsiveDashboard = () => {
  const [currentDay, setCurrentDay] = useState(0);
  
  const nextDay = () => {
    setCurrentDay((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const prevDay = () => {
    setCurrentDay((prev) => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl">

        {/* < Header /> */}
        
        <main className="px-3 pb-24">
          <div className="md:flex md:gap-6 lg:gap-8 md:h-[calc(100vh-12rem)]">
            <section className="h-[50vh] md:h-full w-full md:w-1/2">
              <h2 className="text-lg font-semibold text-white mb-3">Time Table</h2>
              <div className="bg-gray-800 rounded-xl p-4 h-[calc(100%-2rem)]">
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