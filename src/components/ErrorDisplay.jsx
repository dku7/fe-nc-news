import { Link } from "react-router-dom";
import errorPic from "../assets/error-pug.jpg";

const ErrorDisplay = ({ error }) => (
  <>
    <main className="mt-20 text-center">
      <header>
        <h2 className="text-xl font-bold md:text-2xl">
          Oh no! Something went wrong
        </h2>
      </header>
      <img
        className="mx-auto my-10 w-2/3 lg:w-1/2"
        src={errorPic}
        alt="an unamused looking pug"
      />
      {error?.message && (
        <p className="my-10 text-sm italic">{error?.message}</p>
      )}
      <p className="my-10">
        <span>
          But don't be sad, please try again later. Or return to the{" "}
          <Link className="hover:to-brand-secondary underline" to="/">
            homepage
          </Link>
          .
        </span>
      </p>
    </main>
  </>
);

export default ErrorDisplay;
