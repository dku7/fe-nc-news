const PaginationButton = ({ buttonTitle, onPageChange }) => (
  <button
    title={buttonTitle}
    onClick={onPageChange}
    className="hover:bg-brand-tertiary bg-brand-primary rounded px-4 py-2 text-sm text-white hover:text-white"
  >
    {buttonTitle}
  </button>
);

export default PaginationButton;
