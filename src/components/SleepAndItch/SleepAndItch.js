import Slider from "../Slider/Slider";

function SleepAndItch({ handleChange, points }) {
  const rangeData = [
    [
      "itch",
      "Nasielenie świądu w skali od 0 (brak świądu) do 10 (mocno nasilony)",
    ],
    [
      "sleep",
      "Zaburzenia snu w skali od 0 (brak zaburzeń snu) do 10 (całkowita bezsenność)",
    ],
  ];

  const sliders = rangeData.map((symptom, index) => {
    return (
      <Slider
        symptom={symptom[0]}
        description={symptom[1]}
        key={symptom}
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
