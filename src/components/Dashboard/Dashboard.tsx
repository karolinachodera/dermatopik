import { ReactElement, useState, useEffect } from "react";
import { Navigate, Link, useLocation } from 'react-router-dom';
import { db, usersRef, getUserScoradResults, setUserScoradResults, setUserNotes } from "../../config/firebase";
import { useRootContext } from '../Root/RootContext';

import Section from "../Section/Section";
import { NotesForm } from "../NotesForm/NotesForm";
import { List } from "../List/List";
import { LineChart } from "../LineChart/LineChart";

interface User {
  name: string,
  password: string,
  id: string,
  email: string,
}

interface ScoradResult {
  result: number, description: string, date: Date | any,
}

interface NoteType {
  note: string,
  date: Date,
}

function Dashboard(): ReactElement {
  const { scoradList, setScoradList, todayScorad, setTodayScorad, notes, setNotes } = useRootContext();

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

  function handleRemoveNote(index: number): void {
    const newNotes: NoteType[] = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    setUserNotes("tester", newNotes);
  }

  return (
    <main id="dashboard">
      <Section header="SCORAD" id="scorad" style="frame">
        <Link to="/scorad">Oceń Scorad</Link>
        {todayScorad &&
          <p>
            Twój dzisiejszy wynik SCORAD to {todayScorad.result} punktów.{" "}
            {todayScorad.description}.
          </p>}
          <LineChart chartData={scoradList} />
      </Section>
      <Section header="Ostatnie notatki" id="last-notes" style="frame">
        <Link to="/notes">Zobacz wszystkie</Link>
        <List
          elements={notes.length > 3 ? notes.slice(notes.length - 3, notes.length): notes}
          section="notes"
          handleRemoveItem={handleRemoveNote}
        />
        <NotesForm />
        
      </Section>
      <Section id="navigation">
        <Link to="/scorad" className="button">Oceń Scorad</Link>
        <Link to="/daily" className="button">Daily Check</Link>
        <Link to="/notes" className="button">Notatki</Link>
      </Section>
    </main>
  );
}

export default Dashboard;
