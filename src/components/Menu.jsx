import { Link } from "react-router-dom";
import TopicSelector from "./TopicSelector";

const Menu = () => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <TopicSelector />
    </ul>
  </nav>
);

export default Menu;
