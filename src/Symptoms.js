function Symptoms({ handleChange, sectionBPoints }) {
  const inputsInfo = [
    ["erythema", "Rumień"],
    ["edema", "Obrzęk"],
    ["oozing-crusting", "Wysięki i strupki"],
    ["lichenification", "Zgrubienie skóry"],
    ["scratch-marks", "Przeczosy (uszkodzenia od drapania)"],
    ["dryness", "Suchość (na obszarach niezajętych zmianami zapalnymi"],
  ];

  function Inputs({ symptom, fieldsetIndex, handleChange, sectionBPoints }) {
    const values = [
      "brak",
      "słabo nasilony",
      "średnio nasilony",
      "mocno nasilony",
    ];

    const inputs = values.map((value, index) => {
      const isChecked = index === sectionBPoints[fieldsetIndex];
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

  function Fieldset({ handleChange, sectionBPoints }) {
    const fieldset = inputsInfo.map((input, index) => {
      return (
        <fieldset name={input[0]} data-index={index} key={input[0]}>
          <legend>{input[1]}</legend>
          <Inputs
            symptom={input[0]}
            fieldsetIndex={index}
            handleChange={handleChange}
            sectionBPoints={sectionBPoints}
          />
        </fieldset>
      );
    });
    return fieldset;
  }

  return (
    <>
      <section>
        <h3>Intensywność objawów</h3>
        <Fieldset handleChange={handleChange} sectionBPoints={sectionBPoints} />
      </section>
    </>
  );
}

export default Symptoms;
