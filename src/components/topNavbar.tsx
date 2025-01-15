"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const UserProfile: React.FC<{ userName: string }> = ({ userName }) => {
    return (
        <div className="flex items-center justify-between bg-background px-4 py-2 rounded-lg shadow-md md:shadow-none md:border md:border-gray-300 dark:border-gray-700">
            {/* User Name */}
            <span className="text-lg font-bold truncate text-foreground">{userName || "Guest"}</span>

            {/* User Icon */}
            <div
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800 cursor-pointer"
                title="User Profile"
                onClick={() => console.log("Profile Clicked")} // Replace with actual handler
            >
                <FontAwesomeIcon
                    icon={faCircleUser}
                    className="text-purple-800 dark:text-purple-200 w-5 h-5"
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};

export default UserProfile;
