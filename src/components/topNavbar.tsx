"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";

const Header: React.FC<{ userName: string }> = ({ userName }) => {
    return (
        <div className="flex items-center justify-between bg-background px-4 py-2 rounded-lg shadow-md md:shadow-none md:border md:border-gray-300 dark:border-gray-700">
            {/* User Name */}
            <span className="text-lg font-bold truncate text-foreground">{userName || "Guest"}</span>

            {/* User Icon */}
            <button 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800 hover:bg-purple-300 dark:hover:bg-purple-700 transition-colors"
                title="User Profile"
                onClick={() => console.log("Profile Clicked")}
                aria-label="Open user profile"
            >
                <FontAwesomeIcon
                    icon={faCircleUser}
                    className="text-purple-800 dark:text-purple-200 w-5 h-5"
                />
            </button>
        </div>
    );
};

export default Header;