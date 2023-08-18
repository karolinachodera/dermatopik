function NavButton({ handleClick, direction, description }: {handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void, direction: string, description: string}) {
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
