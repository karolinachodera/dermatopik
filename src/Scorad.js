import { useState } from "react";

import BodyParts from "./BodyParts";
import Symptoms from "./Symptoms";
import FormNav from "./FormNav";

function Scorad() {
  const [part, setPart] = useState(1);

  //here I get sums of points from 3 parts (child components - Symptoms, BodyParts, SleepAndItch ) of scorad evaluation
  const [pointsSums, setPointsSums] = useState([Array(3).fill(0)]);

  //here I have result ofSCORAD
  const [scoradResult, setScoradResult] = useState(0);

  // function countScoradResult() {
  //     const partAResult = sumA / 5;
  //     const partBResult = (7 * sumB) / 2;
  //     const partCResult = sumC;
  //     const result = partAResult + partBResult + partCResult;

  //     setScoradResult(() => result);
  // }
  const [symptomsResult, setSymptomsResult] = useState(0);

  function countSymptomsResult(newPoints) {
    console.log(newPoints);
    const sum = newPoints.reduce((points, symptom) => {
      return points + symptom;
    }, 0);
    const result = (7 * sum) / 2;
    setSymptomsResult(result);
  }

  function handleFormNavButtonClick(e) {
    e.preventDefault();
    if (e.target.value === "prev") {
      setPart(part - 1);
    } else if (e.target.value === "next") {
      //   if (part === 1) {
      //     setSectionA();
      //   }
      setPart(part + 1);
    }
  }

  return (
    <>
      <h2>Ocena SCORAD</h2>
      <form>
        <h3>Wynik SCORAD: {symptomsResult}</h3>
        <Symptoms countResult={countSymptomsResult} />
        <FormNav clickFormNavButton={handleFormNavButtonClick} part={part} />
      </form>
    </>
  );
}

export default Scorad;
