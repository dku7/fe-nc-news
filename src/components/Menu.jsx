import { Link } from "react-router-dom";
import TopicSelector from "./TopicSelector";
import { HomeIcon } from "@heroicons/react/24/outline";

const Menu = () => (
  <nav className="pl-4 pt-4 pr-20 ">
    <ul>
      <li>
        <div className="flex pb-2">
          <Link className="hover:underline" to="/">
            <HomeIcon className="text-gray-900 h-6 inline-block pb-1 pr-4" />
            Home
          </Link>
        </div>
      </li>
      <TopicSelector />
    </ul>
  </nav>
);

export default Menu;
