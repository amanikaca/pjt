import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faCalendarAlt,
    faUser,
    faQuestionCircle,
    faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const BottomNavBar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background text-foreground shadow-md border-t border-gray-300 dark:border-gray-700 md:block lg:hidden">
            <ul className="flex justify-around items-center py-2">
                {/* Home */}
                <li className="flex flex-col items-center">
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
                    </button>
                </li>

                {/* Calendar */}
                <li className="flex flex-col items-center">
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6" />
                    </button>
                </li>

                {/* User */}
                <li className="flex flex-col items-center">
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
                    </button>
                </li>

                {/* Question Circle */}
                <li className="flex flex-col items-center">
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faQuestionCircle} className="w-6 h-6" />
                    </button>
                </li>

                {/* Clipboard List */}
                <li className="flex flex-col items-center">
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faClipboardList} className="w-6 h-6" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNavBar;
