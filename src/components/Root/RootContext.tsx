import { createContext, useContext, useState, useEffect } from 'react';
import {db, usersRef, getUserScoradResults, setUserScoradResults} from "../../config/firebase"


interface ScoradResult {
  result: number, description: string, date: Date | any,
}
interface ContextType {
    scoradList: ScoradResult[],
    setScoradList: (newValue: ScoradResult[]) => void,
    todayScorad: ScoradResult | null,
    setTodayScorad: (newValue: ScoradResult) => void,
}
const RootContext = createContext<ContextType>({ scoradList: [], setScoradList: (newValue: ScoradResult[]) => { }, todayScorad: null, setTodayScorad: (newValue: ScoradResult) => {}});

export const useRootContext = () => {
  return useContext(RootContext);
};

export const RootProvider = ({ children }: {children: any}) => {
    const [scoradList, setScoradList] = useState<ScoradResult[]>([]);
    const [todayScorad, setTodayScorad] = useState<ScoradResult | null>(null);


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
    <RootContext.Provider value={{ scoradList, setScoradList, todayScorad, setTodayScorad }}>
      {children}
    </RootContext.Provider>
  );
};