import Slider from "../Slider/Slider";

function SleepAndItch({ rangeData, handleChange, points }) {
  const sliders = rangeData.map((symptom, index) => {
    return (
      <Slider
        symptom={symptom.symptomName}
        description={symptom.rangeDescription}
        key={symptom.symptomName}
        handleChange={handleChange}
        fieldsetIndex={index}
        points={points}
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
