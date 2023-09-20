import { ReactElement, useState, useEffect } from "react";
import { Navigate, Link, useLocation } from 'react-router-dom';
import { db, usersRef, getUserScoradResults, setUserScoradResults } from "../../config/firebase";
import { useRootContext } from '../Root/RootContext';

import Scorad from "../Scorad/Scorad";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { NotesForm } from "../NotesForm/NotesForm";
import { List } from "../List/List";
import { LineChart } from "../LineChart/LineChart";

import "./Dashboard.scss";

import {
  notesTextarea,
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

function Dashboard(): ReactElement {
  // const [todayScorad, setTodayScorad] = useState<ScoradResult | null>(null);
  // const [scoradList, setScoradList] = useState<ScoradResult[]>([]);
  // const [displayForm, setDisplayForm] = useState<boolean>(false);
  const { scoradList, setScoradList, todayScorad, setTodayScorad } = useRootContext();
  const [notes, setNotes] = useState<string[]>(notesMock);

  useEffect(() => {
    if ( todayScorad) {
      handleScoradFinish(todayScorad);
    } 
  }, [todayScorad]);

  function handleScoradFinish(result: ScoradResult): void {
    let newList: ScoradResult[];
    if (!result) {
      return;
    }
    if (isTodayScorad(result)) {
      newList = ([...scoradList.slice(0, scoradList.length - 1), result]);
    } else {
      newList = ([...scoradList, result]);
    }
    setScoradList(newList);
    setUserScoradResults("tester", newList);
  } 

  function handleNoteAdding(e: React.FormEvent<HTMLFormElement>, newNote: string): void {
    e.preventDefault();
    setNotes([...notes, newNote]);
    (e.target as HTMLFormElement).reset();
  }

  function isTodayScorad(scoradResult: ScoradResult): boolean {
    console.log("check");
    console.log(scoradList.length);
    console.log(scoradList);
    if (scoradList.length > 0) {
      console.log(scoradList);
      const lastDate: Date = scoradList[scoradList.length - 1].date instanceof Date ? (scoradList[scoradList.length - 1].date) : (scoradList[scoradList.length - 1].date).toDate();
      const resultDate: Date = scoradResult.date;
      console.log(resultDate);
      console.log(lastDate);
      const isSameDate: boolean =
        resultDate.getDate() === lastDate.getDate() &&
        resultDate.getMonth() === lastDate.getMonth() &&
        resultDate.getFullYear() === lastDate.getFullYear();
      console.log("isDameDate" + isSameDate)
      return isSameDate;

    } else {
      return false;
    }
  }

  function handleRemoveNote(index: number): void {
    const newNotes: string[] = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  function ScoradSection(): ReactElement {
  if (todayScorad) {
      return (
        <>
        <p>
          Twój dzisiejszy wynik SCORAD to {todayScorad.result} punktów.{" "}
          {todayScorad.description}.
          </p>
          <LineChart chartData={scoradList} />
          <Link to="/scorad">Oceń Scorad</Link>
          </>
      );
    } else {
      return (
              <>
          <LineChart chartData={scoradList} />
          <Link to="/scorad">Oceń Scorad</Link>
          </>
      );
    }
  }

  return (
    <main>
      <Section width="full-width" header="SCORAD" id="scorad">
        <ScoradSection />
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
