function Select({ name, range, state, setter }) {
  const options = range.map((option) => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  });

  return (
    <label>
      {name}{" "}
      <select
        value={state}
        onChange={(e) => {
          setter(e.target.value);
        }}
      >
        {options}
      </select>
    </label>
  );
}

export default Select;
