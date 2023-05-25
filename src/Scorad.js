import { useState } from "react";

import BodyParts from "./BodyParts";
import Symptoms from "./Symptoms";
import SleepAndItch from "./SleepAndItch";
import Result from "./Result";

function Scorad() {
  const [part, setPart] = useState(1);
  const [partsSums, setPartsSums] = useState(Array(3).fill(0));
  const [scoradResult, setScoradResult] = useState(0);
  const [sectionAPoints, setSectionAPoints] = useState(Array(13).fill(0));
  const [sectionBPoints, setSectionBPoints] = useState(Array(6).fill(0));
  const [sectionCPoints, setSectionCPoints] = useState(Array(2).fill(0));

  function handleSumUpdate(sum, i) {
    setPartsSums((prevSums) => {
      const nextSums = [...prevSums];
      nextSums[i] = sum;
      return nextSums;
    });
  }

  function countPartSum(points) {
    const sum = points.reduce((total, points) => {
      return total + points;
    }, 0);
    handleSumUpdate(sum, part - 1);
  }

  function countScorad() {
    const result = partsSums[0] / 5 + (7 * partsSums[1]) / 2 + partsSums[2];
    setScoradResult(result);
  }

  function updateSectionPoints(prevPoints, selectedValue, fieldsetIndex) {
    const newPoints = [...prevPoints];
    newPoints[fieldsetIndex] = selectedValue;
    countPartSum(newPoints);
    return newPoints;
  }

  function handleInputChange(e, fieldsetIndex) {
    const selectedValue = Number(e.target.value || e.target.dataset.value);
    if (part === 1) {
      const newPoints = updateSectionPoints(
        sectionAPoints,
        selectedValue,
        fieldsetIndex
      );
      setSectionAPoints(newPoints);
    } else if (part === 2) {
      const newPoints = updateSectionPoints(
        sectionBPoints,
        selectedValue,
        fieldsetIndex
      );
      setSectionBPoints(newPoints);
    } else if (part === 3) {
      const newPoints = updateSectionPoints(
        sectionCPoints,
        selectedValue,
        fieldsetIndex
      );
      setSectionCPoints(newPoints);
    }
  }

  function setPartComponent() {
    if (part === 1) {
      return (
        <BodyParts handleChange={handleInputChange} points={sectionAPoints} />
      );
    } else if (part === 2) {
      return (
        <Symptoms handleChange={handleInputChange} points={sectionBPoints} />
      );
    } else if (part === 3) {
      return (
        <SleepAndItch
          handleChange={handleInputChange}
          points={sectionCPoints}
        />
      );
    } else {
      return <Result scoradResult={scoradResult} />;
    }
  }

  function handleNavClick(e) {
    e.preventDefault();

    if (e.target.value === "prev") {
      setPart(part - 1);
    } else if (e.target.value === "next") {
      setPart(part + 1);
    }
    if (part === 3) {
      countScorad();
    }
    setPartComponent();
  }

  return (
    <>
      <h2>Ocena SCORAD</h2>
      <form>
        <h3>Wynik SCORAD: {scoradResult}</h3>
        {setPartComponent()}
        <section>
          <NavButton handleClick={handleNavClick} direction={"prev"} />
          <p>{part}/3</p>
          <NavButton handleClick={handleNavClick} direction={"next"} />
        </section>
      </form>
    </>
  );
}

export default Scorad;
