import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

import "./AddingForm.css";

export function AddingForm({
  inputs,
  handleInputChange,
  handleSubmit,
  listItem,
}) {
  function setAddingFormInputs() {
    if (inputs.name === "note") {
      return (
        <>
          <label htmlFor={inputs.name} required={inputs.required && "required"}>
            {inputs.header}
          </label>
          <textarea
            id={inputs.name}
            name={inputs.name}
            onChange={(e) => handleInputChange(e, listItem)}
          ></textarea>
        </>
      );
    } else {
      return inputs.map((input) => (
        <AddingFormInput
          input={input}
          key={input.name}
          handleChange={handleInputChange}
          listItem={listItem}
        />
      ));
    }
  }

  return (
    <form className="adding-form" onSubmit={(e) => handleSubmit(e)}>
      {setAddingFormInputs()}
      <button type="submit">Dodaj</button>
    </form>
  );
}
