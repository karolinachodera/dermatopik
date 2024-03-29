import { ReactElement } from "react";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import { dateFormatting } from "../../config/firebase";

import "./List.scss";

interface FormInput {
  name: string,
  frequency?: number,
  isChecked: boolean[],
}

interface NoteType {
  note: string,
  date: Date,
}
interface ListProps {
  elements: (FormInput | NoteType)[],
  section: string,
  appearance?: string,
  handleRemoveItem: (index: number) => void,
  handleCheck?: (element: FormInput, i: number) => void,
}
 
function instanceOfFormInput(element: any): element is FormInput {
    return 'isChecked' in element;
}

export function List({ elements, section, appearance, handleRemoveItem, handleCheck }: ListProps): ReactElement {
  
  const list: ReactElement[] = elements.map((element: FormInput | NoteType, index: number) => {
    const checkboxes = [];
    if (instanceOfFormInput(element) && handleCheck) {
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
        {instanceOfFormInput(element) ? "" : 
          <>
            <span className="date">{dateFormatting(element.date)}</span><br />
        </>
        }
        {instanceOfFormInput(element) ? element.name : element.note}
        {checkboxes.length > 0 && (
          <div className="frequency-checkboxes">{checkboxes}</div>
        )}
        {section !== "events" && (
          <RemoveButton handleClick={() => handleRemoveItem(index)} />
        )}
      </li>
    );
  });
  return <ul className={appearance}>{list}</ul>;
}
