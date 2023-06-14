import "./SleepAndItchSlider.css";

function SleepAndItchSlider({ symptom, handleChange }) {
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
