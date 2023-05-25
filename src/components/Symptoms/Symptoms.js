import Fieldset from "../Fieldset/Fieldset";

function Symptoms({ handleChange, points }) {
  const inputsInfo = [
    ["erythema", "Rumień"],
    ["edema", "Obrzęk"],
    ["oozing-crusting", "Wysięki i strupki"],
    ["lichenification", "Zgrubienie skóry"],
    ["scratch-marks", "Przeczosy (uszkodzenia od drapania)"],
    ["dryness", "Suchość (na obszarach niezajętych zmianami zapalnymi"],
  ];

  return (
    <>
      <section>
        <h2>Część B: Intensywność objawów</h2>
        <p>Oceń intensywność poszczególnych objawów</p>
        <Fieldset
          handleChange={handleChange}
          points={points}
          inputsInfo={inputsInfo}
        />
      </section>
    </>
  );
}

export default Symptoms;
