function Areas({ bodyParts, side, points, handleChange }) {
  const areas = bodyParts.map((part, index) => {
    let id = side === "back" ? index + 7 : index;
    let isChecked = points[id] === 0 ? "false" : "true";
    return (
      <div
        key={`part-${id}`}
        className={`body-part ${part.bodyPartName} ${side} ${
          isChecked === "true" ? "checked" : ""
        }`}
        data-value={isChecked === "false" ? part.bodyPartProportion : 0}
        onClick={(e) => handleChange(e, id)}
      ></div>
    );
  });
  return areas;
}

export default Areas;
