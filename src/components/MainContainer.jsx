import { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import Header from "./Header";
import { SmallScreenContext } from "../contexts/SmallScreen";

const MainContainer = ({ children, searchParams }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [content, setContent] = useState();

  const handleMenuOpen = () => {
    console.log("small screen?", isSmallScreen);
    console.log("menu?", isMenuOpen);
    if (!isSmallScreen) setIsMenuOpen(false);

    if (isSmallScreen) {
      console.log("inverting menu");
      setIsMenuOpen((isOpen) => {
        return !isOpen;
      });
    }
  };

  useEffect(() => {
    const showMenuOnly = () => (
      <div className="col-span-2 row-start-2 border-r border-gray-200">
        <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      </div>
    );

    const showMenuAndContent = () => (
      <>
        <div className="hidden md:block col-span-1 row-start-2 border-r border-gray-200">
          <Menu handleMenuOpen={handleMenuOpen} />
        </div>

        <div className="col-span-2 md:col-span-1 row-start-2 flex justify-center">
          {children}
        </div>
      </>
    );

    console.log("is smallscreen ", isSmallScreen);
    isMenuOpen ? setContent(showMenuOnly()) : setContent(showMenuAndContent());
  }, [isMenuOpen, searchParams]);

  return (
    <div className="grid grid-cols-[200px_auto] grid-rows-[112px_auto] min-w-[440px]">
      <div className="col-span-2 row-start-1">
        <Header handleMenuOpen={handleMenuOpen} />
      </div>
      {content}
    </div>
  );
};

export default MainContainer;
