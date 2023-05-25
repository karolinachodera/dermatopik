import "./BodyParts.css";
import Areas from "../Areas/Areas";

function BodyParts({ handleChange, points }) {
  const frontParts = [
    ["head", 4.5],
    ["corpus", 18],
    ["left-arm", 4.5],
    ["right-arm", 4.5],
    ["crotch", 1],
    ["left-leg", 9],
    ["right-leg", 9],
  ];

  const backParts = [
    ["head", 4.5],
    ["corpus", 18],
    ["left-arm", 4.5],
    ["right-arm", 4.5],
    ["left-leg-back", 9],
    ["right-leg-back", 9],
  ];

  return (
    <section>
      <h2>Część A: Powierzchnia skóry zajęta przez AZS</h2>
      <p>Zaznacz obszary objęte zmianami atopowymi</p>
      <section className="body-legend">
        <div className="legend unaffected"></div>
        <p>Obszar wolny od zmian skórnych</p>
        <div className="legend affected"></div>
        <p>Obszar zajęty zmianami atopowymi</p>
      </section>
      <div className="front-body">
        <h3>Przód ciała</h3>
        <Areas
          parts={frontParts}
          points={points}
          side={"front"}
          handleChange={handleChange}
        />
      </div>
      <div className="back-body">
        <h3>Tył ciała</h3>
        <Areas
          parts={backParts}
          points={points}
          side={"back"}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
}

export default BodyParts;
