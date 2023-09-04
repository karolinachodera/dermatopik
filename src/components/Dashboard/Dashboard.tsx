import { ReactElement, useState, useEffect } from "react";

import {db, usersRef, getUserScoradResults, setUserScoradResults} from "../../config/firebase"

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { DrugsForm } from "../DrugsForm/DrugsForm";
import { CaresForm } from "../CaresForm/CaresForm";
import { EventsForm } from "../EventsForm/EventsForm";
import { NotesForm } from "../NotesForm/NotesForm";
import { List } from "../List/List";
import { LineChart } from "../LineChart/LineChart";

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

interface User {
  name: string,
  password: string,
  id: string,
  email: string,
}

interface ScoradResult {
  result: number, description: string, date: Date | any,
}

interface FormInput {
  name: string,
  frequency: number,
}

function Dashboard(): ReactElement {
  const [todayScorad, setTodayScorad] = useState<ScoradResult | null>(null);
  const [scoradList, setScoradList] = useState<ScoradResult[]>([]);
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [drugs, setDrugs] = useState<FormInput[]>(drugsMock);
  const [cares, setCares] = useState<FormInput[]>(caresMock);
  const [events, setEvents] = useState<string[]>(eventsMock);
  const [notes, setNotes] = useState<string[]>(notesMock);

  useEffect(() => {
    let ignore: boolean = false;
    const fetchScoradResults = async () => {
      try {
        const userScoradResult: ScoradResult[] = await getUserScoradResults("tester");
        if (!ignore) {
          setScoradList(userScoradResult);
        }
      } catch (error) {
        console.error("Error fetching SCORAD results:", error);
      }
    };
    fetchScoradResults();

    return () => {ignore = true;}
  }, []);

  
  // (async () => {
  //   userScoradResult = await getUserScoradResults("tester");
  //   console.log(userScoradResult);
  //   setScoradList(userScoradResult);
  // })();

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>): void {
    if ((e.target as HTMLButtonElement).name === "scorad") {
      setDisplayForm(true);
    }
  }

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

  function handleNoteAdding(e: React.FormEvent<HTMLFormElement>, newNote: string): void {
    e.preventDefault();
    setNotes([...notes, newNote]);
    (e.target as HTMLFormElement).reset();
  }

  function isTodayScorad(scoradResult: ScoradResult): boolean {
    if (scoradList.length > 0) {
      const lastDate: Date = scoradList[scoradList.length - 1].date instanceof Date ? (scoradList[scoradList.length - 1].date) : (scoradList[scoradList.length - 1].date).toDate();
      const resultDate: Date = scoradResult.date;
      const isSameDate: boolean =
        resultDate.getDate() === lastDate.getDate() &&
        resultDate.getMonth() === lastDate.getMonth() &&
        resultDate.getFullYear() === lastDate.getFullYear();
      return isSameDate;
    } else {
      return false;
    }
  }

  function handleScoradFinish(scoradResult: ScoradResult): void {
    setTodayScorad(scoradResult);
    let newList: ScoradResult[];

    if (isTodayScorad(scoradResult)) {
      newList = ([...scoradList.slice(0, scoradList.length - 1), scoradResult]);
    } else {
      newList = ([...scoradList, scoradResult]);
    }
    setScoradList(newList);
    setDisplayForm(false);
    setUserScoradResults("tester", newList);
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

  function handleRemoveNote(index: number): void {
    const newNotes: string[] = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  function ScoradSection(): ReactElement {
    if (displayForm === true) {
      return <Scorad handleScoradFinish={handleScoradFinish} />;
    } else if (todayScorad) {
      return (
        <>
        <p>
          Twój dzisiejszy wynik SCORAD to {todayScorad.result} punktów.{" "}
          {todayScorad.description}.
          </p>
          <LineChart chartData={scoradList} />
        <Button
          description="Oceń SCORAD"
          handleClick={handleButtonClick}
          buttonName="scorad"
          />
          </>
      );
    } else {
      return (
              <>
          <LineChart chartData={scoradList} />
        <Button
          description="Oceń SCORAD"
          handleClick={handleButtonClick}
          buttonName="scorad"
          />
          </>
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
