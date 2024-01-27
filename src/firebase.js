import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMOP-3ejX2H_m5Qv3ZT2K5VnxRYCnX5UU",
  authDomain: "react-log-in-87312.firebaseapp.com",
  projectId: "react-log-in-87312",
  storageBucket: "react-log-in-87312.appspot.com",
  messagingSenderId: "2926287980",
  appId: "1:2926287980:web:7c937a3cb499c642d74c49"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;