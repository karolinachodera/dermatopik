import { ReactElement, useState } from "react";
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
    notesTextarea,
    drugsMock,
    caresMock,
    eventsMock,
    notesMock,
} from "../constants/dashboardInputs";

interface FormInput {
  name: string,
  frequency: number,
}

export function DailyCheck(): ReactElement {

    const [drugs, setDrugs] = useState<FormInput[]>(drugsMock);
  const [cares, setCares] = useState<FormInput[]>(caresMock);
    const [events, setEvents] = useState<string[]>(eventsMock);
    
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
        <main>
      <Section header="Leki" id="drugs" width="half-width">
        <List
          elements={drugs}
          section="drugs"
          handleRemoveItem={handleRemoveDrug}
        />
        <DrugsForm
          handleSubmit={handleDrugAdding}
          textInput={drugsTextInput}
          frequencyInput={drugsFrequencyInput}
        />
      </Section>
      <Section header="Pielęgnacja" id="cares" width="half-width">
        <List
          elements={cares}
          section="cares"
          handleRemoveItem={handleRemoveCare}
        />
        <CaresForm
          handleSubmit={handleCareAdding}
          textInput={caresTextInput}
          frequencyInput={caresFrequencyInput}
        />
      </Section>
      <Section header="Zdarzenia" id="events" width="half-width">
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