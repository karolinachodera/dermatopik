import NavButton from "../NavButton/NavButton";

function FormNav({ handleClick, part }) {
  if (part === 1) {
    return (
      <section>
        <p>1/3</p>
        <NavButton handleClick={handleClick} direction={"next"} />
      </section>
    );
  } else if (part !== 1 && part < 4) {
    return (
      <section>
        <NavButton handleClick={handleClick} direction={"prev"} />
        <p>{part}/3</p>
        <NavButton handleClick={handleClick} direction={"next"} />
      </section>
    );
  } else if (part === 4) {
    return (
      <section>
        <NavButton handleClick={handleClick} direction={"prev"} />
      </section>
    );
  }
}

export default FormNav;
