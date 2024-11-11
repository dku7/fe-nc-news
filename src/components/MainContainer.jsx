import { useContext, useEffect, useState } from "react";
import { getTopics } from "../services/api";
import Menu from "./Menu";
import Header from "./Header";
import { SmallScreenContext } from "../contexts/SmallScreen";
import { TopicsListContext } from "../contexts/TopicsList";
import Footer from "./Footer";

const MainContainer = ({ children, searchParams, article }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);
  const { setTopicsList } = useContext(TopicsListContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [content, setContent] = useState();

  const handleMenuOpen = () => {
    if (!isSmallScreen) setIsMenuOpen(false);
    else setIsMenuOpen((isOpen) => !isOpen);
  };

  const showMenuOnly = (
    <div className="col-span-2 row-start-2 border-r border-gray-200">
      <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
    </div>
  );

  const showMenuAndContent = (
    <>
      <div className="col-span-1 row-start-2 hidden border-r border-gray-200 md:block">
        <Menu handleMenuOpen={handleMenuOpen} />
      </div>

      <div className="col-span-2 row-start-2 flex justify-center md:col-span-1">
        {children}
      </div>
      <div className="col-span-2 row-start-3 border-t bg-gray-100">
        <Footer />
      </div>
    </>
  );

  useEffect(() => {
    getTopics().then((topics) => setTopicsList(topics));
  }, []);

  useEffect(() => {
    isMenuOpen ? setContent(showMenuOnly) : setContent(showMenuAndContent);
  }, [isMenuOpen, searchParams, article]);

  return (
    <div className="grid grid-cols-[200px_auto] grid-rows-[112px_auto_80px]">
      <div className="sticky top-0 col-span-2 row-start-1">
        <Header isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      </div>
      {content}
    </div>
  );
};

export default MainContainer;
