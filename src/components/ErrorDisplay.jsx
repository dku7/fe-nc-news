import { Link } from "react-router-dom";
import errorPic from "../assets/error-pug.jpg";

const ErrorDisplay = () => {
  const reloadPage = () => window.location.reload();

  return (
    <>
      <main className="mt-20 text-center">
        <header>
          <h2 className="text-xl font-bold md:text-2xl">
            Oh no! Something went wrong
          </h2>
        </header>
        <img
          className="mx-auto my-20 w-2/3 lg:w-1/2"
          src={errorPic}
          alt="an unamused looking pug"
        />
        <p className="my-10">
          <span>
            But don't be sad, please try{" "}
            <Link className="underline" to="." onClick={reloadPage}>
              again
            </Link>
            .
          </span>
        </p>
      </main>
    </>
  );
};

export default ErrorDisplay;
