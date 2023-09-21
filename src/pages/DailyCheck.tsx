import { ChangeEvent, ReactElement, useState } from "react";
import { useRootContext } from '../components/Root/RootContext';

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
    frequency: number,
    checked: boolean[]
}

export function DailyCheck(): ReactElement {
    const { drugs, setDrugs, cares, setCares, events, setEvents } = useRootContext();
    
    function handleDrugCheck(e: ChangeEvent<HTMLInputElement>, element: FormInput, i: number) {
        const newChecked = [...element.checked];
        newChecked[i] = !newChecked[i];
        const updatedDrugs = drugs.map((drug) => {
            if (drug === element) {
            return { ...drug, checked: newChecked };
            }
            return drug;
        });
        setDrugs(updatedDrugs);
    }

    function handleCareCheck(e: ChangeEvent<HTMLInputElement>, element: FormInput, i: number) {
        const newChecked = [...element.checked];
        newChecked[i] = !newChecked[i];
        const updatedCares = cares.map((care) => {
            if (care === element) {
            return { ...care, checked: newChecked };
            }
            return care;
        });
        setCares(updatedCares);
    }

    // function handleEventCheck(e: ChangeEvent<HTMLInputElement>, element: FormInput, i: number) {
    //     const newChecked = [...element.checked];
    //     newChecked[i] = !newChecked[i];
    //     const updatedEvents = events.map((event) => {
    //         if (event === element) {
    //         return { ...event, checked: newChecked };
    //         }
    //         return event;
    //     });
    //     setEvents(updatedEvents);
    // }
    
    function handleDrugAdding(e: React.FormEvent<HTMLFormElement>, newDrug: FormInput): void {
        e.preventDefault();
        setDrugs([...drugs, newDrug]);
        (e.target as HTMLFormElement).reset();
    }

    function handleCareAdding(e: React.FormEvent<HTMLFormElement>, newCare: FormInput): void {
        e.preventDefault();
        setCares([...cares, newCare]);
        (e.target as HTMLFormElement).reset();
    }

    function handleEventAdding(e: React.FormEvent<HTMLFormElement>, newEvent: string): void {
        e.preventDefault();
        setEvents([...events, newEvent]);
        (e.target as HTMLFormElement).reset();
    }
        
    function handleRemoveDrug(index: number): void {
        const newDrugs: FormInput[] = [...drugs];
        newDrugs.splice(index, 1);
        setDrugs(newDrugs);
    }

    function handleRemoveCare(index: number): void {
        const newCares: FormInput[] = [...cares];
        newCares.splice(index, 1);
        setCares(newCares);
    }

    function handleRemoveEvent(index: number): void {
        const newEvents: string[] = [...events];
        newEvents.splice(index, 1);
        setEvents(newEvents);
    }
    return (
        <main className="third grid">
      <Section header="Leki" id="drugs" style="frame">
        <List
          elements={drugs}
          section="drugs"
        handleRemoveItem={handleRemoveDrug}
            handleCheck={handleDrugCheck}
        />
        <DrugsForm
          handleSubmit={handleDrugAdding}
          textInput={drugsTextInput}
          frequencyInput={drugsFrequencyInput}
        />
      </Section>
      <Section header="Pielęgnacja" id="cares" style="frame">
        <List
          elements={cares}
          section="cares"
            handleRemoveItem={handleRemoveCare}
            handleCheck={handleCareCheck}
        />
        <CaresForm
          handleSubmit={handleCareAdding}
          textInput={caresTextInput}
          frequencyInput={caresFrequencyInput}
        />
      </Section>
      <Section header="Zdarzenia" id="events" style="frame">
        <List
          elements={events}
          section="events"
          handleRemoveItem={handleRemoveEvent}
        />
        <EventsForm
          handleSubmit={handleEventAdding}
          textInput={eventsTextInput}
        />
      </Section>
    </main>
    )
}