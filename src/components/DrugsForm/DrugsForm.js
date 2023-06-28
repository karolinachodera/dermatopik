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
    >
      <AddingFormInput input={textInput} />
      <AddingFormInput input={frequencyInput} />
      <button type="submit">Dodaj</button>
    </form>
  );
}
