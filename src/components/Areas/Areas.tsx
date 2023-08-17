import { ReactElement } from "react";

interface BodyPart {
  bodyPartName: string,
  bodyPartProportion: number,
  id: number,
  frontSide: boolean,
  backSide: boolean,
  isFrontChecked: boolean,
  isBackChecked: boolean,
}

function Areas({ bodyParts, side, handleClick }: {bodyParts: BodyPart[], side: string, handleClick: (part: BodyPart, side: string) => void}): ReactElement  {
  const areas: ReactElement[] = bodyParts.map((part, index) => {
    const isChecked: boolean =
      side === "front" ? part.isFrontChecked : part.isBackChecked;
    return (
      <div
        key={`${side}-part-${index}`}
        className={`body-part ${part.bodyPartName} ${side} ${
          isChecked ? "checked" : ""
        }`}
        onClick={() => handleClick(part, side)}
      ></div>
    );
  });
  return <>{areas}</>;
}

export default Areas;
