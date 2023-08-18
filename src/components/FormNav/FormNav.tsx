import { ReactElement } from "react";
import NavButton from "../NavButton/NavButton";

import "./FormNav.scss";

function FormNav({ handleClick, step }: {handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void, step: number}): ReactElement {
  return (
    <section className="form-nav">
      {step > 1 && (
        <NavButton
          handleClick={handleClick}
          direction={"prev"}
          description="Wstecz"
        />
      )}
      <p>{step}/4</p>
      {step < 4 && (
        <NavButton
          handleClick={handleClick}
          direction={"next"}
          description="Dalej"
        />
      )}
      {step === 4 && (
        <NavButton
          direction="done"
          description="Zakończ"
        />
      )}
    </section>
  );
}

export default FormNav;
