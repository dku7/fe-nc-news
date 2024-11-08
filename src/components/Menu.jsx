import { Link } from "react-router-dom";
import TopicSelector from "./TopicSelector";
import { HomeIcon } from "@heroicons/react/24/outline";

const Menu = ({ handleMenuOpen }) => (
  <nav className="pl-4 pr-20 pt-4">
    <ul>
      <li>
        <div className="flex pb-2">
          <Link
            className="hover:text-brand-secondary text-lg hover:underline"
            onClick={handleMenuOpen}
            to="/"
          >
            <HomeIcon className="inline-block h-6 pb-1 pr-4 text-gray-900" />
            Home
          </Link>
        </div>
      </li>
      <li>
        <TopicSelector onSelect={handleMenuOpen} />
      </li>
    </ul>
  </nav>
);

export default Menu;
