import { useCallback } from "react";
import PaginationButton from "./PaginationButton";

const Paginator = ({ handlePageChange, currentPage, isLastPage }) => {
  const handlePrevPage = useCallback(
    () => handlePageChange(-1),
    [handlePageChange],
  );
  const handleNextPage = useCallback(
    () => handlePageChange(1),
    [handlePageChange],
  );

  return (
    <div className="mb-10 mt-10 flex">
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
