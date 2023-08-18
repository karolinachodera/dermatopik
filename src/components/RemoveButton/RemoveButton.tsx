import { ReactElement } from "react";
import "./RemoveButton.scss";

export function RemoveButton({ handleClick }: {handleClick: ()=> void}): ReactElement {
  return (
    <button onClick={handleClick} className="remove">
      X
    </button>
  );
}
