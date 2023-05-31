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
      isFrontChecked: false,
      isBackChecked: false,
    },
    {
      bodyPartName: "corpus",
      bodyPartProportion: 18,
      id: 1,
      frontSide: true,
      backSide: true,
      isFrontChecked: false,
      isBackChecked: false,
    },
    {
      bodyPartName: "left-arm",
      bodyPartProportion: 4.5,
      id: 2,
      frontSide: true,
      backSide: true,
      isFrontChecked: false,
      isBackChecked: false,
    },
    {
      bodyPartName: "right-arm",
      bodyPartProportion: 4.5,
      id: 3,
      frontSide: true,
      backSide: true,
      isFrontChecked: false,
      isBackChecked: false,
    },
    {
      bodyPartName: "crotch",
      bodyPartProportion: 1,
      id: 4,
      frontSide: true,
      backSide: false,
      isFrontChecked: false,
      isBackChecked: false,
    },
    {
      bodyPartName: "left-leg",
      bodyPartProportion: 9,
      id: 5,
      frontSide: true,
      backSide: true,
      isFrontChecked: false,
      isBackChecked: false,
    },
    {
      bodyPartName: "right-leg",
      bodyPartProportion: 9,
      id: 6,
      frontSide: true,
      backSide: true,
      isFrontChecked: false,
      isBackChecked: false,
    },
  ];

  function handleClick(e, fieldsetIndex, side) {
    handleChange(e, fieldsetIndex);
    console.log(fieldsetIndex);
    console.log(bodyPartsData[fieldsetIndex].isFrontChecked);
    if (side === "front") {
      bodyPartsData[fieldsetIndex].isFrontChecked =
        !bodyPartsData[fieldsetIndex].isFrontChecked;
      console.log(bodyPartsData[fieldsetIndex].isFrontChecked);
    } else if (side === "back") {
      bodyPartsData[fieldsetIndex].isBackChecked =
        !bodyPartsData[fieldsetIndex].isBackChecked;
    }
  }

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
          handleChange={handleClick}
        />
      </div>
      <div className="back-body">
        <h3>Tył ciała</h3>
        <Areas
          bodyParts={bodyPartsData.filter((part) => part.backSide)}
          points={points}
          side={"back"}
          handleChange={handleClick}
        />
      </div>
    </section>
  );
}

export default BodyParts;
