import Fieldset from "../Fieldset/Fieldset";

function Symptoms({ symptoms, handleChange, points }) {
  return (
    <section>
      <h2>Część B: Intensywność objawów</h2>
      <p>Oceń intensywność poszczególnych objawów</p>
      <Fieldset
        handleChange={handleChange}
        points={points}
        symptoms={symptoms}
      />
    </section>
  );
}

export default Symptoms;
