import "./_Section.scss";

function Section({ children, header, width, id }) {
  return (
    <section className={`${width} main`} id={id}>
      <h2>{header}</h2>
      {children}
    </section>
  );
}

export default Section;
