function Section({ header, handleClick }) {
  return (
    <section className={`${header} main`}>
      <h2>{header}</h2>

      <button onClick={handleClick}>Dodaj</button>
    </section>
  );
}

export default Section;
