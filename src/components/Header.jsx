import { useContext } from "react";
import Hamburger from "./Hamburger";
import { SmallScreenContext } from "../contexts/SmallScreen";
import { Link } from "react-router-dom";
import LogInButton from "./LogInButton";

const Header = ({ isMenuOpen, handleMenuOpen }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);

  return (
    <div className="bg-brand-primary flex">
      <div className="p-4">
        {isSmallScreen && (
          <Hamburger isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        )}
      </div>
      <header className="w-full py-8 text-center">
        <h1 className="pr-12 text-3xl font-bold text-white md:text-5xl">
          <Link to="/">
            <span className="text-brand-primary rounded-l-lg rounded-r border bg-gray-50 px-2 tracking-wide">
              NC
            </span>
            <span className="ml-4">News</span>
          </Link>
        </h1>
      </header>
      <div>
        <LogInButton />
      </div>
    </div>
  );
};

export default Header;
