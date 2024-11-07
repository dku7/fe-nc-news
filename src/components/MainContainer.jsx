import Menu from "./Menu";
import Header from "./Header";

const MainContainer = ({ children }) => (
  <div className="grid grid-cols-[200px_auto] grid-rows-[112px_auto] min-w-[440px]">
    <div className="col-span-2 row-start-1">
      <Header />
    </div>
    <div className="hidden md:block col-span-1 row-start-2 border-r border-gray-200">
      <Menu />
    </div>

    <div className="col-span-2 md:col-span-1 row-start-2 flex justify-center">
      {children}
    </div>
  </div>
);

export default MainContainer;
