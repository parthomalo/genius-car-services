// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAeWXfJiFIpXwGfpi3PsbVJ731tjF_LTo",
  authDomain: "genius-car-services-616f1.firebaseapp.com",
  projectId: "genius-car-services-616f1",
  storageBucket: "genius-car-services-616f1.appspot.com",
  messagingSenderId: "609011825450",
  appId: "1:609011825450:web:cf10c9382d6ba5ad483c53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth