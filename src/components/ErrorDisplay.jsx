import wrongSheep from "../assets/wrong-sheep.jpg";

const ErrorDisplay = () => (
  <>
    <main className="text-center mt-20">
      <header>
        <h2 className="font-bold text-2xl">Oh no! Something went wrong</h2>
      </header>
      <img
        className="w-2/3 lg:w-1/2 block mx-auto my-20"
        src={wrongSheep}
        alt="as sheep in front of a blackboard"
      />
    </main>
  </>
);

export default ErrorDisplay;
