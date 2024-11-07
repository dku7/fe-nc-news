import { useContext } from "react";
import Hamburger from "./Hamburger";
import { SmallScreenContext } from "../contexts/SmallScreen";
import { Link } from "react-router-dom";

const Header = ({ isMenuOpen, handleMenuOpen }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);

  return (
    <header className="flex bg-gradient-to-b from-sky-700 to-sky-950 ">
      <div className="p-4">
        {isSmallScreen && (
          <Hamburger isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        )}
      </div>
      <div className="w-full text-center py-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white p-4">
          <Link to="/">
            <span className="border bg-gray-50 rounded-l-lg rounded-r px-2 text-sky-700">
              NC
            </span>{" "}
            News
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
