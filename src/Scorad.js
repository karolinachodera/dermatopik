import { useState } from "react";

import BodyParts from "./BodyParts";
import Symptoms from "./Symptoms";
import SleepAndItch from "./SleepAndItch";
import FormNav from "./FormNav";

function Scorad() {
  const [part, setPart] = useState(1);
  const [partsSums, setPartsSums] = useState(Array(3).fill(0));
  const [scoradResult, setScoradResult] = useState(0);

  function updatePartsSums(i, result) {
    setPartsSums((prevSums) => {
      const nextSums = [...prevSums];
      nextSums[i] = result;
      return nextSums;
    });
  }

  function countPartAResult(sumA) {
    const result = sumA / 5;
    updatePartsSums(0, result);
  }

  function countPartBResult(sumB) {
    const result = (7 * sumB) / 2;
    updatePartsSums(1, result);
  }

  function countPartCResult(sumC) {
    const result = sumC;
    updatePartsSums(2, result);
  }

  function countScorad() {
    const scoradResult = partsSums.reduce((total, partSum) => {
      return total + partSum;
    }, 0);
    setScoradResult(scoradResult);
  }

  function handleFormNavButtonClick(e) {
    e.preventDefault();
    countScorad();
    if (e.target.value === "prev") {
      setPart(part - 1);
    } else if (e.target.value === "next") {
      if (part === 2) {
        //countPartBResult;
      }
      setPart(part + 1);
    }
  }

  function setPartComponent() {
    if (part === 1) {
      return <BodyParts />;
    } else if (part === 2) {
      return <Symptoms countResult={countPartBResult} />;
    } else if (part === 3) {
      return <SleepAndItch />;
    } else {
      return <p>Ciąg dalszy nastąpi</p>;
    }
  }

  return (
    <>
      <h2>Ocena SCORAD</h2>
      <form>
        <h3>Wynik SCORAD: {scoradResult}</h3>
        {setPartComponent()}
        <FormNav clickFormNavButton={handleFormNavButtonClick} part={part} />
      </form>
    </>
  );
}

export default Scorad;
