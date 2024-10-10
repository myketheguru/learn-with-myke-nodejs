// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf6w-vRC6QKKige2Jp9tp2WQ1vii1OBWU",
  authDomain: "learn-with-myke-f0d78.firebaseapp.com",
  projectId: "learn-with-myke-f0d78",
  storageBucket: "learn-with-myke-f0d78.appspot.com",
  messagingSenderId: "323959319925",
  appId: "1:323959319925:web:89ab7341ed729e368db73c",
  measurementId: "G-3YJPFV4380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)