function FormNav({ clickFormNavButton, part }) {
  if (part === 1) {
    return (
      <section>
        <p>{part}/3</p>
        <button onClick={clickFormNavButton} value="next">
          Dalej
        </button>
      </section>
    );
  } else if (part === 3) {
    return (
      <section>
        <button onClick={clickFormNavButton} value="prev">
          Wstecz
        </button>
        <p>{part}/3</p>
      </section>
    );
  } else {
    return (
      <section>
        <button onClick={clickFormNavButton} value="prev">
          Wstecz
        </button>
        <p>{part}/3</p>
        <button onClick={clickFormNavButton} value="next">
          Dalej
        </button>
      </section>
    );
  }
  //   return (
  //     <section>
  //       <button
  //         className={part === 1 ? "unclickable" : "clickable"}
  //         onClick={clickFormNavButton}
  //         value="prev"
  //       >
  //         Wstecz
  //       </button>
  //       <p>{part}/3</p>
  //       <button
  //         className={part === 3 ? "unclickable" : "clickable"}
  //         onClick={clickFormNavButton}
  //         value="next"
  //       >
  //         Dalej
  //       </button>
  //     </section>
  //   );
}

export default FormNav;
