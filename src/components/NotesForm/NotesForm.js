import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

export function NotesForm({ handleSubmit, textarea }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, e.target.note.value)}>
      <AddingFormInput input={textarea} />
      <button type="submit">Dodaj</button>
    </form>
  );
}
