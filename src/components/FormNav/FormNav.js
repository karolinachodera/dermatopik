import NavButton from "../NavButton/NavButton";

function FormNav({ handleClick, step }) {
  return (
    <section>
      {step > 1 && <NavButton handleClick={handleClick} direction={"prev"} />}
      <p>{step}/3</p>
      {step < 4 && <NavButton handleClick={handleClick} direction={"next"} />}
    </section>
  );
}

export default FormNav;
