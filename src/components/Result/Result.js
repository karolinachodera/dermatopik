import "./_Result.scss";

function Result({ scoradResult }) {
  return (
    <section className="result">
      <h2>Wynik SCORAD: {scoradResult.result}</h2>
      <p>{scoradResult.description}</p>
    </section>
  );
}

export default Result;
