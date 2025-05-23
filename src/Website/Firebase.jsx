import { initializeApp } from "firebase/app";
// import { etAnalytics } from "firebase/getAnalytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZzWvSSNNrggQUCRk5Xweri75QJvroR8w",
  authDomain: "utilitty-8158d.firebaseapp.com",
  projectId: "utilitty-8158d",
  storageBucket: "utilitty-8158d.firebasestorage.app",
  messagingSenderId: "129279996687",
  appId: "1:129279996687:web:aee20103fb7fc4936b847a",
  measurementId: "G-B1YX5TCY8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
