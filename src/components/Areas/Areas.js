function Areas({ bodyParts, side, handleClick }) {
  const areas = bodyParts.map((part, index) => {
    const isChecked =
      side === "front" ? part.isFrontChecked : part.isBackChecked;
    return (
      <div
        key={`${side}-part-${index}`}
        className={`body-part ${part.bodyPartName} ${side} ${
          isChecked ? "checked" : ""
        }`}
        onClick={() => handleClick(part, side)}
      ></div>
    );
  });
  return areas;
}

export default Areas;
