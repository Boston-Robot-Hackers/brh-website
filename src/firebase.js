import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGTI7jT8J8NIG5JptQoCmBUmtYs6FZo_E",
  authDomain: "bostonrobothackers.firebaseapp.com",
  projectId: "bostonrobothackers",
  storageBucket: "bostonrobothackers.firebasestorage.app",
  messagingSenderId: "447114955376",
  appId: "1:447114955376:web:cf8dee8913c3a07e67c2b5",
  measurementId: "G-Y3L0NJT50Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);