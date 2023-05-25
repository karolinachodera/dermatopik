import SymptomInputs from "../SymptomInputs/SymptomInputs";

function Fieldset({ inputsInfo, handleChange, points }) {
  const fieldset = inputsInfo.map((input, index) => {
    return (
      <fieldset name={input[0]} data-index={index} key={input[0]}>
        <legend>{input[1]}</legend>
        <SymptomInputs
          symptom={input[0]}
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
