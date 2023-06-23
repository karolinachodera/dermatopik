export function List({ elements, section }) {
  const list = elements.map((element, index) => {
    let checkboxes = [];
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
        {checkboxes}
      </li>
    );
  });
  return <ul>{list}</ul>;
}
