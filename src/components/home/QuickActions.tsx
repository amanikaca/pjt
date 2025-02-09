"use client";

import React from 'react';
import { QuickActionButton } from './QuickActionButton';
import Link from "next/link";

export const QuickActions = () => {
  return (
    <div className="space-y-4 mt-4 md:mt-0 w-full md:w-1/2 md:h-full md:flex md:flex-col">
      <h2 className="text-lg font-semibold text-white mb-3 md:mb-0">Quick Actions</h2>
      <div className="space-y-4 md:flex-1 md:flex md:flex-col md:justify-between">
        
        {/* External Link (Opens in New Tab) */}
        <div className="flex gap-3">
          <QuickActionButton 
            text="College Login" 
            onClick={() => window.open("https://www.gecskp.ac.in/", "_blank", "noopener,noreferrer")}
          />
          <QuickActionButton text="Bus Time" />
        </div>

        {/* Internal Links (Navigates Within App) */}
        <div className="flex gap-3">
          <Link href="/lost-and-found" legacyBehavior>
            <QuickActionButton text="Lost & Found" />
          </Link>
          <Link href="/sgpa-calculator" legacyBehavior>
            <QuickActionButton text="SGPA Calculator" />
          </Link>
          <Link href="/hackathon" legacyBehavior>
            <QuickActionButton text="Hackathon" />
          </Link>
        </div>

        <div className="flex gap-3">
          <QuickActionButton text="College Map" />
          <QuickActionButton text="Academic Calendar" />
        </div>

        <div className="flex gap-3">
          <QuickActionButton text="Club" />
          <QuickActionButton text="Anonymous Complaint" />
        </div>

        <div className="flex gap-3">
          <QuickActionButton text="Private Hostel" />
          <QuickActionButton text="Scholarships" />
          <QuickActionButton text="Social Hub" />
        </div>
      </div>
    </div>
  );
};
