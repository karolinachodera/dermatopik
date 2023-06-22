export function List({ elements }) {
  const list = elements.map((element) => {
    let checkboxes = [];
    if (element.frequency) {
      for (let i = 0; i < element.frequency; i++) {
        checkboxes.push(<input type="checkbox" />);
      }
    }
    return (
      <li>
        {element.name || element.event || element}
        {checkboxes}
      </li>
    );
  });
  return <ul>{list}</ul>;
}
