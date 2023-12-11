
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDA0lsVslMZRgzELWX835J_HqlZqOSIxqg",
  authDomain: "miniblog-c7b73.firebaseapp.com",
  projectId: "miniblog-c7b73",
  storageBucket: "miniblog-c7b73.appspot.com",
  messagingSenderId: "776574737032",
  appId: "1:776574737032:web:7997b9fe34494c6046dd3d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };