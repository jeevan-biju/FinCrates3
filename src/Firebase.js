import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDdvP44cNwnPrniqQPWdT_YRwG8Ka7k4U",
  authDomain: "xsnipp-prot-2.firebaseapp.com",
  projectId: "xsnipp-prot-2",
  storageBucket: "xsnipp-prot-2.appspot.com",
  messagingSenderId: "694027962530",
  appId: "1:694027962530:web:ad15be0ed1cb217112affb",
  measurementId: "G-0D6X39SWMG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
