import { useState } from "react";

import BodyParts from "../BodyParts/BodyParts";
import Symptoms from "../Symptoms/Symptoms";
import SleepAndItch from "../SleepAndItch/SleepAndItch";
import Result from "../Result/Result";
import FormNav from "../FormNav/FormNav";

import { bodyPartsData, symptoms, rangeData } from "../../constants/formInputs";

function Scorad() {
  const [step, setStep] = useState(1);
  const [partsSums, setPartsSums] = useState(Array(3).fill(0));
  const [scoradResult, setScoradResult] = useState(0);
  const [sectionAPoints, setSectionAPoints] = useState(Array(13).fill(0));
  const [sectionBPoints, setSectionBPoints] = useState(Array(6).fill(0));
  const [sectionCPoints, setSectionCPoints] = useState(Array(2).fill(0));

  const [bodyPartsInputs, setBodyPartsInputs] = useState([...bodyPartsData]);

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
    handleSumUpdate(sum, step - 1);
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

  function handleInputChangeInSectionA(part, side) {
    const id = part.id;
    let updatedPart;

    if (side === "front") {
      updatedPart = {
        ...part,
        isFrontChecked: !part.isFrontChecked,
      };
    } else if (side === "back") {
      updatedPart = {
        ...part,
        isBackChecked: !part.isBackChecked,
      };
    }

    const newBodyPartsInputs = [...bodyPartsInputs];
    newBodyPartsInputs[id] = updatedPart;
    setBodyPartsInputs(newBodyPartsInputs);

    // const selectedValue = Number(e.target.value || e.target.dataset.value);
    // const newPoints = updateSectionPoints(
    //   sectionAPoints,
    //   selectedValue,
    //   fieldsetIndex
    // );
    // setSectionAPoints(newPoints);
  }

  function handleInputChangeInSectionB(e, fieldsetIndex) {
    const selectedValue = Number(e.target.value || e.target.dataset.value);
    const newPoints = updateSectionPoints(
      sectionBPoints,
      selectedValue,
      fieldsetIndex
    );
    setSectionBPoints(newPoints);
  }

  function handleInputChangeInSectionC(e, fieldsetIndex) {
    const selectedValue = Number(e.target.value || e.target.dataset.value);
    const newPoints = updateSectionPoints(
      sectionCPoints,
      selectedValue,
      fieldsetIndex
    );
    setSectionCPoints(newPoints);
  }

  function setPartComponent() {
    if (step === 1) {
      return (
        <BodyParts
          handleChange={handleInputChangeInSectionA}
          inputs={bodyPartsInputs}
        />
      );
    } else if (step === 2) {
      return (
        <Symptoms
          handleChange={handleInputChangeInSectionB}
          points={sectionBPoints}
          symptoms={symptoms}
        />
      );
    } else if (step === 3) {
      return (
        <SleepAndItch
          handleChange={handleInputChangeInSectionC}
          points={sectionCPoints}
          rangeData={rangeData}
        />
      );
    } else {
      return <Result scoradResult={scoradResult} />;
    }
  }

  function handleNavClick(e) {
    e.preventDefault();

    if (e.target.value === "prev") {
      setStep(step - 1);
    } else if (e.target.value === "next") {
      setStep(step + 1);
    }
    if (step === 3) {
      countScorad();
    }
  }

  return (
    <>
      <h2>Ocena SCORAD</h2>
      <form>
        {setPartComponent()}
        <FormNav handleClick={handleNavClick} step={step} />
      </form>
    </>
  );
}

export default Scorad;
