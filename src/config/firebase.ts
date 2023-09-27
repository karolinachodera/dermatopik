import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, addDoc, setDoc, orderBy, query } from "firebase/firestore";

interface ScoradResult {
  result: number, description: string, date: Date | any,
}

interface NoteType {
  note: string,
  date: Date,
}

const firebaseConfig = {
  apiKey: "AIzaSyBEssCenunDi3GmwZ9Tqp1hMFPCRfBwRws",
  authDomain: "dermatopik-fafaa.firebaseapp.com",
  projectId: "dermatopik-fafaa",
  storageBucket: "dermatopik-fafaa.appspot.com",
  messagingSenderId: "786299126069",
  appId: "1:786299126069:web:540af163295a52b1228c7c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const usersRef = collection(db, "users"); 

export async function getUser(id: string) {
  const userRef: any = doc(usersRef, id);
  const userSnap = await getDoc(userRef);
  const user = userSnap.data();
  return user;
}

export async function getUserScoradResults(id: string) {
  const resultsRef = query(collection(db, "users", id, "scorad-results"), orderBy("date", "asc"));
  const resultsSnap = await getDocs(resultsRef);
  const results: ScoradResult[] = resultsSnap.docs.map(result => ({ ...result.data() as ScoradResult }));
  return results;
}

export async function setUserScoradResults(id: string, scoradList: ScoradResult[]) {
  for (let i = 1; i <= scoradList.length; i++) {
    await setDoc(doc(db, "users", id, "scorad-results", i.toString()), scoradList[i-1]);
  }
}

export async function getUserNotes(id: string) {
  const notesRef = query(collection(db, "users", id, "notes"), orderBy("date", "asc"));
  const notesSnap = await getDocs(notesRef);
  const notes: NoteType[] = notesSnap.docs.map(note => ({ ...note.data() as NoteType }));
  return notes;
}

export async function setUserNotes(id: string, notes: NoteType[]) {
  for (let i = 1; i <= notes.length; i++) {
    await setDoc(doc(db, "users", id, "notes", i.toString()), notes[i-1]);
  }
}

export function dateFormatting(date: Date | any): string {
    let formattedDate: string;
    let dateToFormat: Date;
    
    if (date instanceof Date) {
      dateToFormat = date;
    } else {
      dateToFormat = date.toDate();
    }
    const year: number = dateToFormat.getFullYear();
    const month: number | string = dateToFormat.getMonth() < 9 ? `0${dateToFormat.getMonth()+1}` : dateToFormat.getMonth() +1;
    const day: number | string = dateToFormat.getDate() < 10 ? `0${dateToFormat.getDate()}` : dateToFormat.getDate();

    formattedDate = `${day}.${month}.${year}`
  return formattedDate;
}