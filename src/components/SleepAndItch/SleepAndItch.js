import SleepAndItchSlider from "../SleepAndItchSlider/SleepAndItchSlider";

function SleepAndItch({ rangeData, handleChange }) {
  const sliders = rangeData.map((symptom) => {
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
