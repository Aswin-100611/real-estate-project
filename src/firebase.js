import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

console.log("firebase.js loaded");

const firebaseConfig = {
  apiKey: "AIzaSyAgIO-usTyCffNIcjrViE4uPQCdM1sxikI",
  authDomain: "estatehub-355a9.firebaseapp.com",
  projectId: "estatehub-355a9",
  storageBucket: "estatehub-355a9.firebasestorage.app",
  messagingSenderId: "565467708974",
  appId: "1:565467708974:web:497ceabc461684eb88a9bf"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase App:", app);

export const db = getFirestore(app);

console.log("Firestore DB:", db);