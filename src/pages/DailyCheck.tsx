import { ReactElement } from "react";
import { useRootContext } from '../components/Root/RootContext';
import { setUserDrugs, setUserCares } from "../config/firebase";

import Section from "../components/Section/Section";
import { List } from "../components/List/List";
import { DrugsForm } from "../components/DrugsForm/DrugsForm";
import { CaresForm } from "../components/CaresForm/CaresForm";
import { EventsForm } from "../components/EventsForm/EventsForm";

import {
    drugsTextInput,
    drugsFrequencyInput,
    caresTextInput,
    caresFrequencyInput,
    eventsTextInput,
} from "../constants/dashboardInputs";

interface FormInput {
  name: string,
    frequency?: number,
    isChecked: boolean[],
}

export function DailyCheck(): ReactElement {
    const { drugs, setDrugs, cares, setCares, events, setEvents, userID } = useRootContext();
    
    function handleDrugCheck(element: FormInput, i: number) {
        const newChecked = [...element.isChecked];
        newChecked[i] = !newChecked[i];
        const updatedDrugs = drugs.map((drug) => {
            if (drug === element) {
            return { ...drug, isChecked: newChecked };
            }
            return drug;
        });
      setDrugs(updatedDrugs);
    }

    function handleCareCheck(element: FormInput, i: number) {
        const newChecked = [...element.isChecked];
        newChecked[i] = !newChecked[i];
        const updatedCares = cares.map((care) => {
            if (care === element) {
            return { ...care, isChecked: newChecked };
            }
            return care;
        });
      setCares(updatedCares);
      
    }

    function handleEventCheck(element: FormInput, i: number) {
        const newChecked = [...element.isChecked];
        newChecked[i] = !newChecked[i];
        const updatedEvents = events.map((event) => {
            if (event === element) {
            return { ...event, isChecked: newChecked };
            }
            return event;
        });
        setEvents(updatedEvents);
    }
    
    function handleDrugAdding(e: React.FormEvent<HTMLFormElement>, newDrug: FormInput): void {
      e.preventDefault();
      const updatedDrugs: FormInput[] = [...drugs, newDrug];
        setDrugs(updatedDrugs);
      (e.target as HTMLFormElement).reset();
      setUserDrugs(userID, updatedDrugs);
    }

    function handleCareAdding(e: React.FormEvent<HTMLFormElement>, newCare: FormInput): void {
      e.preventDefault();
      const updatedCares: FormInput[] = [...cares, newCare];
        setCares(updatedCares);
      (e.target as HTMLFormElement).reset();
      setUserCares(userID, updatedCares);
    }

    function handleEventAdding(e: React.FormEvent<HTMLFormElement>, newEvent: FormInput): void {
        e.preventDefault();
        setEvents([...events, newEvent]);
        (e.target as HTMLFormElement).reset();
    }
        
    function handleRemoveDrug(index: number): void {
        const newDrugs: FormInput[] = [...drugs];
        newDrugs.splice(index, 1);
      setDrugs(newDrugs);
      setUserDrugs(userID, newDrugs);
    }

    function handleRemoveCare(index: number): void {
        const newCares: FormInput[] = [...cares];
        newCares.splice(index, 1);
      setCares(newCares);
      setUserCares(userID, newCares);
    }

    function handleRemoveEvent(index: number): void {
        const newEvents: FormInput[] = [...events];
        newEvents.splice(index, 1);
        setEvents(newEvents);
    }
    return (
        <main className="third grid">
      <Section header="Leki" id="drugs" appearance="frame">
        <List
          elements={drugs}
            section="drugs"
            appearance="checkbox-list"
        handleRemoveItem={handleRemoveDrug}
            handleCheck={handleDrugCheck}
        />
        <DrugsForm
          handleSubmit={handleDrugAdding}
          textInput={drugsTextInput}
          frequencyInput={drugsFrequencyInput}
        />
      </Section>
      <Section header="Pielęgnacja" id="cares" appearance="frame">
        <List
          elements={cares}
            section="cares"
            appearance="checkbox-list"
            handleRemoveItem={handleRemoveCare}
            handleCheck={handleCareCheck}
        />
        <CaresForm
          handleSubmit={handleCareAdding}
          textInput={caresTextInput}
          frequencyInput={caresFrequencyInput}
        />
      </Section>
      <Section header="Zdarzenia" id="events" appearance="frame">
        <List
          elements={events}
            section="events"
            appearance="checkbox-list" 
            handleRemoveItem={handleRemoveEvent}
            handleCheck={handleEventCheck}
        />
          <EventsForm
          handleSubmit={handleEventAdding}
          textInput={eventsTextInput}
        />
      </Section>
    </main>
    )
}