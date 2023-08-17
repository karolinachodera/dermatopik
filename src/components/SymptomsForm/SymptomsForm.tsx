import "./SymptomsForm.scss";

import SymptomInputs from "../SymptomInputs/SymptomInputs";
import { ChangeEvent, ReactElement } from "react";

interface Symptom {
  name: string,
  polishLabel: string,
  points: number,
  id: number,
}

function SymptomsForm({ symptoms, handleChange, values }: {symptoms: Symptom[], handleChange: (e: ChangeEvent<HTMLInputElement>, symptom: Symptom) => void, values: string[]}): ReactElement {
  const fieldset: ReactElement[] = symptoms.map((symptom, index) => {
    return (
      <fieldset
        name={symptom.name}
        data-index={index}
        key={symptom.name}
        className="symptom"
      >
        <legend>{symptom.polishLabel}</legend>
        <SymptomInputs
          symptom={symptom}
          handleChange={handleChange}
          values={values}
        />
      </fieldset>
    );
  });
  return <>{fieldset}</>;
}

export default SymptomsForm;
