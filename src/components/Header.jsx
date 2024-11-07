import Hamburger from "./Hamburger";

const Header = ({ handleMenuOpen }) => (
  <header className="flex bg-gradient-to-b from-sky-700 to-sky-900 ">
    <div className="p-4">
      <Hamburger handleMenuOpen={handleMenuOpen} />
    </div>
    <div className="w-full text-center py-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white p-4">
        <span className="border bg-gray-50 rounded-l-lg rounded-r px-2 text-sky-700">
          NC
        </span>{" "}
        News
      </h1>
    </div>
  </header>
);

export default Header;
