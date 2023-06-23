import { useState } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";
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
} from "../../constants/dashboardInputs";
import { AddingFormInput } from "../AddingFormInput/AddingFormInput";

function Dashboard() {
  const [todayScorad, setTodayScorad] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [drugs, setDrugs] = useState(drugsMock);
  const [cares, setCares] = useState([]);
  const [events, setEvents] = useState([]);
  const [notes, setNotes] = useState([]);

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
      return <Scorad />;
    } else {
      return <p>Twój dzisiejszy wynik SCORAD to: {todayScorad}</p>;
    }
  }

  return (
    <main>
      <Section width="full-width" header="SCORAD">
        <ScoradSection />
      </Section>
      <Section header="Leki">
        <List elements={drugs} />
        <form
          onSubmit={(e) =>
            handleDrugAdding(e, {
              name: e.target.drug.value,
              frequency: Number(e.target.drugFrequency.value),
            })
          }
        >
          <AddingFormInput input={drugsTextInput} />
          <AddingFormInput input={drugsFrequencyInput} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Pielęgnacja">
        <List elements={cares} />
        <form
          onSubmit={(e) =>
            handleCareAdding(e, {
              name: e.target.care.value,
              frequency: Number(e.target.careFrequency.value),
            })
          }
        >
          <AddingFormInput input={caresTextInput} />
          <AddingFormInput input={caresFrequencyInput} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Zdarzenia">
        <List elements={events} />
        <form
          onSubmit={(e) =>
            handleEventAdding(e, { event: e.target.event.value })
          }
        >
          <AddingFormInput input={eventsTextInput} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Notatki">
        <List elements={notes} />
        <form onSubmit={(e) => handleNoteAdding(e, e.target.note.value)}>
          <AddingFormInput input={notesTextarea} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
    </main>
  );
}

export default Dashboard;
