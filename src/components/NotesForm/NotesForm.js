import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

export function NotesForm({ handleSubmit, textarea }) {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, e.target.note.value)}
      className="adding-form"
    >
      <AddingFormInput input={textarea} />
      <button type="submit">+</button>
    </form>
  );
}
