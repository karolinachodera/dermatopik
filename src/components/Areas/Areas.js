function Areas({ parts, side, points, handleChange }) {
  const areas = parts.map((part, index) => {
    index = side === "back" ? index + 7 : index;
    let isChecked = points[index] === 0 ? "false" : "true";
    return (
      <div
        key={`part-${index}`}
        className={`body-part ${part[0]} ${
          isChecked === "true" ? "checked" : ""
        }`}
        data-value={isChecked === "false" ? part[1] : 0}
        onClick={(e) => handleChange(e, index)}
      ></div>
    );
  });
  return areas;
}

export default Areas;
