import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

export function CaresForm({ handleSubmit, textInput, frequencyInput }) {
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          name: e.target.care.value,
          frequency: Number(e.target.careFrequency.value),
        })
      }
    >
      <AddingFormInput input={textInput} />
      <AddingFormInput input={frequencyInput} />
      <button type="submit">Dodaj</button>
    </form>
  );
}
