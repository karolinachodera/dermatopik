import Fieldset from "../Fieldset/Fieldset";

function Symptoms({ symptoms, handleChange, points }) {
  function handleCheck(e, symptom, fieldsetIndex) {
    if (e.target.checked) {
      console.log(e.target);
      symptom.points = e.target.value;
      console.log(symptom);
    }
    handleChange(e, fieldsetIndex);
  }
  return (
    <section>
      <h2>Część B: Intensywność objawów</h2>
      <p>Oceń intensywność poszczególnych objawów</p>
      <Fieldset
        handleChange={handleCheck}
        points={points}
        symptoms={symptoms}
      />
    </section>
  );
}

export default Symptoms;
