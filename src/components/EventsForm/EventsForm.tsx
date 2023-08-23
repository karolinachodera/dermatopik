import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

export function EventsForm({ handleSubmit, textInput }: {textInput: Input, handleSubmit: (e: React.FormEvent<HTMLFormElement>, newEvent: string) => void}): ReactElement {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, (e.target as HTMLFormElement).event.value)}
      className="adding-form"
    >
      <AddingFormInput input={textInput} />
      <button type="submit">+</button>
    </form>
  );
}
