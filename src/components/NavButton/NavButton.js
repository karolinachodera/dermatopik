function NavButton({ handleClick, direction, description }) {
  if (direction === "done") {
    return (
      <button type="submit" value={direction}>
        {description}
      </button>
    );
  }
  return (
    <button onClick={handleClick} value={direction}>
      {description}
    </button>
  );
}

export default NavButton;
