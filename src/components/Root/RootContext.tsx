import { createContext, useContext, useState, useEffect } from 'react';
import { db, usersRef, auth, getUserScoradResults, setUserScoradResults, getUserNotes, getUserDrugs, getUserCares } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import {
    drugsMock,
    caresMock,
    eventsMock,
    notesMock,
} from "../../constants/dashboardInputs";

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
    setTodayScorad: (newValue: ScoradResult) => void,
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
    todayScorad: null, setTodayScorad: (newValue: ScoradResult) => { },
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
  const [scoradList, setScoradList] = useState<ScoradResult[]>([]);
  const [todayScorad, setTodayScorad] = useState<ScoradResult | null>(null);
  const [drugs, setDrugs] = useState<FormInput[]>(drugsMock);
  const [cares, setCares] = useState<FormInput[]>(caresMock);
  const [events, setEvents] = useState<FormInput[]>(eventsMock);
  const [notes, setNotes] = useState<NoteType[]>(notesMock);
    
  const [userID, setUserID] = useState<string>("");
  console.log(userID);
  
  async function monitorAuthState() {
    onAuthStateChanged(auth, user => {
      if (user) {
      // if (user && userID !== user.uid) {
        const uid = user.uid;

        console.log("zalogowany" + user);
        if (uid !== userID) {
          setUserID(uid);
        }
        
      } else {
        console.log("wylogowany" + user);
        setUserID("");
      }
    })
  }

  monitorAuthState();

  async function fetchScoradResults(id: string) {
    try {
      if (id !== "") {
        const userScoradResults: ScoradResult[] = await getUserScoradResults(id);
        console.log("Fetched Scorad results:", userScoradResults); 
        //if (!ignore) {
          setScoradList(userScoradResults);
        //}
      } else {
        setScoradList([]);
      }
    } catch (error) {
      console.error("Error fetching SCORAD results:", error);
    }
  };
    useEffect(() => {
      let ignore: boolean = false;
      fetchScoradResults(userID);
      //setScoradList(scoradResults);
    // const fetchScoradResults = async () => {
    //   try {
    //     const userScoradResults: ScoradResult[] = await getUserScoradResults("tester");
    //     console.log("Fetched Scorad results:", userScoradResults); 
    //     if (!ignore) {
    //       setScoradList(userScoradResults);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching SCORAD results:", error);
    //   }
    // };
      const fetchNotes = async () => {
      try {
        const userNotes: NoteType[] = await getUserNotes("tester");
        console.log("Fetched notes:", userNotes); 
        if (!ignore) {
          setNotes(userNotes);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
      };

      const fetchDrugs = async () => {
      try {
        const userDrugs: FormInput[] = await getUserDrugs("tester");
        console.log("Fetched drugs:", userDrugs); 
        if (!ignore) {
          setDrugs(userDrugs);
        }
      } catch (error) {
        console.error("Error fetching drugs:", error);
      }
      };

      const fetchCares = async () => {
      try {
        const userCares: FormInput[] = await getUserCares("tester");
        console.log("Fetched cares:", userCares); 
        if (!ignore) {
          setCares(userCares);
        }
      } catch (error) {
        console.error("Error fetching cares:", error);
      }
      };
      //fetchScoradResults();
      fetchNotes();
      fetchDrugs();
      fetchCares();
    return () => {ignore = true;}
    }, [userID]);

  return (
    <RootContext.Provider value={{ scoradList, setScoradList, todayScorad, setTodayScorad, drugs, setDrugs, cares, setCares, events, setEvents, notes, setNotes, userID, setUserID }}>
      {children}
    </RootContext.Provider>
  );
};