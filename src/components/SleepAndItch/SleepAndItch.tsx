import { ChangeEvent, ReactElement } from "react";
import SleepAndItchSlider from "../SleepAndItchSlider/SleepAndItchSlider";

interface Range {
  symptomName: string,
    rangeDescription: string,
    points: number,
    id: number,
}

function SleepAndItch({ rangeData, handleChange }: {rangeData: Range[], handleChange: (e: ChangeEvent<HTMLInputElement>, symptom: Range) => void}): ReactElement {
  const sliders: ReactElement[] = rangeData.map((symptom) => {
    return (
      <SleepAndItchSlider
        symptom={symptom}
        key={symptom.symptomName}
        handleChange={handleChange}
      />
    );
  });
  return (
    <section>
      <h2>Część C: świąd i zaburzenia snu</h2>
      <p>
        Zaznacz na skali nasilenie poszczególnych objawów w skali od 0 do 10
      </p>
      {sliders}
    </section>
  );
}

export default SleepAndItch;
