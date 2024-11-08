import { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import { SmallScreenContext } from "../contexts/SmallScreen";

const MainContainer = ({ children, searchParams, article }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [content, setContent] = useState();

  const handleMenuOpen = () => {
    if (!isSmallScreen) setIsMenuOpen(false);
    else setIsMenuOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const showMenuOnly = () => (
      <div className="col-span-2 row-start-2 border-r border-gray-200">
        <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      </div>
    );

    const showMenuAndContent = () => (
      <>
        <div className="col-span-1 row-start-2 hidden border-r border-gray-200 md:block">
          <Menu handleMenuOpen={handleMenuOpen} />
        </div>

        <div className="col-span-2 row-start-2 flex justify-center md:col-span-1">
          {children}
        </div>
      </>
    );

    isMenuOpen ? setContent(showMenuOnly()) : setContent(showMenuAndContent());
  }, [isMenuOpen, searchParams, article]);

  return (
    <div className="grid grid-cols-[200px_auto] grid-rows-[112px_auto]">
      <div className="sticky top-0 col-span-2 row-start-1">
        <Header isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      </div>
      {content}
    </div>
  );
};

export default MainContainer;
