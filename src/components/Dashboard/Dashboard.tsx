import { ReactElement, useState } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { DrugsForm } from "../DrugsForm/DrugsForm";
import { CaresForm } from "../CaresForm/CaresForm";
import { EventsForm } from "../EventsForm/EventsForm";
import { NotesForm } from "../NotesForm/NotesForm";
import { List } from "../List/List";

import "./Dashboard.scss";

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
} from "../../constants/dashboardInputs";

function Dashboard() {
  const [todayScorad, setTodayScorad] = useState < {result: number, description: string} | null>(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [drugs, setDrugs] = useState(drugsMock);
  const [cares, setCares] = useState(caresMock);
  const [events, setEvents] = useState(eventsMock);
  const [notes, setNotes] = useState(notesMock);

  function handleButtonClick(e: Event) {
    if ((e.target as HTMLButtonElement).name === "scorad") {
      setDisplayForm(true);
    }
  }

  function handleDrugAdding(e: Event, newDrug: {name: string, frequency: number}) {
    e.preventDefault();
    setDrugs([...drugs, newDrug]);
    (e.target as HTMLFormElement).reset();
  }

  function handleCareAdding(e: Event, newCare: {name: string, frequency: number}) {
    e.preventDefault();
    setCares([...cares, newCare]);
    (e.target as HTMLFormElement).reset();
  }

  function handleEventAdding(e: Event, newEvent: string) {
    e.preventDefault();
    setEvents([...events, newEvent]);
    (e.target as HTMLFormElement).reset();
  }

  function handleNoteAdding(e: Event, newNote: string) {
    e.preventDefault();
    setNotes([...notes, newNote]);
    (e.target as HTMLFormElement).reset();
  }

  function handleScoradFinish(scoradResult: {result: number, description: string}) {
    setTodayScorad(scoradResult);
    setDisplayForm(false);
  }

  function handleRemoveDrug(index: number) {
    const newDrugs = [...drugs];
    newDrugs.splice(index, 1);
    setDrugs(newDrugs);
  }

  function handleRemoveCare(index: number) {
    const newCares = [...cares];
    newCares.splice(index, 1);
    setCares(newCares);
  }

  function handleRemoveEvent(index: number) {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  }

  function handleRemoveNote(index: number) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  function ScoradSection(): ReactElement {
    if (displayForm === true) {
      return <Scorad handleScoradFinish={handleScoradFinish} />;
    } else if (todayScorad) {
      return (
        <p>
          Twój dzisiejszy wynik SCORAD to {todayScorad.result} punktów.{" "}
          {todayScorad.description}.
        </p>
      );
    } else {
            return (
        <Button
          description="Oceń SCORAD"
          handleClick={handleButtonClick}
          buttonName="scorad"
        />
      );
    }
  }

  return (
    <main>
      <Section width="full-width" header="SCORAD" id="scorad">
        <ScoradSection />
      </Section>
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
      <Section header="Notatki" id="notes" width="half-width">
        <List
          elements={notes}
          section="notes"
          handleRemoveItem={handleRemoveNote}
        />
        <NotesForm handleSubmit={handleNoteAdding} textarea={notesTextarea} />
      </Section>
    </main>
  );
}

export default Dashboard;
