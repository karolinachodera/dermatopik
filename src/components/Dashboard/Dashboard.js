import { useState } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";

import "./Dashboard.css";

function Dashboard() {
  const [todayScorad, setTodayScorad] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayAddingForm, setDisplayAddingForm] = useState(false);
  const [drugs, setDrugs] = useState([]);

  function handleButtonClick(e) {
    if (e.target.name === "scorad") {
      setDisplayForm(true);
    }
  }

  function handleInputAdding() {}

  function AddingForm({ header }) {
    if (displayAddingForm === true) {
      return (
        <form>
          <h3>Dodaj {header}</h3>
          <label for="drug-name">Podaj nazwę leku</label>
          <input id="drug-name" type="text" value=""></input>
          <label for="frequency">Ilość dawek dziennie</label>
          <input id="frequency" type="number"></input>
          <button onClick={handleInputAdding}>Dodaj</button>
        </form>
      );
    } else {
      return;
    }
  }

  function handleDisplayAddingForm(e) {
    e.preventDefault();
    let header = e.target.name;
    setDisplayAddingForm(true);
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
      <section className="main">
        <h2>SCORAD</h2>
        {ScoradSection()}
      </section>
      <Section header="Leki" handleClick={handleDisplayAddingForm} />
      <AddingForm header="Leki" />
      <Section header="Pielęgnacja" handleClick={handleDisplayAddingForm} />
      <Section header="Zdarzenia" handleClick={handleDisplayAddingForm} />
      <Section header="Notatki" />
    </main>
  );
}

export default Dashboard;
