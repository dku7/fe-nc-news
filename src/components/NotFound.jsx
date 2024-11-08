import { Link } from "react-router-dom";
import Header from "./Header";
import notFoundPic from "../assets/not-found-pug.jpg";

const NotFound = () => (
  <>
    <Header />
    <main className="mt-20 text-center">
      <header>
        <h2 className="text-2xl font-bold">
          Oh no! We couldn't find that page
        </h2>
      </header>
      <img
        className="mx-auto my-20 block w-2/3 lg:w-1/2"
        src={notFoundPic}
        alt="a sad looking pug"
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
