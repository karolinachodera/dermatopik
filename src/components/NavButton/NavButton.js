function NavButton({ handleClick, direction }) {
  return (
    <button onClick={handleClick} value={direction}>
      {direction === "prev" ? "Wstecz" : "Dalej"}
    </button>
  );
}

export default NavButton;
