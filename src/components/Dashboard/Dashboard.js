import { useState } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";

import "./Dashboard.css";

import {
  addingFormData,
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
  const [listItem, setListItem] = useState({});

  function handleButtonClick(e) {
    if (e.target.name === "scorad") {
      setDisplayForm(true);
    }
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setListItem((values) => ({ ...values, [name]: value }));
    console.log(listItem);
  }

  function handleDrugAdding(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newDrug = {
      name: formData.get("drug"),
      frequency: Number(formData.get("drug-frequency")),
    };
    console.log(newDrug);
    let newDrugsList = [...drugs, newDrug];
    console.log(newDrugsList);
    setDrugs(newDrugsList);
    e.target.reset();
  }

  function handleCareAdding(e) {
    e.preventDefault();
    let newCares = [...cares, listItem];
    console.log(newCares);
    setCares(newCares);
    setListItem({});
    e.target.reset();
  }

  function handleEventAdding(e) {
    e.preventDefault();
    let newEvents = [...events, listItem];
    console.log(newEvents);
    setEvents(newEvents);
    setListItem({});
    e.target.reset();
  }

  function handleNoteAdding(e) {
    e.preventDefault();
    let newNotes = [...notes, listItem];
    console.log(newNotes);
    setNotes(newNotes);
    setListItem({});
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
      <Section
        width="full-width"
        children={<ScoradSection />}
        header="SCORAD"
      />
      <Section header="Leki">
        <form onSubmit={(e) => handleDrugAdding(e)}>
          <AddingFormInput
            input={drugsTextInput}
            handleChange={handleInputChange}
            listItem={listItem}
          />
          <AddingFormInput
            input={drugsFrequencyInput}
            handleChange={handleInputChange}
            listItem={listItem}
          />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Pielęgnacja">
        <form onSubmit={(e) => handleCareAdding(e)}>
          <AddingFormInput
            input={caresTextInput}
            handleChange={handleInputChange}
            listItem={listItem}
          />
          <AddingFormInput
            input={caresFrequencyInput}
            handleChange={handleInputChange}
            listItem={listItem}
          />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Zdarzenia">
        <form onSubmit={(e) => handleEventAdding(e)}>
          <AddingFormInput
            input={eventsTextInput}
            handleChange={handleInputChange}
            listItem={listItem}
          />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
      <Section header="Notatki">
        <form onSubmit={(e) => handleNoteAdding(e)}>
          <AddingFormInput
            input={notesTextarea}
            handleChange={handleInputChange}
            listItem={listItem}
          />
          <button type="submit">Dodaj</button>
        </form>
      </Section>
    </main>
  );
}

export default Dashboard;
