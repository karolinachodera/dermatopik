import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

export function DrugsForm({ handleSubmit, textInput, frequencyInput }) {
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          name: e.target.drug.value,
          frequency: Number(e.target.drugFrequency.value),
        })
      }
      className="adding-form"
    >
      <AddingFormInput input={textInput} />
      <AddingFormInput input={frequencyInput} />
      <button type="submit">+</button>
    </form>
  );
}
