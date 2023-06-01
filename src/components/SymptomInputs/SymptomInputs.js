function SymptomInputs({ symptomName, fieldsetIndex, points, handleChange }) {
  const values = [
    "brak",
    "słabo nasilony",
    "średnio nasilony",
    "mocno nasilony",
  ];

  const inputs = values.map((value, index) => {
    const isChecked = index === points[fieldsetIndex];
    return (
      <span key={`label-${index}`}>
        <label htmlFor={`${symptomName}-${index}`}>{value}</label>
        <input
          id={`${symptomName}-${index}`}
          name={symptomName}
          value={index}
          type="radio"
          checked={isChecked}
          onChange={(e) => handleChange(e, fieldsetIndex)}
        />
      </span>
    );
  });

  return inputs;
}

export default SymptomInputs;
