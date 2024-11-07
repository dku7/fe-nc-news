import { Bars3Icon } from "@heroicons/react/24/outline";

const Hamburger = ({ handleMenuOpen }) => (
  <button onClick={handleMenuOpen}>
    <Bars3Icon className="size-8 text-white md:hidden" />
  </button>
);

export default Hamburger;
