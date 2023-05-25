function Symptoms({ handleChange, points }) {
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

  function Fieldset() {
    const fieldset = inputsInfo.map((input, index) => {
      return (
        <fieldset name={input[0]} data-index={index} key={input[0]}>
          <legend>{input[1]}</legend>
          <Inputs
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

  return (
    <>
      <section>
        <h2>Część B: Intensywność objawów</h2>
        <p>Oceń intensywność poszczególnych objawów</p>
        <Fieldset handleChange={handleChange} points={points} />
      </section>
    </>
  );
}

export default Symptoms;
