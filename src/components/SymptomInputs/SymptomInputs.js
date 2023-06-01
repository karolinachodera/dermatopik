function SymptomInputs({ symptom, fieldsetIndex, points, handleChange }) {
  const values = [
    "brak",
    "słabo nasilony",
    "średnio nasilony",
    "mocno nasilony",
  ];

  const inputs = values.map((value, index) => {
    const isChecked = index === points[fieldsetIndex];
    console.log(symptom);
    return (
      <span key={`label-${index}`}>
        <label htmlFor={`${symptom.name}-${index}`}>{value}</label>
        <input
          id={`${symptom.name}-${index}`}
          name={symptom.name}
          value={index}
          type="radio"
          checked={isChecked}
          onChange={(e) => handleChange(e, symptom, fieldsetIndex)}
        />
      </span>
    );
  });

  return inputs;
}

export default SymptomInputs;
