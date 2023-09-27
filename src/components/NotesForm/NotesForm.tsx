import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";
import { useRootContext } from "../Root/RootContext";

import { notesTextarea } from "../../constants/dashboardInputs";
import { setUserNotes } from "../../config/firebase";

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
    const newNotes: NoteType[] = [...notes, newNote];
    setNotes(newNotes);
    (e.target as HTMLFormElement).reset();
    setUserNotes("tester", newNotes);

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
