import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgfXH-RSTesQquMYjKMjSPIiTuYsrS5q0",
  authDomain: "expensetracker-9336e.firebaseapp.com",
  projectId: "expensetracker-9336e",
  storageBucket: "expensetracker-9336e.appspot.com",
  messagingSenderId: "157523809845",
  appId: "1:157523809845:web:91ae0dbaa9d5a902bdc37c",
  measurementId: "G-7W0G1SZG77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
