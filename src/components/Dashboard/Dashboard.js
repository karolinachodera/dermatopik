import { useState } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";

import "./Dashboard.css";

import { addingFormData } from "../../constants/dashboardInputs";

function Dashboard() {
  const [todayScorad, setTodayScorad] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [drugs, setDrugs] = useState([]);
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
  }

  function handleDrugAdding(e) {
    e.preventDefault();
    let newDrugs = [...drugs];
    newDrugs.push(listItem);
    console.log(newDrugs);
    setDrugs(newDrugs);
    setListItem({});
    e.target.reset();
  }

  function handleCareAdding(e) {
    e.preventDefault();
    let newCares = [...cares];
    newCares.push(listItem);
    console.log(newCares);
    setCares(newCares);
    setListItem({});
    e.target.reset();
  }

  function handleEventAdding(e) {
    e.preventDefault();
    let newEvents = [...events];
    newEvents.push(listItem);
    console.log(newEvents);
    setEvents(newEvents);
    setListItem({});
    e.target.reset();
  }

  function handleNoteAdding(e) {
    e.preventDefault();
    let newNotes = [...notes];
    newNotes.push(listItem);
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
      <Section
        header="Leki"
        addingFormInputs={[addingFormData[0], addingFormData[4]]}
        handleInputChange={handleInputChange}
        handleSubmit={handleDrugAdding}
        listItem={listItem}
      />
      <Section
        header="Pielęgnacja"
        addingFormInputs={[addingFormData[1], addingFormData[4]]}
        handleInputChange={handleInputChange}
        handleSubmit={handleCareAdding}
        listItem={listItem}
      />
      <Section
        header="Zdarzenia"
        addingFormInputs={[addingFormData[2]]}
        handleInputChange={handleInputChange}
        handleSubmit={handleEventAdding}
        listItem={listItem}
      />
      <Section
        header="Notatki"
        addingFormInputs={addingFormData[3]}
        handleInputChange={handleInputChange}
        handleSubmit={handleNoteAdding}
        listItem={listItem}
      />
    </main>
  );
}

export default Dashboard;
