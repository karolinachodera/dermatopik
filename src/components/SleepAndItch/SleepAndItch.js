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

  function Slider({ symptom, description, fieldsetIndex }) {
    return (
      <fieldset>
        <label htmlFor={symptom}>{description}</label>
        <input
          id={symptom}
          type="range"
          min="0"
          max="10"
          name={symptom}
          value={points[fieldsetIndex]}
          onChange={(e) => handleChange(e, fieldsetIndex)}
        ></input>
        <output htmlFor={symptom}>{points[fieldsetIndex]}</output>
      </fieldset>
    );
  }
  const sliders = rangeData.map((symptom, index) => {
    return (
      <Slider
        symptom={symptom[0]}
        description={symptom[1]}
        key={symptom}
        handleChange={handleChange}
        fieldsetIndex={index}
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
