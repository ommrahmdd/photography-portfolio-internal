import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYFUU4utqqiZd_sdmJUjR-qcPLIULDGHU",
  authDomain: "photography-portfolio-862d8.firebaseapp.com",
  projectId: "photography-portfolio-862d8",
  storageBucket: "photography-portfolio-862d8.appspot.com",
  messagingSenderId: "298132243551",
  appId: "1:298132243551:web:393406ce16972cab6cc7ea",
};

// initiate firebaes app
const app = initializeApp(firebaseConfig);

// service
export const db = getFirestore();
export const storage = getStorage(app);
