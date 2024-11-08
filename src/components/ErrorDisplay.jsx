import { Link } from "react-router-dom";
import unamusedDog from "../assets/unamused-dog.jpg";

const ErrorDisplay = () => (
  <>
    <main className="text-center mt-20">
      <header>
        <h2 className="font-bold text-2xl">Oh no! Something went wrong</h2>
      </header>
      <img
        className="h-2/3 lg:h-1/2 block mx-auto my-20"
        src={unamusedDog}
        alt="an unamused looking dog"
      />
    </main>
  </>
);

export default ErrorDisplay;
