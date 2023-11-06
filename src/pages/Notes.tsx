import { ReactElement } from "react";
import { useRootContext } from '../components/Root/RootContext';
import { dateFormatting, setUserNotes } from "../config/firebase";

import Section from "../components/Section/Section";
import { NotesForm } from "../components/NotesForm/NotesForm";
import { RemoveButton } from "../components/RemoveButton/RemoveButton";

interface NoteType {
  note: string,
  date: Date,
}

export function Notes(): ReactElement {
    const { notes, setNotes, userID } = useRootContext();

    function handleRemoveNote(index: number): void {
    const newNotes: NoteType[] = [...notes];
    newNotes.splice(index, 1);
        setNotes(newNotes);
        setUserNotes(userID, newNotes);
  }
    const Notes: ReactElement[] = notes.map((note, index) => {
        return (
        <Section id={`note-${index}`} key={`note-${index}`} header={dateFormatting(note.date)} appearance="frame">
                <RemoveButton handleClick={() => handleRemoveNote(index)} />
                <p>
                    {note.note}
                </p>
        </Section>
        )
    })

    return (
        <main className="third grid" id="notes">
            <Section id="notesForm" appearance="frame">
                <NotesForm />
            </Section>
            {Notes.reverse()}
        </main>
    )
        
    
}