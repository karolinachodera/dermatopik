import { createContext, useContext, useState, useEffect } from 'react';
import { db, usersRef, getUserScoradResults, setUserScoradResults } from "../../config/firebase";
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

    useEffect(() => {
    let ignore: boolean = false;
    const fetchScoradResults = async () => {
      try {
        const userScoradResults: ScoradResult[] = await getUserScoradResults("tester");
        console.log("Fetched Scorad results:", userScoradResults); 
        if (!ignore) {
          setScoradList(userScoradResults);
        }
      } catch (error) {
        console.error("Error fetching SCORAD results:", error);
      }
    };
      fetchScoradResults();
    return () => {ignore = true;}
    }, []);

  return (
    <RootContext.Provider value={{ scoradList, setScoradList, todayScorad, setTodayScorad, drugs, setDrugs, cares, setCares, events, setEvents }}>
      {children}
    </RootContext.Provider>
  );
};