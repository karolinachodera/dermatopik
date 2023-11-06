import { createContext, useContext, useState, useEffect } from 'react';
import { auth, getUserScoradResults, getUserNotes, getUserDrugs, getUserCares } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { drugsMock, caresMock, eventsMock, notesMock, scoradMock } from "../../constants/dashboardInputs";

interface FormInput {
  name: string,
  frequency?: number,
  isChecked: boolean[],
}

interface ScoradResult {
  result: number, description: string, date: Date | any,
}

interface NoteType {
  note: string,
  date: Date,
}
interface ContextType {
  scoradList: ScoradResult[],
  setScoradList: (newValue: ScoradResult[]) => void,
  todayScorad: ScoradResult | null,
  setTodayScorad: (newValue: ScoradResult | null) => void,
  drugs: FormInput[],
  setDrugs: (newValue: FormInput[]) => void,
  cares: FormInput[],
  setCares: (newValue: FormInput[]) => void,
  events: FormInput[],
  setEvents: (newValue: FormInput[]) => void,
  notes: NoteType[],
  setNotes: (newValue: NoteType[]) => void,
  userID: string,
  setUserID: (newValue: string) => void,
}

const RootContext = createContext<ContextType>({
    scoradList: [], setScoradList: (newValue: ScoradResult[]) => { },
    todayScorad: null, setTodayScorad: (newValue: ScoradResult | null) => { },
    drugs: [],
    setDrugs: (newValue: FormInput[]) => { },
    cares: [],
    setCares: (newValue: FormInput[]) => { },
    events: [],
  setEvents: (newValue: FormInput[]) => { },
    notes: [],
  setNotes: (newValue: NoteType[]) => { },
    userID: "",
  setUserID: (newValue: string) => { },
});

export const useRootContext = () => {
  return useContext(RootContext);
};

export const RootProvider = ({ children }: {children: any}) => {
  const [scoradList, setScoradList] = useState<ScoradResult[]>(scoradMock);
  const [todayScorad, setTodayScorad] = useState<ScoradResult | null>(null);
  const [drugs, setDrugs] = useState<FormInput[]>(drugsMock);
  const [cares, setCares] = useState<FormInput[]>(caresMock);
  const [events, setEvents] = useState<FormInput[]>(eventsMock);
  const [notes, setNotes] = useState<NoteType[]>(notesMock);
    
  const [userID, setUserID] = useState<string>("");
  
  async function monitorAuthState() {
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        if (uid !== userID) {
          setUserID(uid);
        }
      } else {
        if (userID !== "") {
          setUserID("");
        }
      }
    })
  }

  monitorAuthState();

  async function fetchScoradResults(id: string, ignore: boolean) {
    if (id !== "") {
      try {
        const userScoradResults: ScoradResult[] = await getUserScoradResults(id);
        console.log("Fetched Scorad results:", userScoradResults); 
        if (!ignore) {
          setScoradList(userScoradResults);
        }
      } catch (error) {
        console.error("Error fetching SCORAD results:", error);
      }
    } else {
      setScoradList(scoradMock);
    }
  };

  async function fetchNotes(id: string, ignore: boolean) {
    if (id !== "") {
      try {
        const userNotes: NoteType[] = await getUserNotes(id);
        console.log("Fetched notes:", userNotes); 
        if (!ignore) {
          setNotes(userNotes);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    } else {
      setNotes(notesMock);
    }
  };

  async function fetchDrugs(id: string, ignore: boolean) {
    if (id !== "") {
      try {
        const userDrugs: FormInput[] = await getUserDrugs(id);
        console.log("Fetched drugs:", userDrugs); 
        if (!ignore) {
          setDrugs(userDrugs);
        }
      } catch (error) {
        console.error("Error fetching drugs:", error);
      }
    } else {
      setDrugs(drugsMock);
    }   
  };
  
  async function fetchCares(id: string, ignore: boolean) {
    if (id !== "") {
      try {
        const userCares: FormInput[] = await getUserCares(id);
        console.log("Fetched cares:", userCares); 
        if (!ignore) {
          setCares(userCares);
        }
      } catch (error) {
        console.error("Error fetching cares:", error);
      }
    } else {
      setCares(caresMock);
    }
      
  };
  
    useEffect(() => {
      let ignore: boolean = false;
      fetchScoradResults(userID, ignore);
      fetchNotes(userID, ignore);
      fetchDrugs(userID, ignore);
      fetchCares(userID, ignore);
    return () => {ignore = true;}
    }, [userID]);

  return (
    <RootContext.Provider value={{ scoradList, setScoradList, todayScorad, setTodayScorad, drugs, setDrugs, cares, setCares, events, setEvents, notes, setNotes, userID, setUserID }}>
      {children}
    </RootContext.Provider>
  );
};