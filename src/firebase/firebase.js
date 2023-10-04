import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhFDBxv9OaWaRF5xyIiwAKI_Wh7Ivqb7I",
  authDomain: "cursoreactbytes.firebaseapp.com",
  projectId: "cursoreactbytes",
  storageBucket: "cursoreactbytes.appspot.com",
  messagingSenderId: "569500165970",
  appId: "1:569500165970:web:ae79698d63b45fbb983c8b"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app

