import "./BodyParts.css";
import Areas from "../Areas/Areas";

function BodyParts({ handleChange, points }) {
  const bodyPartsData = [
    {
      bodyPartName: "head",
      bodyPartProportion: 4.5,
      id: 0,
      frontSide: true,
      backSide: true,
    },
    {
      bodyPartName: "corpus",
      bodyPartProportion: 18,
      id: 1,
      frontSide: true,
      backSide: true,
    },
    {
      bodyPartName: "left-arm",
      bodyPartProportion: 4.5,
      id: 2,
      frontSide: true,
      backSide: true,
    },
    {
      bodyPartName: "right-arm",
      bodyPartProportion: 4.5,
      id: 3,
      frontSide: true,
      backSide: true,
    },
    {
      bodyPartName: "crotch",
      bodyPartProportion: 1,
      id: 4,
      frontSide: true,
      backSide: false,
    },
    {
      bodyPartName: "left-leg",
      bodyPartProportion: 9,
      id: 5,
      frontSide: true,
      backSide: true,
    },
    {
      bodyPartName: "right-leg",
      bodyPartProportion: 9,
      id: 6,
      frontSide: true,
      backSide: true,
    },
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
          bodyParts={bodyPartsData.filter((part) => part.frontSide)}
          points={points}
          side={"front"}
          handleChange={handleChange}
        />
      </div>
      <div className="back-body">
        <h3>Tył ciała</h3>
        <Areas
          bodyParts={bodyPartsData.filter((part) => part.backSide)}
          points={points}
          side={"back"}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
}

export default BodyParts;
