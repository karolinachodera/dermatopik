import { ChangeEvent, ReactElement, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useRootContext } from '../Root/RootContext';


import "./Scorad.scss";

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

interface BodyPart {
  bodyPartName: string,
  bodyPartProportion: number,
  id: number,
  frontSide: boolean,
  backSide: boolean,
  isFrontChecked: boolean,
  isBackChecked: boolean,
}

interface Symptom {
  name: string,
  polishLabel: string,
  points: number,
  id: number,
}

interface ScoradResult {
  result: number, description: string, date: Date,
}

interface Range {
  symptomName: string,
    rangeDescription: string,
    points: number,
    id: number,
}

function Scorad(): ReactElement {
  const [step, setStep] = useState<number>(1);
  const [scoradResult, setScoradResult] = useState< ScoradResult>({result: 0, description: "", date: new Date()});
  const [bodyPartsInputs, setBodyPartsInputs] = useState < BodyPart[] >([...bodyPartsData]);
  const [symptomsInputs, setSymptomsInputs] = useState<Symptom[]>([...symptoms]);
  const [sleepAndItchInputs, setSleepAndItchInputs] = useState<Range[]>([...rangeData]);
  const { setTodayScorad } = useRootContext();

  const navigate = useNavigate();

  function countScorad(): void {
    let bodyPartsSum: number = 0;
    let symptomsSum: number = 0;
    let sleepAndItchSum: number = 0;
    bodyPartsInputs.forEach((input) => {
      if (input.isFrontChecked) {
        bodyPartsSum += input.bodyPartProportion;
      } else if (input.isBackChecked) {
        bodyPartsSum += input.bodyPartProportion;
      }
    });
    symptomsInputs.forEach((input) => (symptomsSum += input.points));
    sleepAndItchInputs.forEach((input) => (sleepAndItchSum += input.points));
    const result: number = bodyPartsSum / 5 + (7 * symptomsSum) / 2 + sleepAndItchSum;

    let description: string;
    if (result <= 14) {
      description = "Twoje AZS ma łagodny przebieg";
    } else if (result > 14 && result <= 39) {
      description = "Twoje AZS ma umiarkowany przebieg";
    } else {
      description = "Twoje AZS ma ciężki przebieg";
    }
    const todayScorad = {
      result: result,
      description: description,
      date: new Date(),
    }
    setScoradResult(todayScorad);
  }

  function handleInputChangeInSectionA(part: BodyPart, side: string): void {
    let updatedPart: BodyPart;

    if (side === "front") {
      updatedPart = {
        ...part,
        isFrontChecked: !part.isFrontChecked,
      };
    } else if (side === "back") {
      updatedPart = {
        ...part,
        isBackChecked: !part.isBackChecked,
      } 
    } else {
        updatedPart = { ...part };
    }
    const newBodyPartsInputs: BodyPart[] = [...bodyPartsInputs];
    newBodyPartsInputs[part.id] = updatedPart;
    setBodyPartsInputs(newBodyPartsInputs);
  }

  function handleInputChangeInSectionB(e: ChangeEvent<HTMLInputElement>, symptom: Symptom): void {
    let updatedSymptom: Symptom;

    updatedSymptom = {
      ...symptom,
      points: Number((e.target as HTMLInputElement).value),
    };
    const newSymptomInputs: Symptom[] = [...symptomsInputs];
    newSymptomInputs[symptom.id] = updatedSymptom;
    setSymptomsInputs(newSymptomInputs);
  }

  function handleInputChangeInSectionC(e: ChangeEvent<HTMLInputElement>, symptom: Range): void {
    let updatedRange: Range = {
      ...symptom,
      points: Number((e.target as HTMLInputElement).value),
    };
    const newSleepAndItchInputs: Range[] = [...sleepAndItchInputs];
    newSleepAndItchInputs[symptom.id] = updatedRange;
    setSleepAndItchInputs(newSleepAndItchInputs);
  }

  function setPartComponent(): ReactElement {
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

  function handleNavClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();

    if ((e.target as HTMLButtonElement).value === "prev") {
      setStep(step - 1);
    } else if ((e.target as HTMLButtonElement).value === "next") {
      setStep(step + 1);
    }
    if (step === 3) {
      countScorad();
    }
  }

  function handleFinish(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setTodayScorad(scoradResult);
        navigate("/");
  }

  return (
    <main>
      <h2>Ocena SCORAD</h2>
      <form onSubmit={(e) => handleFinish(e)} >
        {setPartComponent()}
        <FormNav
          handleClick={handleNavClick}
          step={step}
        />
      </form>
    </main>
  );
}

export default Scorad;
