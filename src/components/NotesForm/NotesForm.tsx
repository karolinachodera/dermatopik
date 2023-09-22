import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}


interface NoteType {
  note: string,
  date: Date,
}

export function NotesForm({ handleSubmit, textarea }: {textarea: Input, handleSubmit: (e: React.FormEvent<HTMLFormElement>, newNote: NoteType) => void}): ReactElement {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, {
        note: (e.target as HTMLFormElement).note.value,
        date: new Date(),
      })
}
      className="adding-form"
    >
      <AddingFormInput input={textarea} />
      <button type="submit">+</button>
    </form>
  );
}
