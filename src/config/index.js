// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxaR-n7JMqoSd1E4kW7u2Jx6dWUHnxVYA",
  authDomain: "news-homepage-dca1e.firebaseapp.com",
  projectId: "news-homepage-dca1e",
  storageBucket: "news-homepage-dca1e.appspot.com",
  messagingSenderId: "4763852083",
  appId: "1:4763852083:web:9b7d758c759340779a3246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export default app;