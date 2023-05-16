import { useState } from "react";

function Symptoms({ id, description }) {
  const [scoradPoints, setScoradPoints] = useState(0);
  const inputsInfo = [
    ["erythema", "Rumień"],
    ["edema", "Obrzęk"],
    ["oozing-crusting", "Wysięki i strupki"],
    ["lichenification", "Zgrubienie skóry"],
    ["scratch-marks", "Przeczosy (uszkodzenia od drapania)"],
    ["dryness", "Suchość (na obszarach niezajętych zmianami zapalnymi"],
  ];

  function handleChange() {}

  const inputs = inputsInfo.map((input) => {
    return (
      <>
        <label for={input[0]}>{input[1]}</label>
        <input
          type="range"
          id={input[0]}
          min="0"
          max="3"
          name={input[0]}
          range="1"
          onChange={handleChange}
        ></input>
      </>
    );
  });

  function Inputs({ symptom }) {
    const values = [
      "brak",
      "słabo nasilony",
      "średnio nasilony",
      "mocno nasilony",
    ];
    const inputs = values.map((value, index) => {
      return (
        <>
          <label for={index}>{value}</label>
          <input id={index} name={symptom} value={index} type="radio"></input>;
        </>
      );
    });
    return inputs;
  }

  const inputs2 = inputsInfo.map((input) => {
    return (
      <fieldset>
        <legend>{input[1]}</legend>
        <Inputs symptom={input[0]} />
      </fieldset>
    );
  });

  return (
    <>
      <section>
        <h3>Intensywność objawów</h3>
        {inputs2}
      </section>
    </>
  );
}

export default Symptoms;
