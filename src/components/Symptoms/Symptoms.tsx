import { ChangeEvent, ReactElement } from "react";
import SymptomsForm from "../SymptomsForm/SymptomsForm";

interface Symptom {
  name: string,
  polishLabel: string,
  points: number,
  id: number,
}

function Symptoms({ symptoms, handleChange, values }: {symptoms: Symptom[], handleChange: (e: ChangeEvent<HTMLInputElement>, symptom: Symptom) => void, values: string[]}): ReactElement {
  return (
    <section>
      <h2>Część B: Intensywność objawów</h2>
      <p>Oceń intensywność poszczególnych objawów</p>
      <SymptomsForm
        handleChange={handleChange}
        symptoms={symptoms}
        values={values}
      />
    </section>
  );
}

export default Symptoms;
