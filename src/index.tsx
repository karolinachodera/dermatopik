import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDocs, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBEssCenunDi3GmwZ9Tqp1hMFPCRfBwRws",
  authDomain: "dermatopik-fafaa.firebaseapp.com",
  projectId: "dermatopik-fafaa",
  storageBucket: "dermatopik-fafaa.appspot.com",
  messagingSenderId: "786299126069",
  appId: "1:786299126069:web:540af163295a52b1228c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function getUser(db: any) {
  const usersCollection = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCollection);
  const cityList = usersSnapshot.docs.map(doc => {
    console.log(`${doc.id} => imię: ${doc.data().name}, wiek: ${doc.data().age}`);
  });
  return cityList;
}

getUser(db);

try {
  const docRef: any = async () => {
    await addDoc(collection(db, "users"), {
      name: "Ada",
      age: 53,
    });
  }
  docRef();
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log("logged in");
  } else {
    console.log("no user");
  }
});

// const querySnapshot: any = async () => {
//   await getDocs(collection(db, "users"));
// };

// console.log(querySnapshot);
// querySnapshot.map((doc: any) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// const querySnapshot: any = async () => {
//   await getDocs(collection(db, "users"));
  
// };
// const data = querySnapshot().then(alert);
// console.log(data);
// data.map((doc: any) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// const querySnapshot: any = async () => {
//   await getDocs(collection(db, "users"));
  
// };
// const data = querySnapshot().then(alert);
// console.log(data);
// data.map((doc: any) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// const snapshot = await firebase.firestore().collection('events').get()
//     return snapshot.docs.map(doc => doc.data());

// async function querySnapshot() {
//   let promise = new Promise((resolve) => {
//     getDocs(collection(db, "users"));
//   });

//   let result = await promise; // wait until the promise resolves (*)
//   console.log(result);
//   alert(result); // "done!"
// }

// querySnapshot();


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
