function Slider({ symptom, description, fieldsetIndex, points, handleChange }) {
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

export default Slider;
