import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="pt-10 text-center text-xs text-gray-700">
      <Link
        to="https://www.github.com/dku7/fe-nc-news"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-secondary hover:underline"
      >
        GitHub
      </Link>
      {" | "}
      <Link
        to="https://www.linkedin.com/in/dku7/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-secondary hover:underline"
      >
        LinkedIn
      </Link>
    </div>
  </footer>
);

export default Footer;
