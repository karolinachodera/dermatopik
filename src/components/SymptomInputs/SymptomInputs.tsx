import { ChangeEvent, ReactElement } from "react";

interface Symptom {
  name: string,
  polishLabel: string,
  points: number,
  id: number,
}

function SymptomInputs({ symptom, handleChange, values }: {symptom: Symptom, handleChange: (e: ChangeEvent<HTMLInputElement>, symptom: Symptom, index: number) => void, values: string[]}): ReactElement {
  const inputs: ReactElement[] = values.map((value, index) => {
    const isChecked = index === symptom.points;
    return (
      <span key={`label-${index}`}>
        <label htmlFor={`${symptom.name}-${index}`}>{value}</label>
        <input
          id={`${symptom.name}-${index}`}
          name={symptom.name}
          value={index}
          type="radio"
          checked={isChecked}
          onChange={(e) => handleChange(e, symptom, index)}
        />
      </span>
    );
  });

  return <>{inputs}</>;
}

export default SymptomInputs;
