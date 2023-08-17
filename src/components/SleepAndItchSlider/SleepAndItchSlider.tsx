import { ChangeEvent, ReactElement } from "react";
import "./SleepAndItchSlider.scss";

interface Range {
  symptomName: string,
    rangeDescription: string,
    points: number,
    id: number,
}

function SleepAndItchSlider({ symptom, handleChange }: {symptom: Range, handleChange: (e: ChangeEvent<HTMLInputElement>, symptom: Range) => void}): ReactElement {
  return (
    <fieldset className="sleep-and-itch">
      <label htmlFor={symptom.symptomName}>{symptom.rangeDescription}</label>
      <input
        id={symptom.symptomName}
        type="range"
        min="0"
        max="10"
        name={symptom.symptomName}
        value={symptom.points}
        onChange={(e) => handleChange(e, symptom)}
      ></input>
      <output htmlFor={symptom.symptomName}>{symptom.points}</output>
    </fieldset>
  );
}

export default SleepAndItchSlider;
