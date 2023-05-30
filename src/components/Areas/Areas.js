function Areas({ parts, side, points, handleChange }) {
  const areas = parts.map((part, index) => {
    let id = side === "back" ? index + 7 : index;
    let isChecked = points[id] === 0 ? "false" : "true";
    return (
      <div
        key={`part-${id}`}
        className={`body-part ${part[0]} ${
          isChecked === "true" ? "checked" : ""
        }`}
        data-value={isChecked === "false" ? part[1] : 0}
        onClick={(e) => handleChange(e, id)}
      ></div>
    );
  });
  return areas;
}

export default Areas;
