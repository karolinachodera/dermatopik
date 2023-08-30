import { ReactElement, useState, useEffect } from "react";

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { DrugsForm } from "../DrugsForm/DrugsForm";
import { CaresForm } from "../CaresForm/CaresForm";
import { EventsForm } from "../EventsForm/EventsForm";
import { NotesForm } from "../NotesForm/NotesForm";
import { List } from "../List/List";

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

// Firebase config and initialization
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, addDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEssCenunDi3GmwZ9Tqp1hMFPCRfBwRws",
  authDomain: "dermatopik-fafaa.firebaseapp.com",
  projectId: "dermatopik-fafaa",
  storageBucket: "dermatopik-fafaa.appspot.com",
  messagingSenderId: "786299126069",
  appId: "1:786299126069:web:540af163295a52b1228c7c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUser(db: any, coll: string, id: string) {
  const userRef: any = doc(db, coll, id);
  const userSnap = await getDoc(userRef);
  const user = userSnap.data();
  console.log(user);
  return user;
}

async function getUserScoradResults(id: string) {
  const resultsRef = collection(db, "users", id, "scorad-results");
  const resultsSnap = await getDocs(resultsRef);
  const results: ScoradResult[] = resultsSnap.docs.map(result => ({ ...result.data() as ScoradResult }));
  return results;
}

async function setUsersScoradResults(userId: string, scoradList: ScoradResult[]) {
  for (let i = 1; i <= scoradList.length; i++) {
    await setDoc(doc(db, "users", userId, "scorad-results", i.toString()), scoradList[i-1]);
  }
}

const user = getUser(db, "users", "tester");

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
    const fetchScoradResults = async () => {
      try {
        const userScoradResult = await getUserScoradResults("tester");
        setScoradList(userScoradResult);
      } catch (error) {
        console.error("Error fetching SCORAD results:", error);
      }
    };
    fetchScoradResults();
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
      const lastDate: Date = scoradList[scoradList.length - 1].date instanceof Date ? (scoradList[scoradList.length - 1].date): (scoradList[scoradList.length - 1].date).toDate();
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
    if (isTodayScorad(scoradResult)) {
      setScoradList([...scoradList.slice(0, scoradList.length - 1), scoradResult]);
    } else {
      setScoradList([...scoradList, scoradResult]);
    }
    setScoradList([...scoradList, scoradResult]);
    setDisplayForm(false);
    setUsersScoradResults("tester", [...scoradList, scoradResult]);
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
    const newEvents: string [] = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  }

  function handleRemoveNote(index: number): void {
    const newNotes: string[] = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  function ResultList(): ReactElement {
    const list: ReactElement[] = scoradList.map((result: ScoradResult, index: number) => {
      let date;
      if (result.date instanceof Date) {
        date = result.date;
      } else {
        date = result.date.toDate();
      }
      return <li key={`scoradresult-${index}`}>
        {date.toDateString()}: {result.result}
      </li>
    });
    return <>{list}</>
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
          <ResultList />
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
            <ResultList />
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
