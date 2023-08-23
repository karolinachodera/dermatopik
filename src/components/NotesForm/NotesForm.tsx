import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

export function NotesForm({ handleSubmit, textarea }: {textarea: Input, handleSubmit: (e: React.FormEvent<HTMLFormElement>, newNote: string) => void}): ReactElement {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, (e.target as HTMLFormElement).note.value)}
      className="adding-form"
    >
      <AddingFormInput input={textarea} />
      <button type="submit">+</button>
    </form>
  );
}
