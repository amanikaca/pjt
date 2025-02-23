'use client';

import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-background px-4 py-2 shadow-md dark:border-gray-700 md:border md:border-gray-300 md:shadow-none">
      {/* User Name */}
      <span className="truncate text-lg font-bold text-foreground">
        {userName || 'Guest'}
      </span>

      {/* User Icon */}
      <button
        className="flex size-10 items-center justify-center rounded-full bg-purple-200 transition-colors hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700"
        title="User Profile"
        onClick={() => console.log('Profile Clicked')}
        aria-label="Open user profile"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="size-5 text-purple-800 dark:text-purple-200"
        />
      </button>
    </div>
  );
};

export default Header;
