function Button({ description, handleClick, buttonName }) {
  return (
    <button onClick={handleClick} name={buttonName}>
      {description}
    </button>
  );
}

export default Button;
