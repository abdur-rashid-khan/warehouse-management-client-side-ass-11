// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc75dpDY1TBe07hErvmZ6ARn8xL0CPpq8",
  authDomain: "shopin-d60f1.firebaseapp.com",
  projectId: "shopin-d60f1",
  storageBucket: "shopin-d60f1.appspot.com",
  messagingSenderId: "430008090176",
  appId: "1:430008090176:web:b753cf07a6ecf6eab129a5"

  // process.env.apiKey,
  // process.env.authDomain,
  // process.env.projectId,
  // process.env.storageBucket,
  // process.env.messagingSenderId,
  // process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;