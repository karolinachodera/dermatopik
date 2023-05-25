function SymptomInputs({ symptom, fieldsetIndex, points, handleChange }) {
  const values = [
    "brak",
    "słabo nasilony",
    "średnio nasilony",
    "mocno nasilony",
  ];

  const inputs = values.map((value, index) => {
    const isChecked = index === points[fieldsetIndex];
    return (
      <>
        <label htmlFor={`${symptom}-${index}`} key={`label-${index}`}>
          {value}
        </label>
        <input
          id={`${symptom}-${index}`}
          key={`${symptom}-${index}`}
          name={symptom}
          value={index}
          type="radio"
          checked={isChecked}
          onChange={(e) => handleChange(e, fieldsetIndex)}
        />
      </>
    );
  });

  return inputs;
}

export default SymptomInputs;
