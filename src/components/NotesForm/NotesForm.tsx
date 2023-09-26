import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";
import { useRootContext } from "../Root/RootContext";

import { notesTextarea } from "../../constants/dashboardInputs";

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

export function NotesForm(): ReactElement {
  const { notes, setNotes } = useRootContext();
  
  function handleNoteAdding(e: React.FormEvent<HTMLFormElement>, newNote: NoteType): void { 
    e.preventDefault();
    setNotes([...notes, newNote]);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form
      onSubmit={(e) => handleNoteAdding(e, {
        note: (e.target as HTMLFormElement).note.value,
        date: new Date(),
      })
}
      className="adding-form"
    >
      <AddingFormInput input={notesTextarea} />
      <button type="submit">+</button>
    </form>
  );
}
