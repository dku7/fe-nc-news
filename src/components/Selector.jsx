const Selector = ({ label, currentValue, onSelectChange, options }) => (
  <>
    <label htmlFor="select-option" className="mr-2">
      {label}
    </label>
    <select
      className="border rounded px-2 mx-2"
      value={currentValue}
      onChange={onSelectChange}
      id="select-option">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.caption}
        </option>
      ))}
    </select>
  </>
);

export default Selector;
