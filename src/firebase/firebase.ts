import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsdXsEYWgr7lYAi0x939Pz0OgJxMn1LD4",
  authDomain: "sdg-project-82c08.firebaseapp.com",
  projectId: "sdg-project-82c08",
  storageBucket: "sdg-project-82c08.appspot.com",
  messagingSenderId: "759870158399",
  appId: "1:759870158399:web:68f80a3d5eb1651e44ea8a",
  measurementId: "G-7NTSYRXK2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
