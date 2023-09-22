import { ReactElement } from "react";
import { RemoveButton } from "../RemoveButton/RemoveButton";

import "./List.scss";

interface FormInput {
  name: string,
  frequency?: number,
  isChecked: boolean[],
}
interface ListProps {
  elements: FormInput[] | string[],
  section: string,
  handleRemoveItem: (index: number) => void,
  handleCheck?: (element: FormInput, i: number) => void,
 }

export function List({ elements, section, handleRemoveItem, handleCheck }: ListProps): ReactElement {
  
  const list: ReactElement[] = elements.map((element, index) => {
    const checkboxes = [];
    if (typeof element !== "string" && handleCheck) {
      if (element.frequency) {
        for (let i  = 0; i < element.frequency; i++) {
        checkboxes.push(<input key={`${section}-${i}`} type="checkbox" checked={element.isChecked[i] } onChange={()=> handleCheck(element, i)}/>);
      }
      } else {
        checkboxes.push(<input key={`${section}-1`} type="checkbox" checked={element.isChecked[0]} onChange={() => handleCheck(element, 0)} />);
      }
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
