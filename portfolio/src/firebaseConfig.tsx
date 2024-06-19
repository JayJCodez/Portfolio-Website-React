// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx-o3wj8png89khE-wKhzD-LtAt5Wr4l8",
  authDomain: "portfoliowebsite-7f3dd.firebaseapp.com",
  projectId: "portfoliowebsite-7f3dd",
  storageBucket: "portfoliowebsite-7f3dd.appspot.com",
  messagingSenderId: "750066695869",
  appId: "1:750066695869:web:c28dc6f88bcd4166a101d4",
  measurementId: "G-J83KE91TDZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
