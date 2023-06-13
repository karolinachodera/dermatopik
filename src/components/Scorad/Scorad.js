import { useState } from "react";

import BodyParts from "../BodyParts/BodyParts";
import Symptoms from "../Symptoms/Symptoms";
import SleepAndItch from "../SleepAndItch/SleepAndItch";
import Result from "../Result/Result";
import FormNav from "../FormNav/FormNav";

import {
  bodyPartsData,
  symptoms,
  symptomsValues,
  rangeData,
} from "../../constants/formInputs";

function Scorad() {
  const [step, setStep] = useState(1);
  const [scoradResult, setScoradResult] = useState(0);

  const [bodyPartsInputs, setBodyPartsInputs] = useState([...bodyPartsData]);
  const [symptomsInputs, setSymptomsInputs] = useState([...symptoms]);
  const [sleepAndItchInputs, setSleepAndItchInputs] = useState([...rangeData]);

  function countScorad() {
    let bodyPartsSum = 0;
    let symptomsSum = 0;
    let sleepAndItchSum = 0;
    bodyPartsInputs.forEach((input) => {
      if (input.isFrontChecked) {
        bodyPartsSum += input.bodyPartProportion;
      } else if (input.isBackChecked) {
        bodyPartsSum += input.bodyPartProportion;
      }
    });
    symptomsInputs.forEach((input) => (symptomsSum += input.points));
    sleepAndItchInputs.forEach((input) => (sleepAndItchSum += input.points));
    const result = bodyPartsSum / 5 + (7 * symptomsSum) / 2 + sleepAndItchSum;
    setScoradResult(result);
  }

  function handleInputChangeInSectionA(part, side) {
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
    newBodyPartsInputs[part.id] = updatedPart;
    setBodyPartsInputs(newBodyPartsInputs);
  }

  function handleInputChangeInSectionB(e, symptom) {
    let updatedSymptom;

    updatedSymptom = {
      ...symptom,
      points: Number(e.target.value),
    };
    const newSymptomInputs = [...symptomsInputs];
    newSymptomInputs[symptom.id] = updatedSymptom;
    setSymptomsInputs(newSymptomInputs);
  }

  function handleInputChangeInSectionC(e, symptom) {
    let updatedRange = {
      ...symptom,
      points: Number(e.target.value),
    };
    const newSleepAndItchInputs = [...sleepAndItchInputs];
    newSleepAndItchInputs[symptom.id] = updatedRange;
    setSleepAndItchInputs(newSleepAndItchInputs);
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
          symptoms={symptomsInputs}
          values={symptomsValues}
        />
      );
    } else if (step === 3) {
      return (
        <SleepAndItch
          handleChange={handleInputChangeInSectionC}
          rangeData={sleepAndItchInputs}
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
