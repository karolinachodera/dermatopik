export function AddingFormInput({ input }) {
  if (input.name === "note") {
    return (
      <>
        <label htmlFor={input.name} required={input.required && "required"}>
          {input.header}
        </label>
        <textarea id={input.name} name={input.name}></textarea>
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
          required={input.required && "required"}
        ></input>
      </>
    );
  }
}
