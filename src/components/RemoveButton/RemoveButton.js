import "./RemoveButton.scss";

export function RemoveButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="remove">
      X
    </button>
  );
}
