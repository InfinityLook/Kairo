import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// údaje z Firebase konzole (Project Settings -> General)
const firebaseConfig = {
  apiKey: "TVUJ_API_KEY",
  authDomain: "tvuj-projekt.firebaseapp.com",
  projectId: "tvuj-projekt",
  storageBucket: "tvuj-projekt.appspot.com",
  messagingSenderId: "TVUJ_ID",
  appId: "TVUJ_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
