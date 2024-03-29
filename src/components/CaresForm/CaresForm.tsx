import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

interface FormInput {
  name: string,
  frequency?: number,
  isChecked: boolean[],
}

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

export function CaresForm({ handleSubmit, textInput, frequencyInput }: {textInput: Input, frequencyInput: Input, handleSubmit: (e: React.FormEvent<HTMLFormElement>, newCare: FormInput) => void}): ReactElement {
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          name: (e.target as HTMLFormElement).care.value,
          frequency: Number((e.target as HTMLFormElement).careFrequency.value),
          isChecked: new Array(Number((e.target as HTMLFormElement).careFrequency.value)).fill(false),
        })
      }
      className="adding-form"
    >
      <AddingFormInput input={textInput} />
      <AddingFormInput input={frequencyInput} />
      <button type="submit">+</button>
    </form>
  );
}
