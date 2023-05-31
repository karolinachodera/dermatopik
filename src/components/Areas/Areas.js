function Areas({ bodyParts, side, points, handleChange }) {
  console.log(bodyParts);
  const areas = bodyParts.map((part, index) => {
    let id = side === "back" ? index + 7 : index;
    //let isChecked = points[id] === 0 ? "false" : "true";
    let isChecked = side === "front" ? part.isFrontChecked : part.isBackChecked;
    //console.log(part.isFrontChecked, part.isBackChecked);
    return (
      <div
        key={`part-${id}`}
        className={`body-part ${part.bodyPartName} ${side} ${
          isChecked === "true" ? "checked" : ""
        }`}
        data-value={isChecked === "false" ? part.bodyPartProportion : 0}
        onClick={(e) => {
          handleChange(e, part.id, side);
          //part.isFrontChecked = !part.isFrontChecked;
          //isChecked = !isChecked;
        }}
      ></div>
    );
  });
  return areas;
}

export default Areas;
