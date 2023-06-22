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

  function handleDrugAdding(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newDrug = {
      name: formData.get("drug"),
      frequency: Number(formData.get("drug-frequency")),
    };
    let newDrugsList = [...drugs, newDrug];
    console.log(newDrugsList);
    setDrugs(newDrugsList);
    e.target.reset();
  }

  function handleCareAdding(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCare = {
      name: formData.get("care"),
      frequency: Number(formData.get("care-frequency")),
    };
    let newCaresList = [...cares, newCare];
    console.log(newCaresList);
    setCares(newCaresList);
    e.target.reset();
  }

  function handleEventAdding(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEvent = {
      event: formData.get("event"),
    };
    let newEventsList = [...events, newEvent];
    console.log(newEventsList);
    setEvents(newEventsList);
    e.target.reset();
  }

  function handleNoteAdding(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newNote = formData.get("note");
    let newNotesList = [...notes, newNote];
    console.log(newNotesList);
    setNotes(newNotesList);
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
        <form onSubmit={(e) => handleDrugAdding(e)}>
          <AddingFormInput input={drugsTextInput} />
          <AddingFormInput input={drugsFrequencyInput} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Pielęgnacja">
        <List elements={cares} />
        <form onSubmit={(e) => handleCareAdding(e)}>
          <AddingFormInput input={caresTextInput} />
          <AddingFormInput input={caresFrequencyInput} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Zdarzenia">
        <List elements={events} />
        <form onSubmit={(e) => handleEventAdding(e)}>
          <AddingFormInput input={eventsTextInput} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Notatki">
        <List elements={notes} />
        <form onSubmit={(e) => handleNoteAdding(e)}>
          <AddingFormInput input={notesTextarea} />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
    </main>
  );
}

export default Dashboard;
