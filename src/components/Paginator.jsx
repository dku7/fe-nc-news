import PaginationButton from "./PaginationButton";

const Paginator = ({ handlePageChange, currentPage, isLastPage }) => {
  const handlePrevPage = () => handlePageChange(-1);
  const handleNextPage = () => handlePageChange(1);

  return (
    <div className="mt-10 flex">
      <div className="mr-4">
        {currentPage > 1 && (
          <PaginationButton
            buttonTitle={"Prev"}
            onPageChange={handlePrevPage}
          />
        )}
      </div>

      <div>
        {!isLastPage && (
          <PaginationButton
            buttonTitle={"Next"}
            onPageChange={handleNextPage}
          />
        )}
      </div>
    </div>
  );
};

export default Paginator;
