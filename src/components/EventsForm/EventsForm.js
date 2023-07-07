import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

export function EventsForm({ handleSubmit, textInput }) {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, e.target.event.value)}
      className="adding-form"
    >
      <AddingFormInput input={textInput} />
      <button type="submit">+</button>
    </form>
  );
}
