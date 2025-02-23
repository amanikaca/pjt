import { Calendar, ClipboardList, HelpCircle, Home, User } from 'lucide-react';

const BottomNavBar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-gray-300 bg-background text-foreground shadow-md dark:border-gray-700">
      <ul className="flex items-center justify-around py-2">
        {/* Home */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <Home className="size-6" />
          </button>
        </li>

        {/* Calendar */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <Calendar className="size-6" />
          </button>
        </li>

        {/* User */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <User className="size-6" />
          </button>
        </li>

        {/* Help Circle */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <HelpCircle className="size-6" />
          </button>
        </li>

        {/* Clipboard List */}
        <li className="flex flex-col items-center">
          <button className="focus:outline-none">
            <ClipboardList className="size-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
