import { ReactElement } from "react";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

interface FormInput {
  name: string,
    frequency: number,
}

interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

interface FrequencyInput {
  name: string,
  header: string,
  type: string,
  required: boolean,
}
export function DrugsForm({ handleSubmit, textInput, frequencyInput }: {textInput: Input, frequencyInput: Input, handleSubmit: (e: React.FormEvent<HTMLFormElement>, newDrug: FormInput) => void}): ReactElement {
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          name: (e.target as HTMLFormElement).drug.value,
          frequency: Number((e.target as HTMLFormElement).drugFrequency.value),
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
