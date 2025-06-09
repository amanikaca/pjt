import { Book, Calendar, Calendar2, Home2, Money } from "iconsax-react";
import { ReceiptIndianRupee } from "lucide-react";

const BottomNavBar = () => {
  return (
    <nav className="fixed left-6 right-6 bottom-8 border-t border-gray-300 bg-[var(--main)] text-foreground rounded-2xl">
      <ul className="flex items-center justify-around py-2">
        {/* Home */}
        <li className="flex flex-col items-center">
          <button type="button" className="focus:outline-none">
            <Home2 size="32" color="var(--text)" />
          </button>
        </li>

        {/* Calendar */}
        <li className="flex flex-col items-center">
          <button type="button" className="focus:outline-none">
            <Book size="32" color="var(--text)" />
          </button>
        </li>

        {/* Calendar */}
        <li className="flex flex-col items-center">
          <button type="button" className="focus:outline-none">
            <Calendar2 size="32" color="var(--text)" />
          </button>
        </li>

        <li className="flex flex-col items-center">
          <button type="button" className="focus:outline-none">
            <Money size="32" color="var(--text)" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
