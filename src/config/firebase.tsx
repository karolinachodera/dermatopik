import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, addDoc, setDoc } from "firebase/firestore";

interface ScoradResult {
  result: number, description: string, date: Date | any,
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
  console.log(user);
  return user;
}

export async function getUserScoradResults(id: string) {
  const resultsRef = collection(db, "users", id, "scorad-results");
  const resultsSnap = await getDocs(resultsRef);
  const results: ScoradResult[] = resultsSnap.docs.map(result => ({ ...result.data() as ScoradResult }));
  return results;
}

export async function setUserScoradResults(userId: string, scoradList: ScoradResult[]) {
  for (let i = 1; i <= scoradList.length; i++) {
    await setDoc(doc(db, "users", userId, "scorad-results", i.toString()), scoradList[i-1]);
  }
}