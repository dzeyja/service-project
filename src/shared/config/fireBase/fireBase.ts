// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzIXyPQxUCh5OBCN0w1kGHEhEtiHIM_0o",
  authDomain: "service-project-c7a26.firebaseapp.com",
  projectId: "service-project-c7a26",
  storageBucket: "service-project-c7a26.firebasestorage.app",
  messagingSenderId: "320779120722",
  appId: "1:320779120722:web:22d69f20c367cd095e2f8b",
  measurementId: "G-V9LEE417BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);