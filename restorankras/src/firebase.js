import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8NhvDkHR91Y1d6sMuY8DTZWHSnPo0obg",
  authDomain: "restorankras.firebaseapp.com",
  projectId: "restorankras",
  storageBucket: "restorankras.appspot.com",
  messagingSenderId: "705903233725",
  appId: "1:705903233725:web:c58ea615a7b807e61345d4",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebase };
