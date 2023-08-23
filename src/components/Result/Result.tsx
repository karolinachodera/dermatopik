import { ReactElement } from "react";
import "./Result.scss";

interface ScoradResult {
  result: number, description: string,
}

function Result({ scoradResult }: {scoradResult: ScoradResult}): ReactElement {
  return (
    <section className="result">
      <h2>Wynik SCORAD: {scoradResult.result}</h2>
      <p>{scoradResult.description}</p>
    </section>
  );
}
export default Result;
