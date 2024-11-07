import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Hamburger = ({ isMenuOpen, handleMenuOpen }) => {
  return (
    <button onClick={handleMenuOpen}>
      {isMenuOpen ? (
        <XMarkIcon className="size-8 text-white" />
      ) : (
        <Bars3Icon className="size-8 text-white" />
      )}
    </button>
  );
};

export default Hamburger;
