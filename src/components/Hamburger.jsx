import { Bars3Icon } from "@heroicons/react/24/outline";

const Hamburger = ({ handleMenuOpen }) => {
  return (
    <button onClick={handleMenuOpen}>
      <Bars3Icon className="size-8 text-white" />
    </button>
  );
};

export default Hamburger;
