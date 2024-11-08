import { Link } from "react-router-dom";
import errorPic from "../assets/error-pug.jpg";

const ErrorDisplay = () => {
  const reloadPage = () => window.location.reload();

  return (
    <>
      <main className="mt-20 text-center">
        <header>
          <h2 className="text-2xl font-bold">Oh no! Something went wrong</h2>
        </header>
        <img
          className="mx-auto my-20 block h-2/3 lg:h-1/2"
          src={errorPic}
          alt="an unamused looking pug"
        />
        <p className="my-10">
          <span>
            But don't be sad, try{" "}
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
