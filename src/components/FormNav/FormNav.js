import NavButton from "../NavButton/NavButton";

function FormNav({ handleClick, step, handleFinish }) {
  return (
    <section>
      {step > 1 && (
        <NavButton
          handleClick={handleClick}
          direction={"prev"}
          description="Wstecz"
        />
      )}
      <p>{step}/4</p>
      {step < 4 && (
        <NavButton
          handleClick={handleClick}
          direction={"next"}
          description="Dalej"
        />
      )}
      {step === 4 && (
        <NavButton
          handleClick={handleFinish}
          direction="done"
          description="Zakończ"
        />
      )}
    </section>
  );
}

export default FormNav;
