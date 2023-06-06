import SymptomsForm from "../Fieldset/SymptomsForm";

function Symptoms({ symptoms, handleChange, values }) {
  return (
    <section>
      <h2>Część B: Intensywność objawów</h2>
      <p>Oceń intensywność poszczególnych objawów</p>
      <SymptomsForm
        handleChange={handleChange}
        symptoms={symptoms}
        values={values}
      />
    </section>
  );
}

export default Symptoms;
