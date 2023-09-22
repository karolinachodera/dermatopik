import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

interface FormInput {
  name: string,
    frequency?: number,
    isChecked: boolean[],
}

export function EventsForm({ handleSubmit, textInput }: {textInput: Input, handleSubmit: (e: React.FormEvent<HTMLFormElement>, newEvent: FormInput) => void}): ReactElement {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, {
        name: (e.target as HTMLFormElement).event.value,
        isChecked: [false],
      })
}
      className="adding-form"
    >
      <AddingFormInput input={textInput} />
      <button type="submit">+</button>
    </form>
  );
}
