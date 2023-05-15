import { useState } from "react";

function Scorad({ id, description }) {
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

  return (
    <>
      <section>
        <h2>Ocena SCORAD</h2>
        <h3>Intensywność objawów</h3>
        {inputs}
      </section>
    </>
  );
}

export default Scorad;
