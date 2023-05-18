import { useState } from "react";

import BodyParts from "./BodyParts";
import Symptoms from "./Symptoms";
import SleepAndItch from "./SleepAndItch";
import NavButton from "./NavButton";

function Scorad() {
  const [part, setPart] = useState(1);
  const [partsSums, setPartsSums] = useState(Array(3).fill(0));
  const [scoradResult, setScoradResult] = useState(0);
  const [sectionBPoints, setSectionBPoints] = useState(Array(6).fill(0));

  function handleSumUpdate(sum, i) {
    setPartsSums((prevSums) => {
      const nextSums = [...prevSums];
      nextSums[i] = sum;
      return nextSums;
    });
  }

  function countPartBSum(bPoints) {
    const sum = bPoints.reduce((total, points) => {
      return total + points;
    }, 0);
    console.log(sum);
    handleSumUpdate(sum, 1);
  }

  function countScorad() {
    const result = partsSums[0] / 5 + (7 * partsSums[1]) / 2 + partsSums[2];
    setScoradResult(result);
  }

  function setPartComponent() {
    if (part === 1) {
      return <BodyParts />;
    } else if (part === 2) {
      return (
        <Symptoms
          handleChange={handleInputChange}
          sectionBPoints={sectionBPoints}
        />
      );
    } else if (part === 3) {
      return <SleepAndItch />;
    } else {
      return <p>Ciąg dalszy nastąpi</p>;
    }
  }
  function handleInputChange(e, fieldsetIndex) {
    const selectedValue = Number(e.target.value);
    setSectionBPoints((prevPoints) => {
      const newPoints = [...prevPoints];
      newPoints[fieldsetIndex] = selectedValue;
      console.log(newPoints);
      countPartBSum(newPoints);
      return newPoints;
    });
  }

  function handleNavClick(e) {
    e.preventDefault();
    countScorad();
    if (e.target.value === "prev") {
      setPart(part - 1);
    } else if (e.target.value === "next") {
      setPart(part + 1);
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
