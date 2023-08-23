import { ReactElement } from "react";

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

export function AddingFormInput({ input } : {input: Input}): ReactElement {
  if (input.name === "note") {
    return (
      <div className="input-field">
        <label htmlFor={input.name}>{input.header}</label>
        <br />
        <textarea
          id={input.name}
          name={input.name}
          required={input.required}
          placeholder={input.header}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div
        className={`input-field ${input.type === "number" ? "frequency" : ""}`}
      >
        <label htmlFor={input.name}>{input.header}</label>
        <br />
        <input
          id={input.name}
          name={input.name}
          type={input.type}
          required={input.required}
          placeholder={
            input.type === "number" ? "Ilość dawek dziennie" : "Nazwa"
          }
        ></input>
      </div>
    );
  }
}
