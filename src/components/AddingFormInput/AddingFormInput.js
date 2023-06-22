export function AddingFormInput({ input, handleChange, listItem }) {
  if (input.name === "note") {
    return (
      <>
        <label htmlFor={input.name} required={input.required && "required"}>
          {input.header}
        </label>
        <textarea
          id={input.name}
          name={input.name}
          onChange={(e) => handleChange(e, listItem)}
        ></textarea>
      </>
    );
  } else {
    return (
      <>
        <label htmlFor={input.name}>{input.header}</label>
        <input
          id={input.name}
          name={input.name}
          type={input.type}
          //value={listItem.name}
          required={input.required && "required"}
          //onChange={(e) => handleChange(e, listItem)}
        ></input>
      </>
    );
  }
}
