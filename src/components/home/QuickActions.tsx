'use client';

import Link from 'next/link';
import React from 'react';
import { QuickActionButton } from './QuickActionButton';

export const QuickActions = () => {
  return (
    <div className="mt-4 w-full space-y-4 md:mt-0 md:flex md:h-full md:w-1/2 md:flex-col">
      <h2 className="mb-3 text-lg font-semibold text-white md:mb-0">
        Quick Actions
      </h2>
      <div className="space-y-4 md:flex md:flex-1 md:flex-col md:justify-between">
        {/* External Link (Opens in New Tab) */}
        <div className="flex gap-3">
          <QuickActionButton
            text="College Login"
            onClick={() =>
              window.open(
                'https://gecskp.etlab.in/user/login',
                '_blank',
                'noopener,noreferrer',
              )}
          />
          <QuickActionButton text="Bus Time" />
        </div>

        {/* Internal Links (Navigates Within App) */}
        <div className="flex gap-3">
          <Link href="/lost-and-found" legacyBehavior>
            <a>
              <QuickActionButton text="Lost & Found" />
            </a>
          </Link>
          <QuickActionButton
            text="SGPA Calculator"
            onClick={() =>
              window.open(
                'https://ktugpa.web.app/',
                '_blank',
                'noopener,noreferrer',
              )}
          />
          <QuickActionButton
            text="Hackathon"
            onClick={() =>
              window.open(
                'https://codecompasss.github.io/code_compass_india/repeto',
                '_blank',
                'noopener,noreferrer',
              )}
          />
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
          <QuickActionButton
            text="Scholarships"
            onClick={() =>
              window.open(
                'https://codecompasss.github.io/code_compass_india/repeto',
                '_blank',
                'noopener,noreferrer',
              )}
          />
          <QuickActionButton
            text="Project showcase"
            onClick={() =>
              window.open(
                'https://codecompasss.github.io/gecian_archive/',
                '_blank',
                'noopener,noreferrer',
              )}
          />
        </div>
      </div>
    </div>
  );
};
