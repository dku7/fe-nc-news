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
      <img
        className="w-2/3 lg:w-1/2 block mx-auto my-20"
        src={sadDog}
        alt="a sad looking dog"
      />

      <p className="my-10">
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
