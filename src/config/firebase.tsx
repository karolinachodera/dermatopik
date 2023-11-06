import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, orderBy, query } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

interface ScoradResult {
  result: number, description: string, date: Date | any,
}

interface NoteType {
  note: string,
  date: Date,
}

interface FormInput {
  name: string,
  frequency?: number,
  isChecked: boolean[],
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
export const auth = getAuth(app);

export async function logout() {
  await signOut(auth);
}

export async function getUser(id: string) {
  const userRef: any = doc(usersRef, id);
  const userSnap = await getDoc(userRef);
  const user = userSnap.data();
}

export async function getUserScoradResults(id: string) {
  const resultsRef = query(collection(db, "users", id, "scorad-results"), orderBy("date", "asc"));
  const resultsSnap = await getDocs(resultsRef);
  const results: ScoradResult[] = resultsSnap.docs.map(result => ({ ...result.data() as ScoradResult }));
  return results;
}

export async function setUserScoradResults(id: string, scoradList: ScoradResult[]) {
  if (id === "") { return;}
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
  if (id === "") { return;}
  for (let i = 1; i <= notes.length; i++) {
    await setDoc(doc(db, "users", id, "notes", i.toString()), notes[i-1]);
  }
}

export async function getUserDrugs(id: string) {
  const drugsRef = collection(db, "users", id, "drugs");
  const drugsSnap = await getDocs(drugsRef);
  const drugs: FormInput[] = drugsSnap.docs.map(drug => ({ ...drug.data() as FormInput }));
  return drugs;
}

export async function setUserDrugs(id: string, drugs: FormInput[]) {
  if (id === "") { return;}
  for (let i = 1; i <= drugs.length; i++) {
    await setDoc(doc(db, "users", id, "drugs", i.toString()), drugs[i-1]);
  }
}

export async function getUserCares(id: string) {
  const caresRef = collection(db, "users", id, "cares");
  const caresSnap = await getDocs(caresRef);
  const cares: FormInput[] = caresSnap.docs.map(care => ({ ...care.data() as FormInput }));
  return cares;
}

export async function setUserCares(id: string, cares: FormInput[]) {
  if (id === "") { return;}
  for (let i = 1; i <= cares.length; i++) {
    await setDoc(doc(db, "users", id, "cares", i.toString()), cares[i-1]);
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