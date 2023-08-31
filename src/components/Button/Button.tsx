import { ReactElement } from "react";

import "./Button.scss";

function Button({ description, handleClick, buttonName }: {description: string, buttonName: string, handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void}): ReactElement {
  return (
    <button onClick={handleClick} name={buttonName}>
      {description}
    </button>
  );
}

export default Button;
