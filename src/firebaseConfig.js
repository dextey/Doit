import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7dxyPxtsBNxmo29kCID_z_8ESPCXxMr4",
  authDomain: "doit-675e9.firebaseapp.com",
  projectId: "doit-675e9",
  storageBucket: "doit-675e9.appspot.com",
  messagingSenderId: "223141827436",
  appId: "1:223141827436:web:37dd4b2e2d39a66feed949",
  measurementId: "G-PJPE5JT562",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
