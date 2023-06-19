export function AddingFormInput({ input, handleChange, listItem }) {
  return (
    <>
      <label htmlFor={input.name}>{input.header}</label>
      <input
        id={input.name}
        name={input.name}
        type={input.type}
        value={listItem.name}
        required={input.required && "required"}
        onChange={(e) => handleChange(e, listItem)}
      ></input>
    </>
  );
}
