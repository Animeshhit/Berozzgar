import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCD9df3fe4UUoHl2Ir_T55Yph6ialllc6g",
  authDomain: "berozgar-1725c.firebaseapp.com",
  projectId: "berozgar-1725c",
  storageBucket: "berozgar-1725c.appspot.com",
  messagingSenderId: "117725506530",
  appId: "1:117725506530:web:ee5df1a319088f4d21e7bb",
  measurementId: "G-YY4LJ26KG7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default app;
export { storage };
