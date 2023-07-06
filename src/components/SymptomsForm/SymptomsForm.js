import "./_SymptomsForm.scss";

import SymptomInputs from "../SymptomInputs/SymptomInputs";

function SymptomsForm({ symptoms, handleChange, values }) {
  const fieldset = symptoms.map((symptom, index) => {
    return (
      <fieldset
        name={symptom.name}
        data-index={index}
        key={symptom.name}
        className="symptom"
      >
        <legend>{symptom.polishLabel}</legend>
        <SymptomInputs
          symptom={symptom}
          handleChange={handleChange}
          values={values}
        />
      </fieldset>
    );
  });
  return fieldset;
}

export default SymptomsForm;
