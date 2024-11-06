const Selector = ({ label, initialValue, onSelectChange, options }) => (
  <>
    <label htmlFor="select-option" className="mr-2">
      {label}
    </label>
    <select
      className="border rounded px-2 mx-2"
      value={initialValue}
      onChange={onSelectChange}
      id="sort-by">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.caption}
        </option>
      ))}
    </select>
  </>
);

export default Selector;
