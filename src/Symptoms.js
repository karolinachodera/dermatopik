import { useState } from "react";

function Symptoms() {
  const [sectionAPoints, setSectionAPoints] = useState(Array(6).fill(null));
  const inputsInfo = [
    ["erythema", "Rumień"],
    ["edema", "Obrzęk"],
    ["oozing-crusting", "Wysięki i strupki"],
    ["lichenification", "Zgrubienie skóry"],
    ["scratch-marks", "Przeczosy (uszkodzenia od drapania)"],
    ["dryness", "Suchość (na obszarach niezajętych zmianami zapalnymi"],
  ];

  function Inputs({ symptom, fieldsetIndex }) {
    const values = [
      "brak",
      "słabo nasilony",
      "średnio nasilony",
      "mocno nasilony",
    ];

    const handleChange = (e) => {
      const selectedValue = e.target.value;
      setSectionAPoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints[fieldsetIndex] = selectedValue;
        return newPoints;
      });
    };

    const inputs = values.map((value, index) => {
      const isChecked = index.toString() === sectionAPoints[fieldsetIndex];
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
            onChange={handleChange}
          />
        </>
      );
    });

    return inputs;
  }

  function Fieldset() {
    const fieldset = inputsInfo.map((input, index) => {
      return (
        <fieldset name={input[0]} data-index={index} key={input[0]}>
          <legend>{input[1]}</legend>
          <Inputs symptom={input[0]} fieldsetIndex={index} />
        </fieldset>
      );
    });
    return fieldset;
  }

  return (
    <>
      <section>
        <h3>Intensywność objawów</h3>
        <Fieldset />
      </section>
    </>
  );
}

export default Symptoms;
