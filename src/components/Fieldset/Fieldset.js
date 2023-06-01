import SymptomInputs from "../SymptomInputs/SymptomInputs";

function Fieldset({ symptoms, handleChange, points }) {
  const fieldset = symptoms.map((symptom, index) => {
    return (
      <fieldset name={symptom.name} data-index={index} key={symptom.name}>
        <legend>{symptom.polishLabel}</legend>
        <SymptomInputs
          symptom={symptom}
          fieldsetIndex={index}
          handleChange={handleChange}
          points={points}
        />
      </fieldset>
    );
  });
  return fieldset;
}

export default Fieldset;
