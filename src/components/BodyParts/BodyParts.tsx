import { ReactElement } from "react";
import Areas from "../Areas/Areas";

import "./BodyParts.scss";

interface BodyPart {
  bodyPartName: string,
  bodyPartProportion: number,
  id: number,
  frontSide: boolean,
  backSide: boolean,
  isFrontChecked: boolean,
  isBackChecked: boolean,
}

function BodyParts({ handleChange, inputs }: {handleChange: (part: BodyPart, side: string) => void, inputs: BodyPart[] }): ReactElement {
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
      <div className="body-parts">
        <div className="front-body">
          <h3>Przód ciała</h3>
          <Areas
            bodyParts={inputs.filter((part) => part.frontSide)}
            side={"front"}
            handleClick={handleChange}
          />
        </div>
        <div className="back-body">
          <h3>Tył ciała</h3>
          <Areas
            bodyParts={inputs.filter((part) => part.backSide)}
            side={"back"}
            handleClick={handleChange}
          />
        </div>
      </div>
    </section>
  );
}

export default BodyParts;
