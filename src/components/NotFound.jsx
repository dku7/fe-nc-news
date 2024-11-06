import { Link } from "react-router-dom";
import Header from "./Header";
import sadDog from "../assets/sad-dog.jpg";

const NotFound = () => (
  <>
    <Header />
    <main className="text-center mt-20">
      <header>
        <h2 className="font-bold text-2xl">
          Oh no! We couldn't find that page
        </h2>
      </header>
      <div className="flex justify-center my-20">
        <img className="size-2/3" src={sadDog} alt="a sad looking dog" />
      </div>
      <p>
        But don't worry, you can read some great articles{" "}
        <Link className="underline" to="/">
          here
        </Link>
        .
      </p>
    </main>
  </>
);

export default NotFound;
