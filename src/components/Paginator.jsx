const Paginator = ({ handlePageChange }) => (
  <div>
    <button
      onClick={() => {
        handlePageChange(-1);
      }}
    >
      Prev
    </button>
    <button
      onClick={() => {
        handlePageChange(1);
      }}
    >
      Next
    </button>
  </div>
);

export default Paginator;
