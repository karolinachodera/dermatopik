import { ReactElement } from "react";
import { RemoveButton } from "../RemoveButton/RemoveButton";

import "./List.scss";

interface FormInput {
  name: string,
  frequency: number,
}

export function List({ elements, section, handleRemoveItem }: {elements: FormInput[] | string[], section: string, handleRemoveItem: (index: number) => void }): ReactElement {
  const list: ReactElement[] = elements.map((element, index) => {
    const checkboxes = [];
    if (typeof element !== "string" && element.frequency) {
      for (let i = 0; i < (element as FormInput).frequency; i++) {
        checkboxes.push(<input key={`${section}-${i}`} type="checkbox" />);
      }
    }
    if (section === "events") {
      checkboxes.push(<input key={`${section}-1`} type="checkbox" />);
    }
    return (
      <li key={`${section}-${index}`}>
        {typeof element !== "string" ? element.name : element}
        {checkboxes.length > 0 && (
          <div className="frequency-checkboxes">{checkboxes}</div>
        )}
        {section !== "events" && (
          <RemoveButton handleClick={() => handleRemoveItem(index)} />
        )}
      </li>
    );
  });
  return <ul className="checkbox-list">{list}</ul>;
}
