import { RemoveButton } from "../RemoveButton/RemoveButton";

import "./List.scss";

export function List({ elements, section, handleRemoveItem }) {
  const list = elements.map((element, index) => {
    const checkboxes = [];
    if (element.frequency) {
      for (let i = 0; i < element.frequency; i++) {
        checkboxes.push(<input key={`${section}-${i}`} type="checkbox" />);
      }
    }
    if (section === "events") {
      checkboxes.push(<input key={`${section}-1`} type="checkbox" />);
    }
    return (
      <li key={`${section}-${index}`}>
        {element.name || element}
        {checkboxes.length > 0 && (
          <div className="frequency-checkboxes">{checkboxes}</div>
        )}
        {section !== "events" && (
          <RemoveButton handleClick={() => handleRemoveItem(index)} />
        )}
      </li>
    );
  });
  return <ul>{list}</ul>;
}
