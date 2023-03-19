import { initializeApp } from 'firebase/app';
import { getAuth, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfevBmZmGK8JGgM1l3xV_H6Yf6O5b8oXs",
    authDomain: "web-store-books.firebaseapp.com",
    projectId: "web-store-books",
    storageBucket: "web-store-books.appspot.com",
    messagingSenderId: "10172238126",
    appId: "1:10172238126:web:1d01f1fe87f744bd9952bf",
    measurementId: "G-YVSMQXT8GC"
  };

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

export const logOut = () => {
  signOut(auth)
  console.log("Log Out successfully")
    
  .catch((err) => {
    console.log(err)
  })
}