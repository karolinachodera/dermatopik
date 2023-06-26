import { useState } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { DrugsForm } from "../DrugsForm/DrugsForm";
import { CaresForm } from "../CaresForm/CaresForm";
import { EventsForm } from "../EventsForm/EventsForm";
import { NotesForm } from "../NotesForm/NotesForm";
import { List } from "../List/List";

import "./Dashboard.css";

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
  const [todayScorad, setTodayScorad] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [drugs, setDrugs] = useState(drugsMock);
  const [cares, setCares] = useState(caresMock);
  const [events, setEvents] = useState(eventsMock);
  const [notes, setNotes] = useState(notesMock);

  function handleButtonClick(e) {
    if (e.target.name === "scorad") {
      setDisplayForm(true);
    }
  }

  function handleDrugAdding(e, newDrug) {
    e.preventDefault();
    setDrugs([...drugs, newDrug]);
    e.target.reset();
  }

  function handleCareAdding(e, newCare) {
    e.preventDefault();
    setCares([...cares, newCare]);
    e.target.reset();
  }

  function handleEventAdding(e, newEvent) {
    e.preventDefault();
    setEvents([...events, newEvent]);
    e.target.reset();
  }

  function handleNoteAdding(e, newNote) {
    e.preventDefault();
    setNotes([...notes, newNote]);
    e.target.reset();
  }

  function handleScoradFinish(scoradResult) {
    setTodayScorad(scoradResult);
    setDisplayForm(false);
  }

  function ScoradSection() {
    if (todayScorad === null && displayForm === false) {
      return (
        <Button
          description="Oceń SCORAD"
          handleClick={handleButtonClick}
          buttonName="scorad"
        />
      );
    } else if (displayForm === true) {
      return <Scorad handleScoradFinish={handleScoradFinish} />;
    } else {
      return <p>Twój dzisiejszy wynik SCORAD to: {todayScorad}</p>;
    }
  }

  return (
    <main>
      <Section width="full-width" header="SCORAD">
        <ScoradSection />
      </Section>
      <Section header="Leki" id="drugs" width="half-width">
        <List elements={drugs} section="drugs" />
        <DrugsForm
          handleSubmit={handleDrugAdding}
          textInput={drugsTextInput}
          frequencyInput={drugsFrequencyInput}
        />
      </Section>
      <Section header="Pielęgnacja" id="cares" width="half-width">
        <List elements={cares} section="cares" />
        <CaresForm
          handleSubmit={handleCareAdding}
          textInput={caresTextInput}
          frequencyInput={caresFrequencyInput}
        />
      </Section>
      <Section header="Zdarzenia" id="events" width="half-width">
        <List elements={events} section="events" />
        <EventsForm
          handleSubmit={handleEventAdding}
          textInput={eventsTextInput}
        />
      </Section>
      <Section header="Notatki" id="notes" width="half-width">
        <List elements={notes} section="notes" />
        <NotesForm handleSubmit={handleNoteAdding} textarea={notesTextarea} />
      </Section>
    </main>
  );
}

export default Dashboard;
