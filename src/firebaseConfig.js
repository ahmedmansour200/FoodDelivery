// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo2i8X8eNVi9Iyis9VKf3Z_X50w3WwFrw",
  authDomain: "foodapp-a0fee.firebaseapp.com",
  projectId: "foodapp-a0fee",
  storageBucket: "foodapp-a0fee.appspot.com",
  messagingSenderId: "253140237614",
  appId: "1:253140237614:web:b20565bdd22ef865d88ebf",
  measurementId: "G-CTJDL53V7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };