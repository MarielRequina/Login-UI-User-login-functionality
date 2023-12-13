// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaAbOEs9s12HFGuR8pnqXXQwFgQKhv-bA",
  authDomain: "adv-project-d279d.firebaseapp.com",
  projectId: "adv-project-d279d",
  storageBucket: "adv-project-d279d.appspot.com",
  messagingSenderId: "798210447993",
  appId: "1:798210447993:web:e8c0b9667e6f66dcff52a8",
  measurementId: "G-7LDZRKMV94"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});