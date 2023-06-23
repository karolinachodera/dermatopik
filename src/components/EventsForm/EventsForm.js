import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

export function EventsForm({ handleSubmit, textInput }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, e.target.event.value)}>
      <AddingFormInput input={textInput} />
      <button type="submit">Dodaj</button>
    </form>
  );
}
